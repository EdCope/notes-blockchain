const express = require('express');
const app = express();
const port = 3000;

const Web3 = require('web3');
const web3 = new Web3('http://localhost:9545');

const NotesContract = require('./build/contracts/Notes.json');
const contractAddress = NotesContract.networks['5777'].address;
const contract = new web3.eth.Contract(NotesContract.abi, contractAddress);

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'))
app.use(express.json());

app.get('/', async (req,res) => {
  console.log('Loading from the blockchain');
  const accounts = await web3.eth.getAccounts();
  const presetMessage = await contract.methods.readFromContract().call();
  res.render('index', {accounts: accounts, contract: contract, presetMessage: presetMessage});
});

app.post('/setOwner', async (req, res) => {
	await contract.methods.setOwner(req.body.name).send({from: '0x90adb54c32eb3ed3752ef5827b38d3581fa71b3b'});
	res.json({succ: 'yes'});
})

app.listen(port, () => {
  console.log('App listening at ', port);
});




