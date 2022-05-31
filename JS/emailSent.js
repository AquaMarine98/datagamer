let botContainer = document.getElementById('BOT_CONTAINER');
let botContainers = botContainer.querySelectorAll('#BOT_CONTAINER > div');

let sendEmailButton = document.getElementById('SUBMIT_BUTTON');

sendEmailButton.addEventListener('click', sendEmail);

function sendEmail() {
    botContainers[0].classList.add('email-sent');
    botContainers[1].classList.add('email-sent');
}
