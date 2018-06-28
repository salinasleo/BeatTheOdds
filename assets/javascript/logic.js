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
var leadersDefault = [
    {
        user: 'BJackson',
        score: 501,
    },
    {
        user: 'SYoung',
        score: 502,
    },
    {
        user: 'JMontana',
        score: 503,
    }
]
var leftTeam;
var rightTeam;

var betSelection;

var rightScore = 0;
var leftScore = 0;
//var leaderBoard= database.ref().leaders

var database = firebase.database()

var twenties = 0;
var fifties = 0;
var hundreds = 0;


//variable based movement
var directionLeft = false;
var driveLength = 40;
var yardage = driveLength * 7;
var movementSpeed = 1500;

console.log(yardage);

function animateBallMovement(directionLeft, driveLength, movementSpeed) {
    var yardage = driveLength * 7;
    console.log("Testing");
    if (directionLeft === true) {
        $('#footballtracker').animate({ left: '-=' + yardage }, movementSpeed, function () {
            console.log("going left");
        });
    }
    else if (directionLeft === false) {
        $('#footballtracker').animate({ left: '+=' + yardage }, movementSpeed, function () {
            console.log("going right");
        });
    }
    else { console.log("other"); }
}

setTimeout(
    function () {
        $('#scoreright').text(rightScore);
        console.log(rightScore);
        $('#scoreright').text(leftScore);
        console.log(leftScore);
    }, 10);



function startGame() {
    timer2();
    run();
    $('#atll').show();
    $('#oakr').show();
    // $('#'+ homeTeamAlias + 'l').show();
    // $('#'+ awayTeamAlias + 'l').show();
    animateWithData();
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

function startDemo() {
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
    $("#timeleft").html("Time Left: " + timeLeft + " seconds");

    if (timeLeft === 0) {
        stop();
    }
}

var numerator;
var denominator;
var multiplier;

function timer2() {
    timeLeft--;
    quarterDisplay = 4 - Math.floor(timeLeft / 30);
    console.log(quarterDisplay);
    leftThisQuarter = timeLeft - (4 - quarterDisplay) * 30;
    console.log(leftThisQuarter);
    minutesLeftDisplay = Math.ceil(leftThisQuarter / 2);
    if (timeLeft % 2 === 0) {
        secondsLeftDisplay = "30";
    }
    if (timeLeft % 2 !== 0) {
        secondsLeftDisplay = "00";
    }
    $("#timeleft").html("");
    $("#timeleft").html("Quarter " + quarterDisplay + "  Time Left: " + minutesLeftDisplay + ":" + secondsLeftDisplay);

    if (timeLeft === 0) {
        $("#timeleft").html("Quarter " + quarterDisplay + "  Time Left: 0:00");
        stop();
    }
    numerator = document.getElementById('scoreright');
    denominator = document.getElementById('scoreleft');
    adjustment = 3 * (120-timeLeft)/120;
    // this adjustment will increase multiplier as time elapses capped at 3x
    if (parseInt(denominator.innerHTML) === 0 || parseInt(numerator.innerHTML) === parseInt(denominator.innerHTML)) {
        if (stopMultiplier !== 1){
        multiplier = 1;
        }
    }
    else {
        if (stopMultiplier !== 1) {
        multiplier = parseInt(numerator.innerHTML) - parseInt(denominator.innerHTML);
        multiplier *= adjustment;
        if (multiplier < 0) {
            multiplier = -1/multiplier;
        } }
    }
    // multiplier update
    if (stopMultiplier !== 1) {
    $("#multiplier").html("");
    $("#multiplier").html("Multiplier: " + multiplier.toFixed(2));
    }
}

function chipUpdate() {
    $('#chips').text(playerChips);
}

function win() {
    $('#nameModal').modal('toggle');
    playerChips = playerChips + payout;
    chipUpdate();
}

function lose() {
    $('#nameModal2').modal('toggle');
    console.log('You lose!')
}

function delay(ms) {
    var cur_d = new Date();
    var cur_ticks = cur_d.getTime();
    var ms_passed = 0;
    while (ms_passed < ms) {
        var d = new Date();  // Possible memory leak?
        var ticks = d.getTime();
        ms_passed = ticks - cur_ticks;
        // d = null;  // Prevent memory leak?
    }
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(timer2, 1000);
}

function stop() {
    clearInterval(intervalId);
    chipHide();
    $('#payout').text('0');
    if (betSelection === 'leftteam') {
        win();
    }
    else if (betSelection === 'rightteam') {
        lose();
    }
    else if (betSelection = 0) {
        console.log('no bet made');
    }
}

function payoutMath() {
    payout = currentBet * multiplier;
    $('#payout').text(payout.toFixed(2));
}

function makeEaseOut(timing) {
    return function (timeFraction) {
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

function disableButtons() {
    console.log("disable button fuction");
    $("#singletwenty").css("pointer-events", "none");
    $("#singlefifty").css("pointer-events", "none");
    $("#singlehundred").css("pointer-events", "none");
    $("#twentystack").css("pointer-events", "none");
    $("#fiftystack").css("pointer-events", "none");
    $("#hundredstack").css("pointer-events", "none");
    $(".chipbtn").css("pointer-events", "none");

}



function based() {
    database.ref().set({
        leaders: leadersDefault
    });
    database.ref().on("value", function (snapshot) { console.log(snapshot) })
}

$(document).ready(function () {

    $('.teamleft').hide();
    $('.teamright').hide();

    chipHide();
    chipUpdate();
    $('#footballtracker').hide();

    $('.banner').on('click', function () {
        $('#backgroundgroove').trigger('play');
    })

    $('#kickoff').on('click', function () {
        $('#kickoff').hide();
        $('#footballtracker').show();
        startDemo();

    })

    $('.teamleft').hide();
    $('.teamright').hide();

    chipHide();

    $('.form1').on('click', function () {
        betSelection = 'leftteam';
        $('.form1').css('background-image', 'url("' + 'assets/images/nflchosen.png' + '")');
        $('.form3').css('background-image', 'url("' + 'assets/images/nfl2.jpg' + '")');

    })

    $('.form3').on('click', function () {
        betSelection = 'rightteam';
        $('.form3').css('background-image', 'url("' + 'assets/images/nfl2chosen.png' + '")');
        $('.form1').css('background-image', 'url("' + 'assets/images/nfl.jpg' + '")');

    })

    $('.form2').on('click', function () {
        $('#leaderModal').modal('toggle');
    })

    //Begin betting mechanics
    $('#twentychipbtn').on('click', function () {
        currentBet = currentBet + 20;
        twenties = twenties + 1;
        console.log(currentBet);
        $('#current-bet').text("Current Bet: " + currentBet);
        playerChips = playerChips - 20;
        chipUpdate();
        payoutMath();

        $('#twentychipbtn').animate({
            left: 200
        }, 'slow', function () {
            twentychipbtn.style.left = 0;
            if (twenties < 2) {
                $('#singletwenty').show();
                $('#betsubmit').show();
            }
            else if (twenties >= 2) {
                $('#singletwenty').hide();
                $('#twentystack').show();
            }
        });
    })
    $('#fiftychipbtn').on('click', function () {
        currentBet = currentBet + 50;
        fifties = fifties + 1;
        console.log(currentBet);
        $('#current-bet').text("Current Bet: " + currentBet);
        playerChips = playerChips - 50;
        chipUpdate();
        payoutMath();

        $('#fiftychipbtn').animate({
            left: 200
        }, 'slow', function () {
            fiftychipbtn.style.left = 0;
            if (fifties < 2) {
                $('#singlefifty').show();
                $('#betsubmit').show();
            }
            else if (fifties >= 2) {
                $('#singlefifty').hide();
                $('#fiftystack').show();
            }
        });
    })
    $('#hundredchipbtn').on('click', function () {
        currentBet = currentBet + 100;
        hundreds = hundreds + 1;
        console.log(currentBet);
        $('#current-bet').text("Current Bet: " + currentBet);
        playerChips = playerChips - 100;
        chipUpdate();
        payoutMath();

        //Animation
        $('#hundredchipbtn').animate({
            left: 200
        }, 'slow', function () {
            hundredchipbtn.style.left = 0;
            if (hundreds < 2) {
                $('#singlehundred').show();
                $('#betsubmit').show();
            }
            else if (hundreds >= 2) {
                $('#singlehundred').hide();
                $('#hundredstack').show();
            }
        });
    })

    $('#betsubmit').on('click', function () {
        stop();
        // add some functionality here other than stop
        // ******************************************
        $('#current-bet').text("");
        $('#current-bet').text("Your bet was " + currentBet);
        stopMultiplier=1;
        $('#multiplier').text("Your Multiplier was " + multiplier.toFixed(2));
        disableButtons();
    })

});

var stopMultiplier=0;

// API type functions 


var gamesTesting = ["35c8c305-f698-472a-809d-4b787497be93", "441885c0-9482-410e-8ac3-7473052f34bd",
    "0651e14f-55b0-403f-9ff0-d0f11261490d", "9a38d9e9-aa16-4865-bac8-68854f978513", "37796d82-3be5-4084-83c6-4cf4b2361191",
    "9e39ac0c-a4b6-4b7c-92eb-6c502842c49d", "f242f82a-0cc0-47e6-915f-fb2857072cea"];

playbyplay(gamesTesting[3]);


function getGameIds(year) {

    var gameIds;

    // this is the schedule api from sportradar
    console.log(Date.now())
    $.ajax({
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/' +
            'http://api.sportradar.us/nfl-ot2/games/' + year + '/REG/schedule.json?api_key=phdh8pn346nu68qee8pddn2f'
    }).then(function (data) {
        gameIds = data.weeks;
        console.log(gameIds);
        parseGames(gameIds);
    });
    //f
}




var gamesArray = [];

function parseGames(gameIds) {
    for (i = 0; i < gameIds.length; i++) {
        for (y = 0; y < gameIds[i].games.length; y++) {
            gamesArray.push(gameIds[i].games[y].id)
            // gameIds[1].games[5].id);

        }
    }
    console.log(gamesArray);
};



function getSeveralSeasons() {
    // the API has a max limit of calls per second so using a timer
    setTimeout(function () { getGameIds(2010) }, 0);
    setTimeout(() => getGameIds(2011), 800);
    setTimeout(() => getGameIds(2012), 1600);
    setTimeout(() => getGameIds(2013), 2400);
    setTimeout(() => shuffle(), 3600);
}

// getSeveralSeasons();
// turned off during testing

var gameNumber = 0;
var numberGames;

function shuffle() {
    gamesArray.sort();
    console.log(gamesArray);
    numberGames = gamesArray.length;
}


var gameDetails = [];

function playbyplay(gameForTesting) {


    // gamePlaying = gamesArray[gameNumber];
    // changed during testing
    gamePlaying = gameForTesting;
    gameNumber++;
    if (gameNumber > numberGames) {
        gameNumber = 0;
    }

    // this is the play by play api from sportradar
    $.ajax({
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/' +
            'http://api.sportradar.us/nfl-ot2/games/' + gamePlaying + '/pbp.json?api_key=phdh8pn346nu68qee8pddn2f'
    }).then(function (data) {
        gameDetails = data;
        console.log(gameDetails);
        finalScore(gameDetails);
        ballMovement(gameDetails);
        eventDetails(gameDetails);
        isOvertime(gameDetails);
        driveSummary(gameDetails);
        scoringPlays(gameDetails);
    });

}

pbpArray = [];
pbpScoringArray = [];
drivesArray = [];
pbpArray.length = 0;
pbpScoringArray.length = 0;
drivesArray.length = 0;

function ballMovement(gameDetails) {
    console.log("ball movement function");
    var cumulativeTime = 0;
    var totalSeconds = 0;
    for (i = 0; i < gameDetails.periods.length; i++) {
        for (y = 0; y < gameDetails.periods[i].pbp.length; y++)
            // if (gameDetails.periods[i].pbp[y].event_type !=="setup") {
            if (gameDetails.periods[i].pbp[y].type === "drive") {
                for (z = 0; z < gameDetails.periods[i].pbp[y].events.length; z++) {
                    // console.log("i=" + i + "y=" + y + "z=" + z);
                    var source = gameDetails.periods[i].pbp[y].events[z];
                    minutes = 60 * source.end_situation.clock.substring(0, source.end_situation.clock.indexOf(":"));
                    if (minutes === 60 * 15) { minutes = 0 };
                    minutes2 = 60 * source.clock.substring(0, source.clock.indexOf(":"));
                    seconds = parseInt(source.end_situation.clock.substring(source.end_situation.clock.indexOf(":") + 1, 3 + source.end_situation.clock.indexOf(":")));
                    seconds2 = parseInt(source.clock.substring(source.clock.indexOf(":") + 1, 3 + source.clock.indexOf(":")));
                    totalSeconds = (minutes2 + seconds2) - (minutes + seconds);
                    if (totalSeconds === 900) { totalSeconds = 0; }
                    cumulativeTime += totalSeconds;
                    var add50 = 0;
                    if (gameDetails.periods[i].pbp[y].events[z].end_situation.possession.alias ===
                        gameDetails.periods[i].pbp[y].events[z].end_situation.location.alias) {
                        add50 = 0;
                    }
                    else { add50 = 50; }
                    pbpArray.push({
                        driveNumber: (y + 1),
                        period: (i + 1),
                        periodType: gameDetails.periods[i].period_type,
                        playtype: gameDetails.periods[i].pbp[y].events[z].play_type,
                        description: gameDetails.periods[i].pbp[y].events[z].alt_description,
                        timeleft: gameDetails.periods[i].pbp[y].events[z].end_situation.clock,
                        duractionSecs: totalSeconds,
                        cumulativeTime: cumulativeTime,
                        timeleft2: 60 * source.end_situation.clock.substring(0, source.end_situation.clock.indexOf(":")) +
                            parseInt(source.end_situation.clock.substring(source.end_situation.clock.indexOf(":") + 1, 3 + source.end_situation.clock.indexOf(":")))
                            + (3 - i) * 60 * 15,
                        yardline: gameDetails.periods[i].pbp[y].events[z].end_situation.location.yardline,
                        yardlineLoc: gameDetails.periods[i].pbp[y].events[z].end_situation.location.alias,
                        yardline100: add50 + (50 - gameDetails.periods[i].pbp[y].events[z].end_situation.location.yardline),
                        possession: gameDetails.periods[i].pbp[y].events[z].end_situation.possession.alias,
                        down: gameDetails.periods[i].pbp[y].events[z].end_situation.down,
                        home_points: gameDetails.periods[i].pbp[y].events[z].home_points,
                        away_points: gameDetails.periods[i].pbp[y].events[z].away_points
                    });

                }
            }
    }
    console.log(pbpArray);
}


function finalScore(gameDetails) {

}


function scoringPlays(gameDetails) {

    console.log("scoring plays");
    for (i = 0; i < pbpArray.length; i++) {
        if (i === 0) {
            if (pbpArray[i].home_points > 0 || pbpArray[i].away_points) {
                pbpScoringArray.push(pbpArray[i]);
            }
        }
        else {
            if (pbpArray[i].home_points > pbpArray[i - 1].home_points || pbpArray[i].away_points > pbpArray[i - 1].away_points) {
                pbpScoringArray.push(pbpArray[i]);
            }

        }

    }
    console.log(pbpScoringArray);
    // consoleScore(pbpScoringArray);
}


function animateWithData() {
    consoleScore(pbpScoringArray);
    consoleDrive(drivesArray);
}

var currentHomeScore = 0;
var currentAwayScore = 0;
// waitThis = 0;

function consoleScore(pbpScoringArray) {
    for (i = 0; i < pbpScoringArray.length; i++) {

        currentHomeScore = pbpScoringArray[i].home_points;
        currentAwayScore = pbpScoringArray[i].away_points;
        waitThis = pbpScoringArray[i].cumulativeTime;
        adjustedTime = 1000 * (120 / 3600) * waitThis;

        if (i === 0) {
            timedScore(0, 0, 0, 0);
        }

        for (y = 0; y <= waitThis; y++) {
            if (y === waitThis) {
                timedScore(currentHomeScore, currentAwayScore, waitThis, adjustedTime);
            }
        }
    }
}

function timedScore(currentHomeScore, currentAwayScore, waitThis, adjustedTime) {
    currentHomeScore = currentHomeScore;
    currentAwayScore = currentAwayScore;
    setTimeout(() => updateScores(currentHomeScore, currentAwayScore, waitThis), adjustedTime);
}


function updateScores(currentHomeScore, currentAwayScore, waitThis) {
    console.log("Home Team Score is: " + currentHomeScore);
    console.log("Away Team Score is: " + currentAwayScore);
    $('#scoreright').text(currentHomeScore);
    $('#scoreleft').text(currentAwayScore);
    console.log("Time elapsed is " + waitThis);
}


function isOvertime(gameDetails) {

    console.log("did it go to overtime?");
    if (gameDetails.periods.length > 4) {
        console.log("This game had " + (gameDetails.periods.length - 4) + " Overtime Period(s)");
    }
    else { console.log("No Overtime"); }
}

var awayTeamAlias;
var homeTeamAlias

function eventDetails(gameDetails) {
    // get venue, home team, visiting team, date, attendance
    attendance = gameDetails.attendance;
    console.log(attendance);
    date = gameDetails.scheduled;
    console.log(date);
    dateFormatted = moment(date).format('l');
    console.log(dateFormatted);
    venue = gameDetails.summary.venue.name + " in " + gameDetails.summary.venue.city + " " + gameDetails.summary.venue.state;
    console.log(venue);
    awayTeam = gameDetails.summary.away.name;
    console.log(awayTeam);
    awayTeamAlias = gameDetails.summary.away.alias;
    console.log(awayTeamAlias);
    awayTeamPoints = gameDetails.summary.away.points;
    console.log(awayTeamPoints);
    homeTeam = gameDetails.summary.home.name;
    console.log(homeTeam);
    homeTeamAlias = gameDetails.summary.home.alias;
    console.log(homeTeamAlias);
    homeTeamPoints = gameDetails.summary.home.points;
    console.log(homeTeamPoints);
    season = gameDetails.summary.season.year + " " + gameDetails.summary.season.name + " Season, Week #" + gameDetails.summary.week.title;
    console.log(season);


}


function driveSummary(gameDetails) {
    console.log("ball movement function");
    var cumulativeTime = 0;
    var i, j;
    sequence = 0;
    Loop1:
    for (i = 0; i < gameDetails.periods.length; i++) {
        Loop2:
        for (y = 0; y < gameDetails.periods[i].pbp.length; y++) {
            if (gameDetails.periods[i].pbp[y].type !== "drive" || sequence === gameDetails.periods[i].pbp[y].sequence
            ) { continue Loop2; }
            var source = gameDetails.periods[i].pbp[y];
            var z = source.events.length - 1;
            minutes = 60 * source.duration.substring(0, source.duration.indexOf(":"));
            seconds = parseInt(source.duration.substring(source.duration.indexOf(":") + 1, 3 + source.duration.indexOf(":")));
            totalSeconds = minutes + seconds;
            // if (sequence === gameDetails.periods[i].pbp[y].sequence) { totalSeconds = 0;}
            cumulativeTime += totalSeconds;
            drivesArray.push({
                driveNumber: (y + 1),
                period: (i + 1),
                periodType: gameDetails.periods[i].period_type,
                duration: source.duration,
                duractionSecs: totalSeconds,
                cumulativeTime: cumulativeTime,
                end_reason: source.end_reason,
                first_downs: source.first_downs,
                gain: source.gain,
                penaltyYards: source.penalty_yards,
                netgain: source.gain + source.penalty_yards,
                startingPoint: source.events[0].end_situation.location.yardline,
                startingSide: source.events[0].end_situation.location.alias,
                possession: source.events[0].end_situation.possession.alias,
                play_count: source.play_count,
                scoring_drive: source.scoring_drive,
                start_reason: source.start_reason,
                home_points: source.events[z].home_points,
                away_points: source.events[z].away_points,
                type: gameDetails.periods[i].pbp[y].type,
                sequence: gameDetails.periods[i].pbp[y].sequence
            });

            sequence = gameDetails.periods[i].pbp[y].sequence;
        }
    }
    console.log(drivesArray);
    // consoleDrive(drivesArray);
}


// function sortDrives() {
//     drivesArray.sort(function(a, b){return a.sequence - b.sequence});
//  for (i = 0; i < drivesArray.length; i++) {
//      if (i>0 && drivesArray[i].sequence === drivesArray[i-1].sequence)
//      drivesArray.splice(i, 1);
// }
// console.log(drivesArray);
// }



function consoleDrive(drivesArray) {
    for (i = 0; i < drivesArray.length; i++) {

        endReason = drivesArray[i].end_reason;
        waitThis = drivesArray[i].cumulativeTime;
        whoDrives = drivesArray[i].possession;
        period = drivesArray[i].period;

        if (whoDrives === homeTeamAlias){ //&& (period === 1 || period === 3)) {
            directionLeft = true;
        }
        else { directionLeft = false; }
        driveLength = drivesArray[i].netgain;
        movementSpeed = 1000 * (120 / 3600) * drivesArray[i].duractionSecs;
        adjustedTime = 1000 * (120 / 3600) * waitThis;

        // if (i=0) {
        // $('#footballtracker').animate({
        //     left: '-=23%'
        //     });
        //   }
        animateBallMovement(directionLeft, driveLength, movementSpeed);

        if (i === 0) {
            timedDrive("Kickoff", 0, 0);
        }

        for (y = 0; y <= waitThis; y++) {
            if (y === waitThis) {
                timedDrive(endReason, waitThis, adjustedTime, whoDrives);
            }
        }
    }
}

function timedDrive(endReason, waitThis, adjustedTime, whoDrives) {
    endReason = endReason;
    whoDrives = whoDrives;
    setTimeout(() => updateDrive(endReason, waitThis, whoDrives), adjustedTime);
}


function updateDrive(endReason, waitThis, whoDrives) {
    console.log(endReason + " at " + waitThis);
    whoDrives = whoDrives;
    if (whoDrives === homeTeamAlias) {
        $("#DriveResultHome").html(endReason);
    }
    if (whoDrives === awayTeamAlias) {
        $("#DriveResultAway").html(endReason);
    }
    setTimeout(() => clearDriveResult(), 1000);
}

function clearDriveResult() {
    $("#DriveResultHome").html("");
    $("#DriveResultAway").html("");
}




