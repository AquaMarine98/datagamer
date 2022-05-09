let dropdownButton = document.getElementById('DROPDOWN_BUTTON');
let dropdownWindow = document.getElementById('DROPDOWN_WINDOW');

let actualRegion = document.getElementsByClassName('actual-region');

let regions = dropdownWindow.children;

for(i=0; i < regions.length; i++) {
    regions[i].addEventListener('click', selectRegion);
}

function selectRegion() {
    actualRegion[0].textContent = this.className;

    dropdownWindow.classList.add('not-showing');

    // Falta agregar la busqueda por servidor
}

document.addEventListener('mouseup', function(e) {
    var container1 = dropdownWindow;
    var container2 = dropdownButton;
    if (!container1.contains(e.target) && !container2.contains(e.target)) {
        dropdownWindow.classList.add('not-showing');
    }
});

dropdownButton.addEventListener('click', showDropdownWindow);

function showDropdownWindow() {
    dropdownWindow.classList.toggle('not-showing');
}