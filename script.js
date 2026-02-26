const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        themeToggle.innerText = "🌙 LIGHT MODE";
    } else {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerText = "☀️ DARK MODE";
    }
});
