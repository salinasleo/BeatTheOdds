// http://api.sportradar.us/nfl-ot2/games/2000/REG/10/schedule.json?api_key=pv88wnh2qherwa6brbagknpw


function getGameIds(year) {

    var gameIds ;

    // this is the schedule api from sportradar
    // $.ajax({
    //     url: "https://api.mysportsfeeds.com/v1.2/pull/nfl/2016-2017-regular/full_game_schedule.json",
    //     type: "GET", 
    //     dataType: 'json',
    //     async: false,
    //     headers: {
    //       "Authorization": "Basic " + btoa("leosal" + ":" + "TatersMYS1")},
    //     // data: '{ "comment" }',
    //     success: function (answer){
    //       alert('sportsfeeds schedule api worked!'); 
    //     arrayBack = answer;
    //     console.log("i just got results");
    //     console.log(arrayBack);
    //     }  
    // });

    // // this is the play by play api from mysportsfeeds
    //     $.ajax({
    //         url: "https://api.mysportsfeeds.com/v1.2/pull/nfl/2016-2017-regular/game_playbyplay.json?gameid=20160911-MIA-SEA",
    //         type: "GET", 
    //         dataType: 'json',
    //         async: false,
    //         headers: {
    //           "Authorization": "Basic " + btoa("leosal" + ":" + "TatersMYS1")},
    //         // data: '{ "comment" }',
    //         success: function (answer){
    //           alert('sportsfeeds play by play api worked!'); 
    //         arrayBack = answer;
    //         console.log("i just got results");
    //         console.log(arrayBack);
    //         }  
    // });

    // this is the schedule api from sportradar
    console.log(Date.now())
    $.ajax({
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/' +
            'http://api.sportradar.us/nfl-ot2/games/' + year + '/REG/schedule.json?api_key=phdh8pn346nu68qee8pddn2f'
    }).then(function (data) {
        alert('sportRadar schedule  api worked!');
        gameIds = data.weeks;
        console.log(gameIds);
        parseGames(gameIds);
    });

    // this is the play by play api from sportradar
    // $.ajax({
    //     method: 'GET',
    //     url: 'https://cors-anywhere.herokuapp.com/' +
    //          'http://api.sportradar.us/nfl-ot2/games/c8dc876a-099e-4e95-93dc-0eb143c6954f/pbp.json?api_key=phdh8pn346nu68qee8pddn2f'
    //   }).then(function(data) {
    //     alert('sportRadar play by play api worked!'); 
    //     console.log(data);
    // });

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
    setTimeout(() => getGameIds(2011), 500);
    setTimeout(() => getGameIds(2012), 1000);
    setTimeout(() => getGameIds(2013), 1500);
}

getSeveralSeasons();
