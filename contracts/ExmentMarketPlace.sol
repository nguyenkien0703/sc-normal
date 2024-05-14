// SPDX-License-Identifier: MIT
// Creator: Victor Luu

pragma solidity ^0.8.13;

import "./ERC721/ExmentCollection.sol";
import "./IExmentMarketPlace.sol";

contract ExmentMarketPlace is IExmentMarketPlace {
    mapping(address => uint256) private _balances;

    address[] private _collections;

    address private _admin;

    // Mapping from collection ID to owner address
    mapping(uint256 => address) private _owners;

    // Mapping from collection ID to owner address
    mapping(uint256 => Collection) private _collectionsInfo;

    /**
     * @dev Throws if called by any account other than the admin.
     */
    modifier onlyAdmin() {
        require(_admin == msg.sender, "Err: caller is not admin");
        _;
    }

    constructor() {
        _admin = msg.sender;
    }

    // =============================================================
    //                   COLLECTION COUNTING OPERATIONS
    // =============================================================

    /**
     * @dev Returns the starting COLLECTION ID.
     * To change the starting COLLECTION ID, please override this function.
     */
    function _startColectionId() internal view virtual returns (uint256) {
        return 0;
    }

    /**
     * @dev Returns the next collection ID to be created.
     */
    function _nextCollectionId() internal view virtual returns (uint256) {
        return allCollectionsLength();
    }

    /**
     * @dev See {IExmentMarketPlace-admin}.
     */
    function admin() public view override returns (address) {
        return _admin;
    }

    /**
     * @dev See {IExmentMarketPlace-allCollectionsLength}.
     */
    function allCollectionsLength() public view override returns (uint256) {
        return _collections.length;
    }

    /**
     * @dev See {IExmentMarketPlace-balanceOf}.
     */
    function balanceOf(address owner) public view override returns (uint256) {
        return _balances[owner];
    }

    /**
     * @dev See {IExmentMarketPlace-collections}.
     */
    function collections(uint256 index) public view override returns (address) {
        return _collections[index];
    }

    /**
     * @dev See {IExmentMarketPlace-collections}.
     */
    function collectionInfo(
        uint256 index
    ) public view override returns (Collection memory) {
        return _collectionsInfo[index];
    }

    /**
     * @dev See {IExmentMarketPlace-collectionsOfOwnerIn}.
     */
    function collectionsOfOwnerIn(
        address owner,
        uint256 start,
        uint256 stop
    ) public view override returns (address[] memory) {
        unchecked {
            if (start >= stop) revert InvalidQueryRange();
            uint256 collectionIdsIdx;
            uint256 stopLimit = allCollectionsLength();
            // Set `start = max(start, _startCollectionId())`.
            if (start < 0) {
                start = 0;
            }
            // Set `stop = min(stop, stopLimit)`.
            if (stop > stopLimit) {
                stop = stopLimit;
            }
            uint256 collectionIdsMaxLength = balanceOf(owner);
            // Set `collectionIdsMaxLength = min(balanceOf(owner), stop - start)`,
            // to cater for cases where `balanceOf(owner)` is too big.
            if (start < stop) {
                uint256 rangeLength = stop - start;
                if (rangeLength < collectionIdsMaxLength) {
                    collectionIdsMaxLength = rangeLength;
                }
            } else {
                collectionIdsMaxLength = 0;
            }
            address[] memory collectionIds = new address[](
                collectionIdsMaxLength
            );
            if (collectionIdsMaxLength == 0) {
                return collectionIds;
            }
            // We need to call `explicitOwnershipOf(start)`,
            // because the slot at `start` may not be initialized.
            Collection memory ownership = _collectionsInfo[start];
            address currOwnershipAddr;
            // If the starting slot exists (i.e. not burned), initialize `currOwnershipAddr`.
            // `ownership.address` will not be zero, as `start` is clamped to the valid token ID range.
            if (!ownership.deactived) {
                currOwnershipAddr = ownership.owner;
            }
            for (
                uint256 i = start;
                i != stop && collectionIdsIdx != collectionIdsMaxLength;
                ++i
            ) {
                ownership = _collectionsInfo[i];
                if (ownership.deactived) {
                    continue;
                }
                if (ownership.owner != address(0)) {
                    currOwnershipAddr = ownership.owner;
                }
                if (currOwnershipAddr == owner) {
                    collectionIds[collectionIdsIdx++] = ownership.collection;
                }
            }
            // Downsize the array to fit.
            assembly {
                mstore(collectionIds, collectionIdsIdx)
            }
            return collectionIds;
        }
    }

    /**
     * @dev See {IExmentMarketPlace-collectionsOfOwner}.
     */
    function collectionsOfOwner(
        address owner
    ) public view override returns (address[] memory) {
        unchecked {
            uint256 collectionIdsIdx;
            address currOwnershipAddr;
            uint256 collectionIdsLength = balanceOf(owner);
            address[] memory collectionIds = new address[](collectionIdsLength);
            Collection memory ownership;
            for (uint256 i = 0; collectionIdsIdx != collectionIdsLength; ++i) {
                ownership = _collectionsInfo[i];
                if (ownership.deactived) {
                    continue;
                }
                if (ownership.owner != address(0)) {
                    // collection hasnot been created yet
                    currOwnershipAddr = ownership.owner;
                }
                if (currOwnershipAddr == owner) {
                    collectionIds[collectionIdsIdx++] = ownership.collection;
                }
            }
            // Downsize the array to fit.
            assembly {
                mstore(collectionIds, collectionIdsIdx)
            }
            return collectionIds;
        }
    }

    /**
     * @dev See {IExmentMarketPlace-ownerOf}.
     */
    function ownerOf(
        uint256 collectionIndex
    ) external view override returns (address) {
        return _owners[collectionIndex];
    }

    // =============================================================
    //                         WRITE FUNCTION
    // =============================================================

    /**
     * @dev See {IExmentMarketPlace-createCollection}.
     */
    function createCollection(
        string memory _name,
        string memory _symbol,
        address _seller,
        uint256 _price,
        uint256 _localId
    ) external override onlyAdmin {
        require(_seller != address(0), "MarketPlace: ZERO_ADDRESS");
        address newCollection;
        bytes memory bytecode = type(ExmentCollection).creationCode;
        uint256 nextIdCollection = _nextCollectionId();
        bytes32 salt = keccak256(
            abi.encodePacked(_seller, _nextCollectionId())
        );
        assembly {
            newCollection := create2(
                0,
                add(bytecode, 32),
                mload(bytecode),
                salt
            )
        }
        // deploy new collection
        ExmentCollection(newCollection).initialize(
            _name,
            _symbol,
            _seller,
            _price
        );
        // update variable
        _owners[nextIdCollection] = _seller;
        _balances[_seller] += 1;
        _collectionsInfo[nextIdCollection] = Collection({
            collection: newCollection,
            owner: _seller,
            name: _name,
            symbol: _symbol,
            price: _price,
            localId: _localId,
            deactived: false,
            totalSupply: 0
        });
        _collections.push(newCollection);

        // push event
        emit CollectionCreated(
            newCollection,
            _seller,
            _collections.length,
            _localId
        );
    }

    function buyNFT(
        uint256 _collectionIndex,
        address _collectionAddress,
        uint256 _price,
        address _seller,
        address _buyer
    ) external override onlyAdmin { 
        // check collection created
        require(
            _collectionIndex < _nextCollectionId(),
            "MarketPlace: not found collection"
        );
        Collection storage col = _collectionsInfo[_collectionIndex];
        // verify info collection
        require(
            col.collection == _collectionAddress,
            "MarketPlace: wrong address collection"
        );
        require(!col.deactived, "MarketPlace: collection not sale");
        require(col.price == _price, "MarketPlace: wrong price collection");
        require(col.owner == _seller, "MarketPlace: wrong owner collection");

        // mint NFT
        uint256 tokenId = ExmentCollection(_collectionAddress).mint(_buyer);
        col.totalSupply += 1;

        // push event
        emit BuyNFT(
            _collectionAddress,
            _buyer,
            _collectionIndex,
            col.localId,
            tokenId
        );
    }
}
