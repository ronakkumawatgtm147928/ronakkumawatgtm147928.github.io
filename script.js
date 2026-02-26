// Theme Toggle
const btn = document.getElementById('theme-toggle');
btn.onclick = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
};

// Open Car Details
function openDetails(title, desc, price, img) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = img + "?w=800";
    document.getElementById('carModal').style.display = "block";
}

// Close Modal
function closeModal() {
    document.getElementById('carModal').style.display = "none";
}

// Close when clicking outside
window.onclick = (event) => {
    if (event.target == document.getElementById('carModal')) {
        closeModal();
    }
};
function openDetails(title, desc, price, img, engine, power, torque) {
    // Basic Info
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = img + "?w=800";
    
    // Specifications Table Data
    document.getElementById('specEngine').innerText = engine;
    document.getElementById('specPower').innerText = power;
    document.getElementById('specTorque').innerText = torque;
    
    // Show Modal
    document.getElementById('carModal').style.display = "block";
}

function closeModal() {
    document.getElementById('carModal').style.display = "none";
}
