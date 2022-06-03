import Contract from '../build/contracts/Notes.json';

export class Notes {
  constructor(){
    this.contract = null;
  }

  async init(web3){
    this.contract = new web3.eth.Contract(Contract.abi, Contract.networks['5777'].address)
  }

  async loadName() {
    const name = document.getElementById('owner');
    const owner = await this.contract.methods.getOwner().call();
    name.innerHTML = owner;
  }

  async setName(formName) {
    await this.contract.methods.setOwner(formName).send({from: '0x90adb54c32eb3ed3752ef5827b38d3581fa71b3b'});
    this.loadName(this.contract);
  }
}
