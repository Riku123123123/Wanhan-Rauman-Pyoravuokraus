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

const express = require('express');
const app = express();

// Aseta eväste, joka vanhenee 1 tunnin kuluttua
document.cookie = "kayttaja=arvo; expires=" + new Date(new Date().getTime() + 3600 * 1000).toUTCString() + "; path=/";


app.get('/', (req, res) => {
  res.cookie('kayttaja', 'arvo', { maxAge: 3600 * 1000, httpOnly: true });
  res.send('Eväste asetettu');
});

app.listen(3000, () => {
  console.log('Palvelin käynnissä portissa 3000');
});
