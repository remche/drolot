var abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "num_players",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "players",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    },
    {
      "payable": true,
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        }
      ],
      "name": "NewPlayer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_winner",
          "type": "address"
        }
      ],
      "name": "Winner",
      "type": "event"
    }
  ]

var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider());

var Drolot = web3.eth.contract(abi);
var drolot = Drolot.at("0x72553a5844ab8149ff3042ac25e423c73cd7ae80");

var new_player_event = drolot.NewPlayer();

new_player_event.watch(function(error, result){
	if (!error)
		console.log(result);
});

var winner_event = drolot.Winner();

winner_event.watch(function(error, result){
	if (!error)
		console.log(result);
});

