// Theme Toggle Fix
const themeBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

themeBtn.onclick = () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
};

// Specifications Logic
function openSpecs(name, img, price, engine, power, torque, link) {
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalImg').src = img;
    document.getElementById('mEngine').innerText = engine;
    document.getElementById('mPower').innerText = power;
    document.getElementById('mTorque').innerText = torque;
    document.getElementById('modalLiveLink').href = link;
    
    document.getElementById('specsModal').style.display = "block";
}

function closeSpecs() {
    document.getElementById('specsModal').style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    let modal = document.getElementById('specsModal');
    if (event.target == modal) {
        closeSpecs();
    }
}
