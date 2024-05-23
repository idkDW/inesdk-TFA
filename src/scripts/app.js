import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

'use strict'






//CLASSE ACTIVE

  document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les boutons
    const projetsCategoriesButtons = document.querySelectorAll('.projets__categories button');
    const projetsTypeButtons = document.querySelectorAll('.projets__type-btn button, .projets__theme-btn button');

    // Ajouter la classe active au bouton "tous" par défaut
    const defaultButton = document.querySelector('.projets__el-tous .projets__btn');
    if (defaultButton) {
        defaultButton.classList.add('active');
    }

    // Ajouter un gestionnaire d'événements pour les boutons de catégories
    projetsCategoriesButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Supprimer la classe active de tous les boutons de catégories
            projetsCategoriesButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
        });
    });

    // Ajouter un gestionnaire d'événements pour les boutons de type et de thème
    projetsTypeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Supprimer la classe active des boutons de type et de thème
            projetsTypeButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
        });
    });
});





  // Fonction pour changer l'image aléatoire

document.addEventListener("DOMContentLoaded", function() {
  var currentImageIndex = 1;
  var totalImages = 3; // Total number of images

  // Fonction pour changer l'image séquentiellement
  function changeImage() {
      var avatar = document.querySelector(".a-propos__img");
      if (avatar) {
          currentImageIndex++;
          if (currentImageIndex > totalImages) {
              currentImageIndex = 1;
          }
          avatar.setAttribute("src", "assets/images/contenu/intro/ines-tête" + currentImageIndex + ".png");
      } else {
          console.error("L'élément avec la classe 'a-propos__img' n'a pas été trouvé.");
      }
  }

  // Encapsuler le code du bouton dans une fonction anonyme auto-invoquée
  (function() {
      // Sélectionnez le bouton
      var btnAvatar = document.querySelector('.a-propos__btn');

      // Ajoutez un gestionnaire d'événements pour le clic
      if (btnAvatar) {
          btnAvatar.addEventListener('click', function() {
              // Appelez la fonction changeImage pour changer l'image d'avatar
              changeImage();
          });
      } else {
          console.error("Le bouton avec la classe 'a-propos__btn' n'a pas été trouvé.");
      }
  })();
});







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




/*
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

*/


document.addEventListener("DOMContentLoaded", function() {
    const typeBtnsContainer = document.querySelector('.projets__type-btn');
    const themeBtnsContainer = document.querySelector('.projets__theme-btn');
    const gridItems = document.querySelectorAll('.projets__grid-item');
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

    function ajusterTailleImages(classe) {
        console.log("Fonction ajusterTailleImages appelée avec la classe :", classe);
        let gridItems = document.querySelectorAll('.projets__grid li');
        console.log(gridItems);
        gridItems.forEach(item => {
            console.log(item)
            const img = item.querySelector('img'); // Sélectionnez l'élément img à l'intérieur de chaque élément grid-item
            const targetClasses = img.getAttribute('data-target').split(' '); // Récupérez les classes cibles à partir de l'attribut data-target
            console.log("Classes cibles de l'image :", targetClasses);
            if (targetClasses.includes(classe)) {
                console.log("scaling")
                item.classList.add('scaling'); // Ajoutez la classe pour appliquer le scaling
            } else {
                item.classList.remove('scaling'); // Supprimez la classe pour rétablir la taille normale de l'image
            }
        });
    }
    
    

    // Clic sur le bouton "Tous"
    const tousBtn = document.querySelector('.projets__el-tous .projets__btn');
    tousBtn.addEventListener('click', function() {
        masquerBoutons();
        masquerContenus();
        gridItems.forEach(item => {
            item.style.transform = 'scale(1)'; // Rétablit la taille normale de toutes les images
        });
    });

    // Clic sur le bouton "Types"
    const typesBtn = document.querySelector('.projets__el-types .projets__btn');
    typesBtn.addEventListener('click', function() {
        typeBtnsContainer.style.display = 'flex';
        themeBtnsContainer.style.display = 'none';
        masquerContenus();
        gridItems.forEach(item => {
            item.style.transform = 'scale(1)'; // Rétablit la taille normale de toutes les images
        });
    });

    // Clic sur le bouton "Thèmes"
    const themesBtn = document.querySelector('.projets__el-themes .projets__btn');
    themesBtn.addEventListener('click', function() {
        typeBtnsContainer.style.display = 'none';
        themeBtnsContainer.style.display = 'flex';
        masquerContenus();
        gridItems.forEach(item => {
            item.style.transform = 'scale(1)'; // Rétablit la taille normale de toutes les images
        });
    });

    // Clic sur les boutons de type
    const typeBtns = document.querySelectorAll('.projets__type-btn .type-btn button');
    typeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = btn.getAttribute('data-target');
            ajusterTailleImages(target);
            afficherContenu(target);
        });
    });

    // Clic sur les boutons de thème
    const themeBtns = document.querySelectorAll('.projets__theme-btn .theme-btn button');
    themeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = btn.getAttribute('data-target');
            ajusterTailleImages(target);
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
  document.querySelector(".overlay").classList.remove("hidden");
});

document.querySelector(".footer__credits #closeCredits").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".footer__credits").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});


  




gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    trigger: ".intro",
    start: "top top",
    end: "bottom+=100vh top",
    pin: true,
    markers: true,  
  }
})
.fromTo(".intro__image", 
  { scale: 1 }, 
  { scale: 0.8, ease: "none" }
);
