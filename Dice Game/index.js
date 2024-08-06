var randomNumber1 = Math.round(Math.random() * (6-1) + 1);
console.log(randomNumber1);

const hello1 = document.querySelector("img");
hello1.setAttribute("src" , `images/dice${randomNumber1}.png`);



var randomNumber2 = Math.round(Math.random() * (6-1) + 1);
console.log(randomNumber2);

const hello2 = document.querySelector("img.img2");
hello2.setAttribute("src" , `images/dice${randomNumber2}.png`);




if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2  Won!!";
}
else if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1  Won!!";
}
else{
    document.querySelector("h1").innerHTML = "DRAW!!";
    
}