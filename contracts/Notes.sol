// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Notes {
  string public contractOwner = 'Unknown User';
  string[] public notes;

  function getNotes() view public returns(string[] memory) {
    return notes;
  }

  function getOwner() view public returns (string memory) {
    return contractOwner;
  }

  function setOwner(string memory input) public {
    contractOwner = input;
  }

  function readFromContract() pure public returns(string memory) {
    return 'Preset note';
  }
}
