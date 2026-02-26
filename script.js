const themeBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

themeBtn.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.setAttribute('data-theme', targetTheme);
    
    // Mode button text update
    themeBtn.innerText = targetTheme === 'dark' ? '☀️ LIGHT MODE' : '🌙 DARK MODE';
});
