// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transactions {
    uint  transactionCount;

    event Transfer(address from, address to, uint amount, string message, uint timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address reciever;
        uint amount;
        string message;
        uint timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable reciever, 
        uint amount, 
        string memory 
        message, 
        string memory keyword
        ) public {
        transactionCount ++;
        transactions.push(TransferStruct(msg.sender, reciever, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, reciever, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns(uint) {
        return transactionCount;
    }


}