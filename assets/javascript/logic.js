//Global variables
var timeLeft = 60;
var intervalId;
var currentBet = 0;
var payout = 1;
var multiplier = 3;

//Initialize function
function startGame() {
    var timeLeft = 60;
    timer();
    run();
}

//Timer functions
function timer() {
    timeLeft--;
    $("#timeleft").html("Time Left: "+ timeLeft + " seconds");   

    if (timeLeft === 0) {
      stop();
    }
  }

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(timer, 1000);
}

function stop() {
    clearInterval(intervalId);
}
//End timer functions

//Payout mechanics
function payoutMath() {
    payout = currentBet * multiplier;
    $('#payout').text(payout);
}

$(document).ready(function(){

//Begin betting mechanics
$('#20chipbtn').on('click', function() {
    currentBet = currentBet + 20;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();
})
$('#50chipbtn').on('click', function() {
    currentBet = currentBet + 50;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();
})
$('#100chipbtn').on('click', function() {
    currentBet = currentBet + 100;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();
})

$('#footballtracker').on('click', function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      footballtracker.style.left = timePassed / 5 + 'px';

      if (timePassed > 3250) clearInterval(timer);

    }, 20);
  })

});