import Contract from '../build/contracts/Notes.json';

let web3, contract;

document.addEventListener('DOMContentLoaded', async () => {
  web3 = await initWeb3();
  contract = await notesContract(web3);
  const setOwner = document.getElementById('setOwner');
  setOwner.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formName = e.target.elements[0].value;
    await setName(formName);
  })
  loadName();
});

const initWeb3 = () => {
  return new Promise(async (res, rej) => {
    //is metamask available?
    if(typeof window.ethereum !== 'undefined'){
      try{
        await window.ethereum.enable()
        return res(new Web3(window.ethereum));
      } catch (err) {
        rej(err);
      }
    }else {
      res(new Web3('http://localhost:9545'));
    }
  })
}

const notesContract = (web3) => {
  return new web3.eth.Contract(Contract.abi, Contract.networks['5777'].address)
}

const setName = async (formName) => {
  await contract.methods.setOwner(formName).send({from: '0x90adb54c32eb3ed3752ef5827b38d3581fa71b3b'});
  loadName();
}

const loadName = async () => {
  const name = document.getElementById('owner');
  const owner = await contract.methods.getOwner().call();
  name.innerHTML = owner;
}
