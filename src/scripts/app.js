'use strict'


document.addEventListener("DOMContentLoaded", function() {
    const tousEl = document.querySelector('.projets__el-tous');
    const projetsEl = document.querySelector('.projets__el-projets');
    const themesEl = document.querySelector('.projets__el-themes');
    const projBtns = document.querySelector('.projets__proj-btn');
    const themeBtns = document.querySelector('.projets__theme-btn');
  
    // Fonction pour masquer les boutons
    function masquerBoutons() {
        projBtns.style.display = 'none';
        themeBtns.style.display = 'none';
    }
  
    tousEl.addEventListener('click', function() {
        masquerBoutons(); // Masquer les boutons
    });
  
    projetsEl.addEventListener('click', function() {
        projBtns.style.display = 'flex';
        themeBtns.style.display = 'none';
    });
  
    themesEl.addEventListener('click', function() {
        projBtns.style.display = 'none';
        themeBtns.style.display = 'flex';
    });
  
    // Au chargement de la page, masquer les boutons
    masquerBoutons();
});
