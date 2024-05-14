// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./ERC20/ERC20.sol";
import "./ERC20/access/Ownable.sol";

contract ExmentToken is ERC20, Ownable {

    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
    }

    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }
}