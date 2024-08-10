var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var userPattern = [];


var level = 0;
var started = false;
$(document).on("keypress" , function () {
    if(started == false){
        $("#level-title").text("level " + level);
        nextSequence();
        started = true;
    }
});
function nextSequence() {
    userPattern = [];
    level++;

    $("#level-title").text("level " + level);

    var rand = Math.round(Math.random()*3);
    var randomlyChosenColor = buttonColors[rand];
    gamePattern.push(randomlyChosenColor)

    var currColor = "#"+randomlyChosenColor;
    $(currColor).fadeOut("fast").fadeIn(100);
    playSound(randomlyChosenColor);
};


$(".btn").on("click" , function () {
    var userChosenColour = $(this).attr("id");
    userPattern.push(userChosenColour);
    playSound(userChosenColour);
    animate(this);
    checkAnswer(userPattern.length-1);
    console.log(userPattern);
});


function playSound(name) {
    var audio  = new Audio("sounds/"+name+".mp3");
    audio.play();
};


function animate(currentColor) {
        $(currentColor).addClass("pressed");
        setTimeout(() => {
            $(currentColor).removeClass("pressed");
            
        }, 150);
};


function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel]===userPattern[currentLevel]){
        console.log("success!!");
        if(userPattern.length === gamePattern.length){
            setTimeout(() => {
            nextSequence();
        }, 1000);
        }
    }
    else{
        console.log("failed!!");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        level = level-1;
        if(level<0) level=0;
        $("#level-end").text("Your Score: " + level);
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
            
        }, 300);
        var audio  = new Audio("sounds/wrong.mp3");
        audio.play();
        starOver();
    }
};


function starOver() {
    level = 0;
    started = false;
    gamePattern = [];
    
}