import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

'use strict'


//CLASSE ACTIVE

document.addEventListener('DOMContentLoaded', function() {

    const projetsButtons = document.querySelectorAll('.projets button');
  

    projetsButtons.forEach(button => {
      button.addEventListener('click', function() {

        projetsButtons.forEach(btn => btn.classList.remove('active'));

        this.classList.add('active');
      });
    });
  });
  




  // Fonction pour changer l'image aléatoire
function changeImage() {
    var avatar = document.querySelector("#random");
    var imageRandom = getRandomIntInclusive(1, 3);
    avatar.setAttribute("src", "src/assets/images/contenu/ines-tête" + imageRandom + ".png");
  }
  
  // Fonction pour obtenir un nombre entier aléatoire dans une plage donnée
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Encapsuler le code du bouton dans une fonction anonyme auto-invoquée
  (function() {
    // Sélectionnez le bouton
    var btnAvatar = document.querySelector('.a-propos__btn');
  
    // Ajoutez un gestionnaire d'événements pour le clic
    btnAvatar.addEventListener('click', function() {
      // Appelez la fonction changeImage pour changer l'image d'avatar
      changeImage();
    });
  })();







//BOUTON "TOUS" SELECTIONNE A L'OUVERTURE DE LA PAGE

  document.addEventListener('DOMContentLoaded', function() {
    var tousBtn = document.querySelector('.projets__el-tous .projets__btn');
    tousBtn.classList.add('active');


    var typeBtn = document.querySelector('.projets__el-types .projets__btn');
    var themeBtn = document.querySelector('.projets__el-themes .projets__btn');


    typeBtn.addEventListener('click', function() {

        tousBtn.classList.remove('active');
    });

    themeBtn.addEventListener('click', function() {

        tousBtn.classList.remove('active');
    });

});





//SYSTEME TRI BOUTONS

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







// FENETRE MODALE CREDITS

document.querySelector(".footer__centre .footer__el").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".footer__credits").classList.remove("hidden");
});

document.querySelector(".footer__credits #closeCredits").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".footer__credits").classList.add("hidden");
});
