const btn = document.getElementById('btnb');
const orar = document.getElementById('orar');

btn.addEventListener('click', function() {
  orar.classList.remove('orar-hidden'); // Elimină clasa care ascunde blocul

  const timpAfisare = 5000; // timpul în milisecunde (în acest caz, 5 secunde)

  setTimeout(function() {
    orar.classList.add('orar-hidden'); // Adaugă înapoi clasa pentru a ascunde blocul
  }, timpAfisare);
});
