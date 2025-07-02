const profile = document.querySelector('.profile');

profile.addEventListener('click', toggleDropDown);

function toggleDropDown() {
    const dropDownWrapper = document.querySelector('.dropdown-nav__wrapper');

    dropDownWrapper.classList.toggle('open');
    toggleAria();
}

function toggleAria() {
    const dropDownToggler = document.querySelector('.dropdown-toggler');
    const dropDownTogglerAriaExpanded =
        dropDownToggler.getAttribute('aria-expanded');

    dropDownToggler.setAttribute(
        'aria-expanded',
        dropDownTogglerAriaExpanded === 'false' ? 'true' : 'false'
    );

    const dropDownContainer = document.querySelector(
        '.dropdown-nav__container'
    );
    const dropDownContainerAriaHidden =
        dropDownContainer.getAttribute('aria-hidden');

    dropDownContainer.setAttribute(
        'aria-hidden',
        dropDownContainerAriaHidden === 'false' ? 'true' : 'false'
    );
}
