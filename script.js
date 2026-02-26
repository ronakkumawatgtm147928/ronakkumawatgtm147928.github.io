// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

toggleBtn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    toggleBtn.innerText = isDark ? '🌙 LIGHT MODE' : '☀️ DARK MODE';
});

// Info Modal
function showInfo(title, desc, price, img) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = img;
    document.getElementById('infoModal').style.display = "block";
}

function closeModal() {
    document.getElementById('infoModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('infoModal')) {
        closeModal();
    }
}
