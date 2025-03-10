function isEven(number) {
    return number % 2 === 0;
}

function brainEven() {
    alert("Welcome to the Brain Games!");
    
    let name = prompt("May I have your name?");
    alert(`Hello, ${name}!`);

    alert('Answer "yes" if the number is even, otherwise answer "no".');
    
    let correctAnswers = 0;
    
    while (correctAnswers < 3) {
        let number = Math.floor(Math.random() * 100) + 1;
        let userAnswer = prompt(`Question: ${number}\nYour answer:`).toLowerCase();
        
        let correctAnswer = isEven(number) ? "yes" : "no";
        
        if (userAnswer !== correctAnswer) {
            alert(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            alert(`Let's try again, ${name}!`);
            return;
        }
        
        alert("Correct!");
        correctAnswers++;
    }
    
    alert(`Congratulations, ${name}!`);
}

brainEven();
