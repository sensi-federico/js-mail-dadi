

const player_1 = document.getElementById('player_results');
player_1.style.display = 'none';
const player_2 = document.getElementById('bot_results');
player_2.style.display = 'none';
const buttonShot = document.getElementById('shot');
buttonShot.style.display = 'none';

// ESERCIZIO MAIl

function access() {

    // const userEmail = prompt("Inserisci email");
    const userEmail = document.getElementById('mail').value;
    console.log(userEmail);

    const emailAddress = [
        "hello@mail.com",
        "world@mail.com",
        "admin@mail.com",
        "user@mail.com"
    ];

    let login;

    for (let i = 0; i < emailAddress.length; i++) {
        const email = emailAddress[i];


        if (userEmail === email) {
            login = true;
        }

    }

    if (login) {
        console.log('Welcome');

        player_1.style.display = 'block';
        player_2.style.display = 'block';
        buttonShot.style.display = 'block';


    } else {
        console.log('Access denied');
    }
}


// ESERCIZIO DADI 

function shots() {



    const player = Math.ceil(Math.random() * 6);
    const bot = Math.ceil(Math.random() * 6);
    const resultOne = document.getElementById('player_results');
    const resultTwo = document.getElementById('bot_results');
    const pointOne = document.getElementById('pointOne');
    const pointTwo = document.getElementById('pointTwo');

    pointOne.innerHTML = player;
    pointTwo.innerHTML = bot;

    let winner = document.getElementById('winner');

    if (player > bot) {
        winner.innerHTML = 'Player Vince!';
        resultOne.style.backgroundColor = 'green';
        resultTwo.style.backgroundColor = 'red';
    } else if (player < bot) {
        winner.innerHTML = 'Bot Vince!';
        resultTwo.style.backgroundColor = 'green';
        resultOne.style.backgroundColor = 'red';
    } else {
        winner.innerHTML = 'Pareggio!';
        resultTwo.style.backgroundColor = 'grey';
        resultOne.style.backgroundColor = 'grey';
    }
    console.log(player, bot);
    console.log(winner);
}
