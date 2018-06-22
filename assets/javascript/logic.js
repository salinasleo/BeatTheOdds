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
var timeLeft = 60;
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
var leaderBoard= database.ref().leaders

var database= firebase.database()

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
// Setting the leader board
based()
//Begin betting mechanics
$('#20chipbtn').on('click', function() {
    currentBet = currentBet + 20;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();
    console.log(leaderBoard)
    
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

function based(){
    database.ref().set({
        leaders: leadersDefault
      });
      database.ref().on("value", function(snapshot) {  console.log(snapshot)})
      
}

});





