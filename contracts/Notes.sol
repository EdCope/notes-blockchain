pragma solidity ^0.8.7;

contract Notes {
  function readFromContract() pure public returns(string memory) {
    return 'Preset note';
  }
}
