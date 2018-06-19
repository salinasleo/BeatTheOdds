//Global variables
var timeLeft = 60;
var intervalId;

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