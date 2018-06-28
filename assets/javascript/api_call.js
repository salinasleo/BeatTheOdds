
gameForTesting = "35c8c305-f698-472a-809d-4b787497be93";
gameForTesting2 = "441885c0-9482-410e-8ac3-7473052f34bd";
gameForTesting3 = "0651e14f-55b0-403f-9ff0-d0f11261490d";
gameForTesting4 = "9a38d9e9-aa16-4865-bac8-68854f978513";
gameForTesting5 = "37796d82-3be5-4084-83c6-4cf4b2361191";
gameForTesting6 = "9e39ac0c-a4b6-4b7c-92eb-6c502842c49d";
gameForTesting7 = "f242f82a-0cc0-47e6-915f-fb2857072cea";




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

function playbyplay() {


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
    consoleScore(pbpScoringArray);
}

currentHomeScore = 0;
currentAwayScore = 0;
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
    console.log("Time elapsed is " + waitThis);
}


function isOvertime(gameDetails) {

    console.log("did it go to overtime?");
    if (gameDetails.periods.length > 4) {
        console.log("This game had " + (gameDetails.periods.length - 4) + " Overtime Period(s)");
    }
}


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
    var i,j;
    sequence=0;
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
                play_count: source.play_count,
                scoring_drive: source.scoring_drive,
                start_reason: source.start_reason,
                home_points: source.events[z].home_points,
                away_points: source.events[z].away_points,
                type: gameDetails.periods[i].pbp[y].type,
                sequence: gameDetails.periods[i].pbp[y].sequence
            });

            sequence= gameDetails.periods[i].pbp[y].sequence;
        }
    }
    console.log(drivesArray);
    consoleDrive(drivesArray);
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
        adjustedTime = 1000 * (120 / 3600) * waitThis;

        if (i === 0) {
            timedDrive("Kickoff", 0, 0);
        }

        for (y = 0; y <= waitThis; y++) {
            if (y === waitThis) {
                timedDrive(endReason, waitThis, adjustedTime);
            }
        }
    }
}

function timedDrive(endReason, waitThis, adjustedTime) {
    endReason = endReason;
    setTimeout(() => updateDrive(endReason, waitThis), adjustedTime);
}


function updateDrive(endReason, waitThis) {
    console.log(endReason + " at " + waitThis);
}




// Initialize Firebase
var config = {
    apiKey: "AIzaSyAROJ6HwS8af8nrj8IdAnO6txXnW89OqI0",
    authDomain: "beattheodds-5a9ed.firebaseapp.com",
    databaseURL: "https://beattheodds-5a9ed.firebaseio.com",
    projectId: "beattheodds-5a9ed",
    storageBucket: "beattheodds-5a9ed.appspot.com",
    messagingSenderId: "1086482908213"
};
firebase.initializeApp(config);
