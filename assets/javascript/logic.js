  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAlhmUCxCSXYXAmhCS4egyw3k7GNm89Hew",
    authDomain: "beattheodds-b1afe.firebaseapp.com",
    databaseURL: "https://beattheodds-b1afe.firebaseio.com",
    projectId: "beattheodds-b1afe",
    storageBucket: "beattheodds-b1afe.appspot.com",
    messagingSenderId: "160454565604"
  };
  firebase.initializeApp(config);

//Global variables
var timeLeft = 120;
var intervalId;
var currentBet = 0;
var payout = 1;
var multiplier = 3;
var dataRef = firebase.database();
var leadersDefault= [
      { user: 'BJackson',
        score: 501,
    },
      { user: 'SYoung',
      score: 502,
    },
      { user: 'JMontana',
      score: 503,
  }
  ]
var leftTeam;
var rightTeam;

//var leaderBoard= database.ref().leaders

var database= firebase.database()

var twenties = 0;
var fifties = 0;
var hundreds = 0;

//Initialize function
function startGame() {
    var timeLeft = 120;
    timer();
    run();
    $('#dall').show();
    $('#wasr').show();
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

function rightHundred() {
  $('#footballtracker').animate({
    left: '+=100%'
  }, 3000, function() {
    console.log('hundred yards right')
  });
  }

function leftHundred() {
  $('#footballtracker').animate({
    left: '-=100%'
  }, 3000, function() {
    console.log('hundred yards left')
  });
  }

function rightFifty() {
  $('#footballtracker').animate({
    left: '+=50%'
  }, 1500, function() {
    console.log('hundred yards left')
  });
  }

function leftFifty() {
  $('#footballtracker').animate({
    left: '-=50%'
  }, 1500, function() {
    console.log('hundred yards left')
  });
  }

$(document).ready(function(){

// Setting the leader board

//based()
$('#footballtracker').on('click', function(){
  startGame();
})

  $('.teamleft').hide();
  $('.teamright').hide();

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

    $('#twentychipbtn').animate({
      left: 200
    }, 'slow', function() {twentychipbtn.style.left = 0;
      if (twenties < 2) {
                  $('#singletwenty').show();
              }
              else if (twenties >= 2){
                  $('#singletwenty').hide();
                  $('#twentystack').show();
             }
        });
})
$('#fiftychipbtn').on('click', function() {
    currentBet = currentBet + 50;
    fifties = fifties + 1;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();

    $('#fiftychipbtn').animate({
      left: 200
    }, 'slow', function() {fiftychipbtn.style.left = 0;
      if (fifties < 2) {
                  $('#singlefifty').show();
              }
              else if (fifties >= 2){
                  $('#singlefifty').hide();
                  $('#fiftystack').show();
             }
        });
})
$('#hundredchipbtn').on('click', function() {
    currentBet = currentBet + 100;
    hundreds = hundreds + 1;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();

    //Animation
    $('#hundredchipbtn').animate({
      left: 200
    }, 'slow', function() {hundredchipbtn.style.left = 0;
      if (hundreds < 2) {
                  $('#singlehundred').show();
              }
              else if (hundreds >= 2){
                  $('#singlehundred').hide();
                  $('#hundredstack').show();
             }
        });
})

function based(){
    database.ref().set({
        leaders: leadersDefault
      });
      database.ref().on("value", function(snapshot) {  console.log(snapshot)})
      
}
});
