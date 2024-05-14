// SPDX-License-Identifier: MIT
// Creator: Victor Luu

pragma solidity ^0.8.13;

/**
 * @dev Interface of ExmentMarketPlace.
 */
interface IExmentMarketPlace {
    // =============================================================
    //                            EVENTS
    // =============================================================

    event CollectionCreated(
        address indexed collection,
        address indexed seller,
        uint256 collectionId,
        uint256 localId
    );

    event BuyNFT(
        address indexed collection,
        address indexed buyer,
        uint256 collectionId,
        uint256 localId,
        uint256 tokenId
    );

    // =============================================================
    //                            STRUCTS
    // =============================================================

    struct Collection {
        // The address of the collection.
        address collection;
        // The address of the owner.
        address owner;
        // name collection
        string name;
        // symbol collection
        string symbol;
        // price sell NFT
        uint256 price;
        // CollectionIndex on local Exment DB
        uint256 localId;
        // Whether the token has been deactived.
        bool deactived;
        // total NFT sell
        uint256 totalSupply;
    }

    // =============================================================
    //                         COLLECTION COUNTERS
    // =============================================================

    /**
     * @dev Returns the total number of collection in existence.
     * Burned collections will not reduce the count.
     * To get the total number of collection created
     */
    function allCollectionsLength() external view returns (uint256);

    /**
     * Invalid query range (`start` >= `stop`).
     */
    error InvalidQueryRange();

    /**
     * @dev Returns an array of colection Addresses owned by `owner`,
     * in the range [`start`, `stop`)
     * (i.e. `start <= collectionIds < stop`).
     *
     * This function allows for collectionIds to be queried if the collection
     * grows too big for a single call.
     *
     * Requirements:
     *
     * - `start < stop`
     */
    function collectionsOfOwnerIn(
        address owner,
        uint256 start,
        uint256 stop
    ) external view returns (address[] memory);

    /**
     * @dev Returns an array of colection Addresses owned by `owner`.
     *
     * This function scans the ownership mapping and is O(`totalSupply`) in complexity.
     * It is meant to be called off-chain.
     *
     * See {ExmentMarketPlace-collectionsOfOwnerIn} for splitting the scan into
     * multiple smaller scans if the collection is large enough to cause
     * an out-of-gas error (1k collections should be fine).
     */
    function collectionsOfOwner(
        address owner
    ) external view returns (address[] memory);

    // =============================================================
    //                         COLLECTION DATA
    // =============================================================

    /**
     * @dev Returns the addess admin
     */
    function admin() external view returns (address);

    /**
     * @dev Returns the number of collections in `owner`'s account.
     */
    function balanceOf(address owner) external view returns (uint256);

    /**
     * @dev Returns the owner of the `collectionIndex` collection.
     *
     * Requirements:
     *
     * - `collectionIndex` must exist.
     */
    function ownerOf(uint256 collectionIndex) external view returns (address);

    /**
     * @dev Returns the collectionInfo's collection of the `collectionIndex` collection.
     *
     * Requirements:
     *
     * - `collectionIndex` must exist.
     */
    function collectionInfo(
        uint256 collectionIndex
    ) external view returns (Collection memory);

    /**
     * @dev Returns the address's collection of the `collectionIndex` collection.
     *
     * Requirements:
     *
     * - `collectionIndex` must exist.
     */
    function collections(
        uint256 collectionIndex
    ) external view returns (address);

    // =============================================================
    //                         WRITE FUNCTION
    // =============================================================

    /**
     * @dev Call this function to deploy a new SC Collection
     * @param _name Name of ERC721
     * @param _symbol Symbol of ERC721
     * @param _seller Owner of colletion
     * @param _price Price sale for Buyer
     * @param _localId collectionId in DB Exment
     * @notice Each parameters should be set carefully since it's not modifiable
     */
    function createCollection(
        string memory _name,
        string memory _symbol,
        address _seller,
        uint256 _price,
        uint256 _localId
    ) external;

    /**
     * @dev Call this function to deploy a new SC Collection
     * @param _collectionIndex Indexing collection in Market
     * @param _collectionAddress Address of collection
     * @param _price Price of NFT
     * @param _seller Address owner of Collectionn
     * @param _buyer Address buyer
     * @notice Each parameters should be set carefully since it's not modifiable
     */
    function buyNFT(
        uint256 _collectionIndex,
        address _collectionAddress,
        uint256 _price,
        address _seller,
        address _buyer
    ) external;
}
