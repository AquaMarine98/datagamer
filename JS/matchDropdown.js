let match = document.getElementById('ALL_PLAYERS');
let expandMatchButton = document.getElementById('EXPAND-MATCH-BUTTON');

expandMatchButton.addEventListener('click', showMatch);

function showMatch() {
    expandMatchButton.classList.toggle('expanded');
    match.classList.toggle('is-hidden');
}