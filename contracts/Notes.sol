pragma solidity ^0.8.7;

contract Notes {
  string public contractOwner = 'Unknown User';

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
