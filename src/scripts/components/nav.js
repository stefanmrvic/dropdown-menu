const profile = document.querySelector('.profile');

profile.addEventListener('click', toggleDropDown);

function toggleDropDown() {
    const dropDownContainer = document.querySelector(
        '.dropdown-nav__container'
    );
    const dropDownState = window.getComputedStyle(dropDownContainer).display;

    if (dropDownState === 'none') expandDropDown();
    else collapseDropDown();
}

function expandDropDown() {
    const dropDownContainer = document.querySelector(
        '.dropdown-nav__container'
    );

    dropDownContainer.style.display = 'flex';

    setTimeout(() => {
        dropDownContainer.classList.add('open');
    }, 0);
}

function collapseDropDown() {
    const dropDownContainer = document.querySelector(
        '.dropdown-nav__container'
    );

    dropDownContainer.classList.remove('open');

    setTimeout(() => {
        dropDownContainer.style.display = 'none';
    }, 800);
}
