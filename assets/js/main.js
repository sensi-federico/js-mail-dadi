
// ESERCIZIO MAIl

const signedMail = ['hello@mail.com', 'world@mail.com'];

const inputNone = document.getElementById('mail');
const buttonNone = document.getElementById('button');
const buttonDadi = document.getElementById('dadiButton');
buttonDadi.style.display = 'none';

for (let j = 0; j < signedMail.length; j++) {

    const button = document.getElementById('button');

    button.addEventListener('click', function () {
        const inputMail = document.getElementById('mail').value;
        console.log(inputMail);

        if (inputMail !== signedMail[j]) {
            console.log('no');
            alert('Email errata, riprova.');

        } else if (inputMail === signedMail[j]) {
            console.log('si');
            alert('Email corretta,');
            inputNone.style.display = 'none';
            buttonNone.style.display = 'none';
            buttonDadi.style.display = 'block';
        }
        alert = function () { };
    })
}


// ESERCIZIO DADI

const pcSquare = document.getElementById('pc');
const userSquare = document.getElementById('user');

buttonDadi.addEventListener('click', function () {

    function shot(e) {
        return Math.floor(Math.random() * e);
    }

    pcSquare.append(shot(6));
    userSquare.append(shot(6));
})