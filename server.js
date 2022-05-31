const express = require('express');
const app = express();
const port = 3000;

const Web3 = require('web3');
const web3 = new Web3('http://localhost:9545');
const contractAddress = '0xa934dF4D1A5D00Ac4b7449C2c75b5AD83F4E2659';
const contractABI = [
	{
		"inputs": [],
		"name": "contractOwner",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	},
	{
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "input",
				"type": "string"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
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
		"type": "function",
		"constant": true
	}
];

const NotesContract = new web3.eth.Contract(contractABI, contractAddress);

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'))
app.use(express.json());

app.get('/', async (req,res) => {
  console.log('Loading from the blockchain');
  const accounts = await web3.eth.getAccounts();
  const presetMessage = await NotesContract.methods.readFromContract().call();
  res.render('index', {accounts: accounts, contract: NotesContract, presetMessage: presetMessage});
});

app.get('/owner', async (req, res) => {
	const owner = await NotesContract.methods.getOwner().call();
	res.json({name: owner});
});

app.post('/setOwner', async (req, res) => {
	await NotesContract.methods.setOwner(req.body.name).send({from: '0x90adb54c32eb3ed3752ef5827b38d3581fa71b3b'});
	res.redirect('/');
})

app.listen(port, () => {
  console.log('App listening at ', port);
});




