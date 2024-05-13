function navigateTo(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function showDetails() {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
    });
}
