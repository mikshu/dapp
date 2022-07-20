// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "hardhat/console.sol";

//ERC Token Standard #20 Interface
interface ERC20Interface {
    function totalSupply() external view returns (uint);

    function balanceOf(address tokenOwner) external view returns (uint balance);
}

contract ERC20 is ERC20Interface {
    string public symbol;
    string public name;
    uint8 public decimals;
    uint public _totalSupply;

    mapping(address => uint) balances;

    constructor() {
        symbol = "QKC";
        name = "QuikNode Coin";
        decimals = 2;
        _totalSupply = 100000;
        balances[0x28e5a38979c012bE135b7c227D6aEbC6e6d56F96] = _totalSupply;
    }

    function totalSupply() public view returns (uint) {
        return _totalSupply - balances[address(0)];
    }

    function balanceOf(address tokenOwner) public view returns (uint balance) {
        return balances[tokenOwner];
    }
}
