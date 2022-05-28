const express = require('express');
const app = express();
const port = 3000;

const Web3 = require('web3');
const web3 = new Web3('http://localhost:9545');
const contractAddress = '0xa934dF4D1A5D00Ac4b7449C2c75b5AD83F4E2659';
const contractABI = [
	{
		"inputs": [],
		"name": "readFromContract",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
];

const NotesContract = new web3.eth.Contract(contractABI, contractAddress);

app.set('view engine', 'hbs');

app.get('/', async (req,res) => {
  console.log('Loading from the blockchain');
  const accounts = await web3.eth.getAccounts();
  console.log(NotesContract.methods);
  const presetMessage = await NotesContract.methods.readFromContract().call();
  res.render('index', {accounts: accounts, contract: NotesContract, presetMessage: presetMessage});
})

app.listen(port, () => {
  console.log('App listening at ', port);
})




