// Theme Toggle Fix
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
};

// Professional Modal Detail Switcher
function openSpecs(name, desc, price, img, eng, pwr, trq, link) {
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalImg').src = img;
    document.getElementById('mEngine').innerText = eng;
    document.getElementById('mPower').innerText = pwr;
    document.getElementById('mTorque').innerText = trq;
    document.getElementById('modalLiveLink').href = link;
    
    document.getElementById('specsModal').style.display = "block";
}

function closeSpecs() {
    document.getElementById('specsModal').style.display = "none";
}

// Click outside to close
window.onclick = (e) => {
    if (e.target == document.getElementById('specsModal')) closeSpecs();
}
