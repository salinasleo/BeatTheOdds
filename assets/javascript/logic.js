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

var playerChips = 2500;

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

var betSelection;

var rightScore = 0;
var leftScore = 0;
//var leaderBoard= database.ref().leaders

var database= firebase.database()

var twenties = 0;
var fifties = 0;
var hundreds = 0;

function rightHundred() {
  $('#footballtracker').animate({
    left: '+=100%'
  }, 2400, function() {
    console.log('hundred yards right')
  });
  }

function leftHundred() {
  $('#footballtracker').animate({
    left: '-=100%'
  }, 2400, function() {
    console.log('hundred yards left')
  });
  }

function rightSixty() {
  $('#footballtracker').animate({
    left: '+=60%'
  }, 1800, function() {
    console.log('sixty yards right')
  });
  }

function leftSixty() {
  $('#footballtracker').animate({
    left: '-=60%'
  }, 1800, function() {
    console.log('sixty yards left')
  });
  }

function rightFifty() {
  $('#footballtracker').animate({
    left: '+=50%'
  }, 1500, function() {
    console.log('fifty yards left')
  });
  }

function leftFifty() {
  $('#footballtracker').animate({
    left: '-=50%'
  }, 1500, function() {
    console.log('fourty yards left')
  });
  }

function rightFourty() {
  $('#footballtracker').animate({
    left: '+=40%'
  }, 1500, function() {
    console.log('fourty yards left')
  });
  }

function leftFourty() {
  $('#footballtracker').animate({
    left: '-=40%'
  }, 1500, function() {
    console.log('fourty yards left')
  });
  }

function rightTwentyFive() {
  $('#footballtracker').animate({
    left: '+=25%'
  }, 1100, function() {
    console.log('Twenty five yards right')
  });
  }

function leftTwentyFive() {
  $('#footballtracker').animate({
    left: '-=25%'
  }, 1100, function() {
    console.log('twenty five yards left')
  });
  }

  var directionLeft = false;
  var driveLength = 40;
  var yardage = driveLength * 7;
  var movementSpeed = 1500;
  
  console.log(yardage);
  
  function animateBallMovement() {
    if (directionLeft === true){
    $('#footballtracker').animate({ left: '-=' + yardage}, movementSpeed);
  }
  else if (directionLeft === false){
    $('#footballtracker').animate({ left: '+=' + yardage}, movementSpeed);
  }
  }

$(document).ready(function(){

  $('.teamleft').hide();
  $('.teamright').hide();
 
  chipHide();
  chipUpdate();
  $('#footballtracker').hide();

$('.banner').on('click', function() {
  $('#backgroundgroove').trigger('play');
})

function chipUpdate(){
  $('#chips').text(playerChips);
}

function win(){
  $('#nameModal').modal('toggle');
  playerChips = playerChips + payout;
    chipUpdate();
}

function lose(){
  console.log('You lose!')
}

function delay(ms) {
  var cur_d = new Date();
  var cur_ticks = cur_d.getTime();
  var ms_passed = 0;
  while(ms_passed < ms) {
      var d = new Date();  // Possible memory leak?
      var ticks = d.getTime();
      ms_passed = ticks - cur_ticks;
      // d = null;  // Prevent memory leak?
  }
}
//Initialize function
function startGame() {
    var timeLeft = 120;
    timer();
    run();
    $('#dall').show();
    $('#wasr').show();

rightSixty();

setTimeout(
      function() 
      {
        leftSixty();
        rightScore = rightScore + 7;
        $('#scoreright').text(rightScore);
        console.log(rightScore);
      }, 4000);
setTimeout(
      function() 
      {
        rightFifty();
      }, 10000);
setTimeout(
      function() 
      {
        leftFourty();
      }, 15000);
setTimeout(
      function() 
      {
        rightFifty();
      }, 22000);
setTimeout(
      function() 
      {
        leftFourty();
      }, 28000);
setTimeout(
      function() 
      {
        rightFifty();
      }, 32000);
setTimeout(
      function() 
      {
        rightTwentyFive();
        leftScore = leftScore = 7;
        $('#scoreleft').text(leftScore);
        console.log(leftScore);
      }, 40000);
setTimeout(
      function() 
      {
        leftHundred();
        rightScore = rightScore + 7;
        $('#scoreright').text(rightScore);
        console.log(rightScore);
      }, 47000);
setTimeout(
      function() 
      {
        rightSixty();
        leftScore = leftScore + 7;
        $('#scoreleft').text(leftScore);
        console.log(leftScore);
      }, 51000);
setTimeout(
      function() 
      {
        rightTwentyFive();
      }, 55000);
setTimeout(
      function() 
      {
        leftFourty();
      }, 60000);  
setTimeout(
      function() 
      {
        rightFourty();
      }, 65000); 
setTimeout(
      function() 
      {
        leftTwentyFive();
      }, 68000);
setTimeout(
      function() 
      {
        leftFourty();
      }, 72000);    
setTimeout(
      function() 
      {
        leftTwentyFive();
        rightScore = rightScore + 3;
        $('#scoreright').text(rightScore);
      }, 76000);  
setTimeout(
      function() 
      {
        rightSixty();
      }, 79000);
setTimeout(
      function() 
      {
        leftFourty();
      }, 82000);
setTimeout(
      function() 
      {
        rightTwentyFive();
      }, 85000);
setTimeout(
      function() 
      {
        leftFourty();
      }, 88000);
setTimeout(
      function() 
      {
        rightFourty();
      }, 92000);
setTimeout(
      function() 
      {
        rightFourty();
      }, 97000);
setTimeout(
      function() 
      {
        rightTwentyFive();
        leftScore = leftScore + 7;
        $('#scoreleft').text(leftScore);
      }, 100000);
setTimeout(
      function() 
      {
        leftFifty();
      }, 104000);
setTimeout(
      function() 
      {
        rightFourty();
      }, 107000);
setTimeout(
      function() 
      {
        leftFourty();
      }, 110000);
setTimeout(
      function() 
      {
        leftTwentyFive();
      }, 115000);
setTimeout(
      function() 
      {
        stop();
      }, 120000);
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
    $('#payout').text('0');
    if (betSelection === 'leftteam'){
      win();
    }
    else if (betSelection === 'rightteam'){
      lose();
    }
    else if (betSelection = 0){
      console.log('no bet made');
    }
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

    $('#betsubmit').hide();
}


function rightHundred() {
  $('#footballtracker').animate({
    left: '+=100%'
  }, 2400, function() {
    console.log('hundred yards right')
  });
  }

function leftHundred() {
  $('#footballtracker').animate({
    left: '-=100%'
  }, 2400, function() {
    console.log('hundred yards left')
  });
  }

function rightSixty() {
  $('#footballtracker').animate({
    left: '+=60%'
  }, 1800, function() {
    console.log('sixty yards right')
  });
  }

function leftSixty() {
  $('#footballtracker').animate({
    left: '-=60%'
  }, 1800, function() {
    console.log('sixty yards left')
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

function rightFourty() {
  $('#footballtracker').animate({
    left: '+=40%'
  }, 1500, function() {
    console.log('fourty yards left')
  });
  }

function leftFourty() {
  $('#footballtracker').animate({
    left: '-=40%'
  }, 1500, function() {
    console.log('fourty yards left')
  });
  }

function rightTwentyFive() {
  $('#footballtracker').animate({
    left: '+=25%'
  }, 1100, function() {
    console.log('Twenty five yards right')
  });
  }

function leftTwentyFive() {
  $('#footballtracker').animate({
    left: '-=25%'
  }, 1100, function() {
    console.log('twenty five yards left')
  });
  }


// Setting the leader board

//based()
  $('#kickoff').on('click', function(){
  $('#kickoff').hide();
  $('#footballtracker').show();
  //startGame();

})

  $('.teamleft').hide();
  $('.teamright').hide();

    chipHide();
    
$('.form1').on('click', function() {
    betSelection = 'leftteam';
    $('.form1').css('background-image', 'url("' + 'assets/images/nflchosen.png' + '")');
    $('.form3').css('background-image', 'url("' + 'assets/images/nfl2.jpg' + '")');

  })

$('.form3').on('click', function() {
    betSelection = 'rightteam';
    $('.form3').css('background-image', 'url("' + 'assets/images/nfl2chosen.png' + '")');
    $('.form1').css('background-image', 'url("' + 'assets/images/nfl.jpg' + '")');

  })

$('.form2').on('click', function(){
  $('#leaderModal').modal('toggle');
})

//Begin betting mechanics
$('#twentychipbtn').on('click', function() {
    currentBet = currentBet + 20;
    twenties = twenties + 1;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    playerChips = playerChips - 20;
    chipUpdate();
    payoutMath();

    $('#twentychipbtn').animate({
      left: 200
    }, 'slow', function() {twentychipbtn.style.left = 0;
      if (twenties < 2) {
                  $('#singletwenty').show();
                  $('#betsubmit').show();
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
    playerChips = playerChips - 50;
    chipUpdate();
    payoutMath();

    $('#fiftychipbtn').animate({
      left: 200
    }, 'slow', function() {fiftychipbtn.style.left = 0;
      if (fifties < 2) {
                  $('#singlefifty').show();
                  $('#betsubmit').show();
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
    playerChips = playerChips - 100;
    chipUpdate();
    payoutMath();

    //Animation
    $('#hundredchipbtn').animate({
      left: 200
    }, 'slow', function() {hundredchipbtn.style.left = 0;
      if (hundreds < 2) {
                  $('#singlehundred').show();
                  $('#betsubmit').show();
              }
              else if (hundreds >= 2){
                  $('#singlehundred').hide();
                  $('#hundredstack').show();
             }
        });
})

$('#betsubmit').on('click', function(){
  stop();
 })
 


function based(){
    database.ref().set({
        leaders: leadersDefault
      });
      database.ref().on("value", function(snapshot) {  console.log(snapshot)})
      
}
});
