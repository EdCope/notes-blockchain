const Notes = artifacts.require('Notes');

module.exports = (deployContract) => {
  deployContract.deploy(Notes);
}
