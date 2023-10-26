const themeToggle = document.getElementById('theme-toggle-checkbox');
const constructionMessage = document.querySelector('.construction-message');

function isDarkModePreferred() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function updateThemeToggle() {
  const prefersDarkMode = isDarkModePreferred();
  if (prefersDarkMode) {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
  } else {
    document.body.classList.remove('dark-theme');
    themeToggle.checked = false;
  }
}

updateThemeToggle();

themeToggle.addEventListener('change', function () {
  if (themeToggle.checked) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
});


window.matchMedia('(prefers-color-scheme: dark)').addListener(updateThemeToggle);