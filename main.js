$(function() {
var $art = $('.art'),
	$simon = $('.simon'),
	$reset = $('#reset'),
	$board = $('#board');

var player = {
    'Simon': {
        count: []
    },
    'Art': {
        count: []
    }
};

//The function that will be activated for player Simon on the keypress
var handleSimon = function() {
    player.Simon.count.push(1);
    if(player.Simon.count.length <= 11) {
        console.log('simon');
        $simon.toggle();
    }  else {
    	alert('Simon wins!');
    }
     //Put action to be done here
        //$( "#track1:nth-child(4)").text("X");
};

//The function that will be activated for player Art on the keypress
var handleArt = function() {
	player.Art.count.push(1);
    if(player.Art.count.length <= 11) {
    	console.log('this worked');
    	if($art.hasClass('artIcon') !== true){
    		$art.addClass('artIcon');
    		//Put action to be done here
    		//$('#track2:first-child').toggle();
    	}			
    } else {
    	alert('Art wins!');
    }
};

//Function that listens to the keypress. Moves for simon if the quote, '' , button is pressed.
$(document).on('keypress', function(e){	
    	e.preventDefault();
    	if(e.which === 39){
    		console.log('simon');
        	handleSimon();    
    	}
    	if(e.which === 97){
    		console.log('art');
        	handleArt();
    	}	
});

//function to reset the game
function resetGame() {
	player.Simon.count = [];
	$art.removeClass('artIcon');
	player.Art.count = [];
} 

//jQuery to make the reset button functional
$reset.on('click', function(){
	resetGame();
	console.log('Button is clicked');
});


});//Closing DocReady brace