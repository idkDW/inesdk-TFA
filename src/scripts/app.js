'use strict'
/*

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

*/

document.addEventListener("DOMContentLoaded", function() {
    const projBtns = document.querySelectorAll('.proj-btn');
    const themeBtns = document.querySelectorAll('.theme-btn');
    const contenuItems = document.querySelectorAll('.projets__contenu-item');

    function masquerContenus() {
        contenuItems.forEach(item => {
            item.style.display = 'none';
        });
    }

    function afficherContenu(contenuId) {
        masquerContenus();
        const contenu = document.getElementById(contenuId);
        if (contenu) {
            contenu.style.display = 'block';
        }
    }

    projBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = btn.getAttribute('data-target');
            afficherContenu(target);
        });
    });

    themeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = btn.getAttribute('data-target');
            afficherContenu(target);
        });
    });

    const tousEl = document.querySelector('.projets__el-tous');
    const projetsEl = document.querySelector('.projets__el-projets');
    const themesEl = document.querySelector('.projets__el-themes');
    const projBtnsContainer = document.querySelector('.projets__proj-btn');
    const themeBtnsContainer = document.querySelector('.projets__theme-btn');

    function masquerBoutons() {
        projBtnsContainer.style.display = 'none';
        themeBtnsContainer.style.display = 'none';
    }

    tousEl.addEventListener('click', function() {
        masquerBoutons();
    });

    projetsEl.addEventListener('click', function() {
        projBtnsContainer.style.display = 'flex';
        themeBtnsContainer.style.display = 'none';
        masquerContenus();
    });

    themesEl.addEventListener('click', function() {
        projBtnsContainer.style.display = 'none';
        themeBtnsContainer.style.display = 'flex';
        masquerContenus();
    });

    masquerBoutons();
});
