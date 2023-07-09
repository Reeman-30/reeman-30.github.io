window.onload = function() {
    const mode = document.getElementById('mode');
    const container = document.querySelector('div.container');
    const header = document.querySelector('div.container header');
    const copyright = document.querySelector('span');
    const navbar = document.querySelector('nav');
    const date = new Date();
    const dateYear = date.getFullYear();

    copyright.innerHTML = dateYear;

    mode.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        container.classList.toggle('container-dark');
        header.classList.toggle('border-white');
        navbar.classList.toggle('nav-dark');

        if( mode.innerHTML == 'Dark mode' ) {
            mode.innerHTML = 'Light mode';
        } else {
            mode.innerHTML = 'Dark mode';
        }

    });
}