//Global variables
var timeLeft = 5;
var intervalId;
var currentBet = 0;
var payout = 1;
var multiplier = 3;

var twenties = 0;
var fifties = 0;
var hundreds = 0;

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
    chipHide();
    $('#nameModal').modal('toggle');
}
//End timer functions

//Payout mechanics
function payoutMath() {
    payout = currentBet * multiplier;
    $('#payout').text(payout);
}

function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

  function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
  }

function chipHide() {
    $('#singletwenty').hide();
    $('#singlefifty').hide();
    $('#singlehundred').hide();

    $('#twentystack').hide();
    $('#fiftystack').hide();
    $('#hundredstack').hide();
}

$(document).ready(function(){

    chipHide();
    
    $('.form1').on('click', function() {
        $('#leaderModal').modal('toggle');
    })
    
//Begin betting mechanics
$('#twentychipbtn').on('click', function() {
    currentBet = currentBet + 20;
    twenties = twenties + 1;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();

    //Animation
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      twentychipbtn.style.left = timePassed / 5 + 'px';

      if (timePassed > 1000) {
        twentychipbtn.style.left = 0;
        if (twenties < 2) {
            $('#singletwenty').show();
        }
        else if (twenties >= 2){
            $('#singletwenty').hide();
            $('#twentystack').show();
        }
        clearInterval(timer);
      }
    }, 20);

})
$('#fiftychipbtn').on('click', function() {
    currentBet = currentBet + 50;
    fifties = fifties + 1;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();

    //Animation
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      fiftychipbtn.style.left = timePassed / 5 + 'px';

      if (timePassed > 1000) {
          clearInterval(timer);
          fiftychipbtn.style.left = 0;
          if (fifties < 2) {
            $('#singlefifty').show();
        }
        else if (fifties >= 2){
            $('#singlefifty').hide();
            $('#fiftystack').show();
        }
      }
    }, 20);
})
$('#hundredchipbtn').on('click', function() {
    currentBet = currentBet + 100;
    hundreds = hundreds + 1;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();

    //Animation
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      hundredchipbtn.style.left = timePassed / 5 + 'px';

      if (timePassed > 1000) {
          clearInterval(timer);
          hundredchipbtn.style.left = 0;
          if (hundreds < 2) {
            $('#singlehundred').show();
        }
        else if (hundreds >= 2){
            $('#singlehundred').hide();
            $('#hundredstack').show();
        }
      }
      
    }, 20);

})

$('#footballtracker').on('click', function() {
    startGame();
    //Animation
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      footballtracker.style.left = timePassed / 5 + 'px';

      if (timePassed > 3250) clearInterval(timer);

    }, 20);
  })
  });


