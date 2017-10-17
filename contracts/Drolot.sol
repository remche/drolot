pragma solidity ^0.4.4;

contract Drolot {
	address[] players;
	address public owner;
	uint amount = 1;

	function Drolot() {
		owner = msg.sender;
	}

	function dro() internal returns (address winner){
			uint random = uint(sha3(block.timestamp))%10 +1;
			winner = players[random];
	}	

	function () payable{
		players.push(msg.sender);
		if (players.length == 10){
			address winner = dro();
			winner.transfer(amount);
		}
	}
}
