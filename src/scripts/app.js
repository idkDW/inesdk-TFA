import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

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
    const typeBtnsContainer = document.querySelector('.projets__type-btn');
    const themeBtnsContainer = document.querySelector('.projets__theme-btn');
    const contenuItems = document.querySelectorAll('.projets__contenu-item');

    function masquerContenus() {
        contenuItems.forEach(item => {
            item.style.display = 'none';
        });
    }

    function afficherContenu(contenuClass) {
        masquerContenus();
        const contenu = document.querySelector(`.projets__contenu-item.${contenuClass}`);
        if (contenu) {
            contenu.style.display = 'block';
        }
    }

    function masquerBoutons() {
        typeBtnsContainer.style.display = 'none';
        themeBtnsContainer.style.display = 'none';
    }

    // Clic sur le bouton "Tous"
    const tousBtn = document.querySelector('.projets__el-tous .projets__btn');
    tousBtn.addEventListener('click', function() {
        masquerBoutons();
        masquerContenus();
    });

    // Clic sur le bouton "Types"
    const typesBtn = document.querySelector('.projets__el-types .projets__btn');
    typesBtn.addEventListener('click', function() {
        typeBtnsContainer.style.display = 'flex';
        themeBtnsContainer.style.display = 'none';
        masquerContenus();
    });

    // Clic sur le bouton "Thèmes"
    const themesBtn = document.querySelector('.projets__el-themes .projets__btn');
    themesBtn.addEventListener('click', function() {
        typeBtnsContainer.style.display = 'none';
        themeBtnsContainer.style.display = 'flex';
        masquerContenus();
    });

    // Clic sur les boutons de type
    const typeBtns = document.querySelectorAll('.projets__type-btn .type-btn button');
    typeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = btn.getAttribute('data-target');
            afficherContenu(target);
        });
    });

    // Clic sur les boutons de thème
    const themeBtns = document.querySelectorAll('.projets__theme-btn .theme-btn button');
    themeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = btn.getAttribute('data-target');
            afficherContenu(target);
        });
    });

    masquerBoutons();
    masquerContenus();
});
