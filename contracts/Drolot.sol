pragma solidity ^0.4.4;

contract Drolot {
	address[] players;
	address public owner;

	function Drolot() {
		owner = msg.sender;
	}

	function () payable {
		players.push(msg.sender);
		if (players.length == 10){
			uint random = uint(sha3(block.timestamp))%10 +1;
			winner = address[random];
			send();
		}
	}
}
