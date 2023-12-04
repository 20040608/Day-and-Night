function toggleMode() {
    const body = document.body;
    const adBanner = document.getElementById('adBanner');

    body.classList.toggle('day-mode');
    body.classList.toggle('night-mode');
    
    if (body.classList.contains('night-mode')) {
        adBanner.style.display = 'block';
    } else {
        adBanner.style.display = 'none';
    }
}