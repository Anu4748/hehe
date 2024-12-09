// Untitled-1.js

let ingredient1Complete = false;
let ingredient2Complete = false;
let ingredient3Complete = false;

// Show the first ingredient
document.getElementById('ingredient1').style.display = 'block';

function checkAnswer1() {
    const answer1 = document.getElementById('answer1').value.toLowerCase();
    if (answer1 === 'lj') {  
        ingredient1Complete = true;
        alert('Correct! Ingredient 1 collected.');
        document.getElementById('ingredient1').style.display = 'none';
        document.getElementById('ingredient2').style.display = 'block'; 
    } else {
        alert('Try again!');
    }
}

function checkAnswer2() {
    const answer2 = document.getElementById('answer2').value.toLowerCase();
    if (answer2 === 'cheques') {  
        ingredient2Complete = true;
        alert('Correct! Ingredient 2 collected.');
        document.getElementById('ingredient2').style.display = 'none';
        document.getElementById('ingredient3').style.display = 'block'; 
    } else {
        alert('Try again!');
    }
}

function checkAnswer3() {
    const answer3 = document.getElementById('answer3').value.trim();
    if (answer3.length > 0) {  
        ingredient3Complete = true;
        alert('Correct! Ingredient 3 collected.');
        document.getElementById('ingredient3').style.display = 'none';
        document.getElementById('potion').style.display = 'block';  
    } else {
        alert('Please type a message!');
    }
}

function brewPotion() {
    if (ingredient1Complete && ingredient2Complete && ingredient3Complete) {
        // Start potion brewing animation
        document.getElementById('potion-liquid').style.height = '100%'; 

        // After brewing, show message
        setTimeout(() => {
            document.getElementById('message').innerHTML = 'I love you baby. Please forgive me for everything I did. I am sorry. I miss you. Meet me soon pleaseeee! 💖';
            document.getElementById('message').style.opacity = 1;
        }, 2500);  

        setTimeout(() => {
            document.getElementById('brew-button').disabled = false;
        }, 4000);
    } else {
        document.getElementById('message').innerHTML = 'You need all ingredients to brew the potion!';
        document.getElementById('message').style.opacity = 1;  
    }
}
