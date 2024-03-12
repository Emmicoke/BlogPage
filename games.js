// Variables
//game1
const image = ["media/dice1.png", "media/dice2.png", "media/dice3.png", "media/dice4.png", "media/dice5.png", "media/dice6.png"];
var num;
var num2;
var count = 0;
var win = 0, lose = 0, draw = 0;
const img1 = document.getElementById("diceImg1");
const img2 = document.getElementById("diceImg2");
const mainText = document.getElementById("mainText");
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const winStat = document.getElementById("winStat");
const loseStat = document.getElementById("loseStat");
const drawStat = document.getElementById("drawStat");
//
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
button4.style.visibility = "hidden";
button1.onclick = game1;
button2.onclick = game2;
// Functions for game Dice Game
function game1() {
    if (count != 0) {
        // Create random numbers
        num = Math.floor(Math.random() * 6);
        num2 = Math.floor(Math.random() * 6);
        // Giving images from array
        img1.src = image[num];
        img2.src = image[num2];
        // Calling other functions
        winner();
        textChanger();
    }
    else {
        // Change button inner text
        button1.innerText = "Roll";
        button2.innerText = "Reset";
        button3.innerText = "Back";
        button2.onclick = reset;
        button3.onclick = back;
        count++;
        mainText.innerHTML = 'Press "Roll" button to roll dice. If you roll higher than computer you won.'
        img1.src = "media/dice0.png";
        img2.src = "media/dice0.png";
    }
}

function winner() {
    if (num > num2) {
        mainText.innerHTML = "You won!";
        win++;
    }
    else if (num < num2) {
        mainText.innerHTML = "You lost!";
        lose++;
    }
    else {
        mainText.innerHTML = "Draw!";
        draw++;
    }
}

function textChanger() {
    if (count != 0) {
        winStat.innerHTML = "Win: " + win;
        loseStat.innerHTML = "Lose: " + lose;
        drawStat.innerHTML = "Draw: " + draw;
        playerText.innerHTML = "You";
       computerText.innerHTML = "Computer";
    }
}

function reset() {
    count = 1;
    num = 0;
    num2 = 0;
    win = 0;
    lose = 0;
    draw = 0;
    mainText.innerHTML = 'Press "Roll" button to roll dice. If you roll higher than computer you won.'
    img1.src = "media/dice1.png";
    img2.src = "media/dice1.png";
    winStat.innerHTML = "Win: " + win;
    loseStat.innerHTML = "Lose: " + lose;
    drawStat.innerHTML = "Draw: " + draw;
}

function back() {
    // Reseting all values
    button1.innerText = "Dice Game";
    button2.innerText = "Odd or Even";
    button3.innerText = "Guess Game";
    button1.style.visibility = "";
    button2.style.visibility = "";
    button3.style.visibility = "";
    button4.style.visibility = "hidden";
    button1.onclick = game1;
    button2.onclick = game2;
    button3.onclick = 0;
    button4.onclick = 0;
    count = 0;
    num = 0;
    num2 = 0;
    win = 0;
    lose = 0;
    draw = 0;
    mainText.innerHTML = "Welcome to game page. You can choose games below";
    playerText.innerHTML = "";
    computerText.innerHTML = "";
    img1.src = "";
    img2.src = "";
    winStat.innerHTML = "";
    loseStat.innerHTML = "";
    drawStat.innerHTML = "";
}
// Functions for Odd or Even game
function game2(){
    if(count % 2 != 0){
        num2 = Math.floor(Math.random() * 6);
        img1.src = image[num2];
        num2++;
        mainText.innerHTML = "The number is: " + num2;
        button1.style.visibility = "";
        button1.innerText = "Roll";
        button1.onclick = game2;
        button2.style.visibility = "";
        button2.innerText = "Back";
        button2.onclick = back;
        button3.style.visibility = "hidden";
        if(num){
            if(num2 % 2 != 0){
                win++;
                winStat.innerHTML = "Win: " + win;
                loseStat.innerHTML = "Lose: " + lose;
                mainText.innerHTML += "\n" + "You won!";
            }
            else{
                lose++;
                winStat.innerHTML = "Win: " + win;
                loseStat.innerHTML = "Lose: " + lose;
                mainText.innerHTML += "\n" + "You lost!";
            }
        }
        else{
            if(num2 % 2 == 0){
                win++;
                winStat.innerHTML = "Win: " + win;
                loseStat.innerHTML = "Lose: " + lose;
                mainText.innerHTML += "\n" + "You won!";
            }
            else{
                lose++;
                winStat.innerHTML = "Win: " + win;
                loseStat.innerHTML = "Lose: " + lose;
                mainText.innerHTML += "\n" + "You lost!";
            }
        }
        count++;
    }

    else if(count % 2 == 0){
        mainText.innerHTML = 
        'You need to guess the dice number by pressing "Odd" or "Even" button.'
        button1.innerText = "Roll";
        button1.style.visibility = "";
        button2.style.visibility = "";
        button3.style.visibility = "";
        button1.innerText = "Odd";
        button2.innerText = "Even";
        button3.innerText = "Back";
        button1.onclick = odd;
        button2.onclick = even;
        button3.onclick = back;
        button4.onclick = back;
        img1.src = "media/dice0.png";
        count++;
    }
}

function odd(){
    num = 1;
    game2();
}

function even(){
    num = 0;
    game2();
}

// Functions for Guess Game