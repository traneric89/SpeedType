window.addEventListener('load', init);

//Global Variables 

//Level difficulty
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

//To change difficulty
const currentLevel = levels.medium;

let time  = currentLevel;  
let score = 0; 
let isPlaying; 

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'engineer',
    'school',
    'bump',
    'match',
    'argue',
    'material',
    'precious',
    'undesirable',
    'history',
    'defeated',
    'flood',
    'possess',
    'lethal',
    'quickest',
    'colossal',
    'splendid',
    'attack',
    'defend',
    'present',
    'splendid',
    'coordinated',
    'electrical',
    'software',
    'computer',
    'controller',
    'grandmother',
    'bottle',
    'water',
    'mobile',
    'transport',
    'truck',
    'machine',
    'learning',
    'powerful',
    'government',
    'camera',
    'display',
    'glove',
    'winter',
    'august',
    'january',
    'february',
    'library',
    'custodian',
    'garbage',
    'musical',
    'whispering',
    'silent',
    'desktop',
    'occupation',
    'walking',
    'chicken',
    'trackpad',
    'laptop',
    'keyboard',
    'shoehorn',
    'finishline'
];

//Initialize Page
function init(){
 //Show max time
 seconds.innerHTML = currentLevel; 

 //Load starting word from array
 showWord(words);

 //Check if word input correct
 wordInput.addEventListener('input', startMatch);

 //Call countdown every second
 setInterval(countdown, 1000);

 //Check game status
 setInterval(checkStatus, 50);
}

//Start match function
function startMatch(){
    if(matchWord()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score ++; 
    }

    if(score===-1){
        scoreDisplay.innerHTML = 0;
    }
    else{
        scoreDisplay.innerHTML = score;    
    }
}

//Check if typed word is correct
function matchWord(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "Correct";
        return true; 
    }
    else{
        message.fontcolor.innerHTML('red');
        message.innerHTML = "Game Over";
        return false;
    }
}

//Pick and show random word
function showWord(words){
    //Generates random number used as index to select random word in array 'words'
    const randomIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randomIndex];
}

//Countdown function
function countdown(){
    //Check if out of time
    if(time > 0){
        time--;
    }
    else if(time===0){
        isPlaying = false; 
    }
    timeDisplay.innerHTML = time; 
}

//Game status function
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML = "Game Over";
        score = -1;
    }
}

