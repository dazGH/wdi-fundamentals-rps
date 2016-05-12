////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function validateInput(move) {
	//Function to validate that the move entered by player is valid
	if(move==='' || move ===null || move ===undefined){
		
		return false;	
	}
	else{
		if(move != 'rock' && move != 'scissors' && move != 'paper'){
		
			return false;
		}
	}
	return true;
}


function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
	while (!validateInput(move)){
	
		move=getInput();
	}
	return move;
}
 
 

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   	
	while(move ===''  || move ===null || move ===undefined){
	
		move =randomPlay();
	}

    return move/* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
	
    // if moves are different, list the conditions to follow to determine the winner
	if (playerMove != computerMove){
		if (playerMove=='rock'){
		
				(computerMove=='scissors') ? winner ='player': winner ='computer';
		}
		else if (playerMove=='scissors'){
		
			(computerMove=='rock') ? winner ='computer': winner ='player';
		}
		else{
			(computerMove=='rock') ? winner ='player': winner ='computer';
		}
		
	}
	else{  // its a tie if moves are the same
			winner='tie';
	}
   
	 return winner;
}


function playRPS() {
    console.log("Let's play Rock, Paper, Scissors");
    
    //Get no. of rounds to play with default value of 5 rounds
    var reqWins = prompt("Please enter required wins", 5);
    var counter =0;
    
    /*Not using playerWins & computerWins variables as using playResults array to keep track of game data instead
      var playerWins=0;
      var computerWins = 0;
    */
    
    //Declared playResults to record overall stats of the game including losses, ties and moves. Not required according specs of this function, just for my learning purposes and to make it easier for me to test that the game actually works.
    var playResults={
		
		'player':{
				'moves': [],
				'wins':0,
				'losses': 0,
				'tie': 0
			
		},
			'computer':{
				'moves': [],
				'wins':0,
				'losses': 0,
				'tie': 0
							
		}
		
	};
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won nth times.
	/* YOUR CODE HERE */
    
    
	 if (reqWins !== ''  && reqWins !==null && reqWins !==undefined){ //if player has entered how many wins required, initiate game
			console.log("reqWins is: " +reqWins);
		
	
        //while((computerWins < reqWins) && (playerWins < reqWins)){
        while((playResults.player.wins < reqWins) && (playResults.computer.wins<reqWins)){
			alert("starting game round: " + (counter+1));
			
            //Get both player and computer moves
			playResults.player.moves[counter] =	getPlayerMove(getInput());
			playResults.computer.moves[counter] =	getComputerMove(randomPlay());
			
			alert("Player move is: " +playResults.player.moves[counter] + " & Computer move is: " +playResults.computer.moves[counter] );
			
            
            //update wins, losses, ties scores based on moves played by computer and player
			if(getWinner(playResults.player.moves[counter], playResults.computer.moves[counter] ) == 'player'){
				
				playResults.player.wins += 1;
				playResults.computer.losses += 1;
				
				//playerWins = playResults.player.wins;
				alert("Round " + (counter+1) + " Winner is: player");
			}
			else if (getWinner(playResults.player.moves[counter], playResults.computer.moves[counter] )  == 'computer'){
				
				playResults.player.losses += 1;
				playResults.computer.wins += 1;
				
				//computerWins = playResults.computer.wins;
				alert("Round " + (counter+1)  + " Winner is: computer");
			}
			else{
				playResults.player.tie += 1;
				playResults.computer.tie += 1;
				alert("Round " + (counter+1)  +" TIE!");
			}
		
			counter++;
		}
	   
		console.log(playResults) ;
		return ["Player no. of Wins: " + playResults.player.wins, "Computer no. of Wins: " + playResults.computer.wins];
	}
    
	else{ //do not initialize game if player did not enter no. of req wins
        console.log("Thank you. Please start the game again when you are ready to play!");
		
	}
	
}


