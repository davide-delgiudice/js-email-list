// recupero gli elementi del DOM che mi servono

const mailList = document.getElementById('lista-mail');
const mailButton = document.getElementById('btn-mail');

// dichiaro le variabili che mi servono

const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail`;

const play = () => {
    mailList.innerHTML = '';

    for(i=0; i<10; i++) {
        axios.get(endpoint).then( mail => {
            let oneMail = mail.data.response;
            if(oneMail[i] != oneMail){
                const listItem = document.createElement('li');
                listItem.innerHTML = oneMail;
                mailList.appendChild(listItem);
            }
        })
    }
};

mailButton.addEventListener('click', play);