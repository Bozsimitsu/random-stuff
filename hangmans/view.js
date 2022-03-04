show()
function show() {
    app.innerHTML = `
        <div>${title}</div>
        <div>Wrong guesses ${wrongGuess} out of ${maxGuess}</div>
        <div style="color: red">${showWord}</div>
        <div>${hiddenWord}</div>
        <div>${gameStatus}</div>
        <div>${buttons}</div>
        
        `
}

