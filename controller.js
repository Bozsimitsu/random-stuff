function getRandomWord() {
    let word = Math.floor(Math.random() * games.length);
    answer = games[word].toUpperCase();
    guessed = answer.split('').map(c => c === ' ' ? ' ' : '_');
    show();
};

function createButtons(disabled = false) {
    buttons = '';
    for (let i = 65; i < 91; i++) {
        buttons += `<button value="${i}" ${disabled ? ' disabled' : ''} onclick="handleGuess(this)">${String.fromCharCode(i)}</button>`;
        
    }
    show();
};

function handleGuess(guess) {
    if (wrongGuess === maxGuess) return;
    let idxs = [];
    let guessedCharacter = String.fromCharCode(guess.value);
    let idx = answer.indexOf(guessedCharacter);
    while (idx != -1) {
        idxs.push(idx);
        idx = answer.indexOf(guessedCharacter, idx + 1)  
    }
    for (let i = 0; i < idxs.length; i++) {
        let index = idxs[i];
        guessed[index] = guessedCharacter;
    }

    if (answer.indexOf(guessedCharacter) === -1) {
        wrongGuess++;
        checkLoss();
    }
    show();
    guess.disabled = true;
    guessedWord();
    checkWin();
};

function guessedWord() {
    console.log(guessed)
    hiddenWord = guessed.map(answer => answer === ' ' ? '&nbsp;' : answer).join(' ');
    show();
};

function checkWin() {
    console.log(answer, guessed.join(''))
    if (answer === guessed.join('')) {
        gameStatus = 'You won!';
        createButtons(true);
        show();
    }
    
}

function checkLoss() {
    if (wrongGuess === maxGuess) {
        gameStatus = `You lost!`;
        showWord = `The word was: ${answer}`;
        createButtons(true);
        show();
    }
    
}

createButtons();
getRandomWord();
guessedWord();
