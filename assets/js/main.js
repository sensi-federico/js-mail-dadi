
// ESERCIZIO MAIl

function access () {

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
    } else {
        console.log('Access denied');
    }
}


// ESERCIZIO DADI 


const player = Math.ceil(Math.random() * 6);
const bot = Math.ceil(Math.random() * 6);

let winner;

if (player > bot) {
    winner = "player";
} else if (player < bot) {
    winner = "bot";
} else {
    winner = "Pareggio";
}
console.log(player, bot);
console.log(winner);