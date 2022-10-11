

const signedMail = ['hello@mail.com', 'world@mail.com'];




for (let j = 0; j < signedMail.length; j++) {

    const button = document.getElementById('button');

    button.addEventListener('click', function () {
        const inputMail = document.getElementById('mail').value;
        console.log(inputMail);

        if (inputMail !== signedMail[j]) {
            console.log('no');
            alert('Email errata, riprova.');

        } else {
            console.log('si');
            alert('Email corretta,');
            j = signedMail.length;
        }
        alert = function () {};
    })
}
