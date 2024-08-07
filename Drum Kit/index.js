


function buttonAnimation(currentKey)
    {
        var activeButton = document.querySelector("."+currentKey)
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        } , 100)    
    };



var len = document.querySelectorAll("button").length;
for(var i = 0 ; i < len ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click" , function (){
        
        var buttonHtml = this.innerHTML;
        orad(buttonHtml);
        buttonAnimation(buttonHtml);
    })
}


document.addEventListener("keypress" , function (event){
    orad(event.key);
    buttonAnimation(event.key);
});

function orad(key){  

    switch (key) {
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(buttonHtml);
    }


    
}