// recupero gli elementi del DOM che mi servono

const mailList = document.getElementById('lista-mail');

// dichiaro le variabili che mi servono

const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail`;

const allMail = [];

function getEmail() {

    for(i=0; i<10; i++) {
        axios.get(endpoint).then( mail => {
            let oneMail = mail.data.response;
            if(oneMail[i] != oneMail){
                allMail.push(oneMail);
            }
            console.log(allMail);
        })
    }
};

getEmail();