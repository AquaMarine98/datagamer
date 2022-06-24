const searchButton = document.getElementById('SEARCH_BUTTON');

/* Sections */

const features = document.getElementById('FEATURES');
const playerStats = document.getElementById('PLAYER_STATS');

let alreadySearch = 'false';

searchButton.addEventListener('click', () => {
    /* Logica de como buscar un summoner */

    if(alreadySearch === 'false') {
        features.classList.add('is-hidden');
        playerStats.classList.remove('is-hidden');

        alreadySearch = 'true';
    }
    else {
        console.log('Already load');
    }
})