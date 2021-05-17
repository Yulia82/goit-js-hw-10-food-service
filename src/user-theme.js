const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitch = document.querySelector('#theme-switch-toggle');
const myTheme = localStorage.getItem('my-theme');

themeSwitch.addEventListener('change', changeTheme);

if (myTheme) {
    document.body.classList.add(myTheme);

    if (myTheme === Theme.DARK) {
        themeSwitch.checked = true;
    } else {
        document.body.classList.add(Theme.LIGHT); 
    };
};

function changeTheme(evt) {
    if (evt.target.checked) {
        document.body.classList.toggle(Theme.LIGHT);
        document.body.classList.toggle(Theme.DARK);
        localStorage.setItem('my-theme', Theme.DARK);
    } else {
        document.body.classList.toggle(Theme.LIGHT);
        document.body.classList.toggle(Theme.DARK);
        localStorage.setItem('my-theme', Theme.LIGHT);
    };
};
