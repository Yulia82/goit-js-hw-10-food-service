const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitch = document.querySelector('#theme-switch-toggle');
const myTheme = localStorage.getItem('my-theme');

themeSwitch.addEventListener('change', changeTheme);

if (myTheme === Theme.DARK) {
    document.body.classList.add(myTheme);
    themeSwitch.checked = true;
} else {
    document.body.classList.add(Theme.LIGHT); 
};

function changeTheme(evt) {
    if (evt.target.checked) {
        replaceTheme(Theme.DARK, Theme.LIGHT);
    } else {
        replaceTheme(Theme.LIGHT, Theme.DARK);
    };
};

function replaceTheme(newTheme, OldTheme) {
    document.body.classList.add(newTheme);
    document.body.classList.remove(OldTheme);
    localStorage.setItem('my-theme', newTheme);
};
