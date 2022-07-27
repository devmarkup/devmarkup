$(document).ready(() => {
  function initUserTheme() {
    const htmlBlock = document.documentElement;
    const saveUserTheme = localStorage.getItem('user-theme');
    const themeButton = $('.switch-theme');
    const themeText = $('.header__theme--text');
    let userTheme;
    if (window.matchMedia) {
      userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      !saveUserTheme ? changeTheme() : null;
    });
    themeButton.on('click', () => {
      changeTheme(true);
    });

    function setThemeClass() {
      if (saveUserTheme) {
        htmlBlock.classList.add(saveUserTheme);
        if (saveUserTheme === 'dark') {
          themeButton.addClass('dark');
          themeText.text('Dark theme');
        } else {
          themeButton.removeClass('dark');
          themeText.text('Light theme');
        }
      } else {
        htmlBlock.classList.add(userTheme);
        if (userTheme === 'dark') {
          themeButton.addClass('dark');
          themeText.text('Dark theme');
        } else {
          themeButton.removeClass('dark');
          themeText.text('Light theme');
        }
      }
    }

    function changeTheme(saveTheme = false) {
      let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
      let newTheme;
      if (currentTheme === 'light') {
        newTheme = 'dark';
        themeButton.addClass('dark');
        themeText.text('Dark theme');
      } else if (currentTheme === 'dark') {
        newTheme = 'light';
        themeButton.removeClass('dark');
        themeText.text('Light theme');
      }
      htmlBlock.classList.remove(currentTheme);
      htmlBlock.classList.add(newTheme);
      saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
    }

    setThemeClass();
  }
  function setCurrentYear() {
    $('.current-year').text(new Date().getFullYear());
  }

  initUserTheme();
  setCurrentYear();
});
