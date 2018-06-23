
function getGameIds(year) {

    var gameIds ;

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

}




var gamesArray = [];

function parseGames(gameIds) {
     for (i = 0; i < gameIds.length; i++) {
        for (y = 0; y < gameIds[i].games.length; y++) {
                 gamesArray.push( gameIds[i].games[y].id )
                // gameIds[1].games[5].id);
               
        }
    }
    console.log(gamesArray);
};



function getSeveralSeasons() {
    // the API has a max limit of calls per second so using a timer
    setTimeout(function() { getGameIds(2010) }, 0);
    setTimeout(() => getGameIds(2011), 800);
    setTimeout(() => getGameIds(2012), 1600);
    setTimeout(() => getGameIds(2013), 2400);
    setTimeout(() => shuffle(), 3600);
}

getSeveralSeasons();

var gameNumber=0;
var numberGames;

function shuffle() {
    gamesArray.sort();
    console.log(gamesArray);
    numberGames = gamesArray.length;
  }


 var gameDetails = [];

function playbyplay() {

  
    gamePlaying = gamesArray[gameNumber];
    gameNumber++;
    if (gameNumber > numberGames) {
        gameNumber=0;
    }

    // this is the play by play api from sportradar
    $.ajax({
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/' +
             'http://api.sportradar.us/nfl-ot2/games/' + gamePlaying + '/pbp.json?api_key=phdh8pn346nu68qee8pddn2f'
      }).then(function(data) {
        gameDetails=data;
        console.log(gameDetails);
        ballMovement(gameDetails);
        finalScore(gameDetails);
        scoringPlays(gameDetails);
        eventDetails(gameDetails);
    });

}

function ballMovement(gameDetails){

}


function finalScore(gameDetails){

}


function scoringPlays(gameDetails){

}

function eventDetails(gameDetails){
    // get venue, home team, visiting team, date, attendance

}