const themeBtn = document.querySelector('#theme-btn');
const body = document.querySelector('body');

function changeTheme() {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

const storedTheme = localStorage.getItem('theme');

if (storedTheme) {
    if (storedTheme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.add('light-theme');
    }
} else {
    body.classList.add('light-theme');
}

themeBtn.addEventListener('click', changeTheme);