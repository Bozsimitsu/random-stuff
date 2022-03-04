let app = document.getElementById('app');
let title = 'Hangman guess the game!';
let hangman = '';
let answer = [];
let hiddenWord = '';
let maxGuess = 8;
let wrongGuess = 0;
let buttons = '';
let guessed = [];
let gameStatus = '';
let showWord = '';


const games = [
    "Minecraft",
    "Stardew Valley",
    "Tetris",
    "Super Smash Bros",
    "Devil May Cry",
    "Fire Emblem",
    "Smite",
    "Final Fantasy",
    "Vampire Survivors",
    "Terraria",
    "Mega Man Zero",
    "Monster Hunter Rise",
    "Octopath Traveler",
    "Slay the Spire",
    "Risk of Rain",
    "RimWorld",
    "Hades",
    "Crab Game",
    "Scarlet Nexus",
    "Age of Empires",
    "Hangman"
];