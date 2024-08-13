const secretNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const messageElement = document.getElementById('message');

    if (userGuess === secretNumber) {
        messageElement.textContent = 'You\'ve win the match!';
        messageElement.style.color = 'green';
    } else if (userGuess > secretNumber) {
        messageElement.textContent = 'Try a smaller number!';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Try a larger number!';
        messageElement.style.color = 'red';
    }
});