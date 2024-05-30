import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



'use strict'



if(document.body.classList.contains("index-body")){



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





  // CHANGER IMAGE AVATAR 

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





//SYSTEME TRI BOUTONS ET TAILLES IMAGES


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
      let gridItems = document.querySelectorAll('.projets__grid li');
      gridItems.forEach(item => {
          const img = item.querySelector('img');
          const targetClasses = img.getAttribute('data-target').split(' ');
          
          if (classe === 'tous') {
              // Réinitialise les classes si "tous" est cliqué
              item.classList.remove('scaling', 'reduced');
          } else if (targetClasses.includes(classe)) {
              item.classList.add('scaling');
              item.classList.remove('reduced');
          } else {
              item.classList.add('reduced');
              item.classList.remove('scaling');
          }
      });
  }

  // Clic sur le bouton "Tous"
  const tousBtn = document.querySelector('.projets__el-tous .projets__btn');
  tousBtn.addEventListener('click', function() {
      masquerBoutons();
      masquerContenus();
      gridItems.forEach(item => {
          item.style.transform = 'scale(1)';
          item.classList.remove('scaling', 'reduced');
      });
      ajusterTailleImages('tous'); // Ajuste les tailles des images
  });

  // Clic sur le bouton "Types"
  const typesBtn = document.querySelector('.projets__el-types .projets__btn');
  typesBtn.addEventListener('click', function() {
      typeBtnsContainer.style.display = 'flex';
      themeBtnsContainer.style.display = 'none';
      masquerContenus();
      gridItems.forEach(item => {
          item.style.transform = 'scale(1)';
          item.classList.remove('scaling', 'reduced');
      });
  });

  // Clic sur le bouton "Thèmes"
  const themesBtn = document.querySelector('.projets__el-themes .projets__btn');
  themesBtn.addEventListener('click', function() {
      typeBtnsContainer.style.display = 'none';
      themeBtnsContainer.style.display = 'flex';
      masquerContenus();
      gridItems.forEach(item => {
          item.style.transform = 'scale(1)';
          item.classList.remove('scaling', 'reduced');
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

document.addEventListener("DOMContentLoaded", function() {
  const creditsLink = document.querySelector(".footer__centre .footer__el");
  const closeCreditsBtn = document.querySelector(".footer__credits #closeCredits");
  const creditsModal = document.querySelector(".footer__credits");
  const overlay = document.querySelector(".overlay");

  creditsLink.addEventListener("click", function (e) {
      e.preventDefault();
      creditsModal.classList.remove("hidden");
      overlay.classList.remove("hidden");

      // Trigger the fade-in
      setTimeout(() => {
          creditsModal.classList.add("visible");
          overlay.classList.add("visible");
      }, 10); // small timeout to ensure the class removal is processed
  });

  closeCreditsBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Trigger the fade-out
      creditsModal.classList.remove("visible");
      overlay.classList.remove("visible");

      // Wait for the transition to end before hiding the elements
      setTimeout(() => {
          creditsModal.classList.add("hidden");
          overlay.classList.add("hidden");
      }, 500); // Duration of the fade-out transition
  });
});




 //HOVER NOTES ET CONTENU

const notesAPropos = document.querySelector('.notes__a-propos');
const notesAvatar = document.querySelector('.notes__avatar');
const notesProjets = document.querySelector('.notes__projets');
const notesPremier = document.querySelector('.notes__premier');
const notesDeuxieme = document.querySelector('.notes__deuxieme');
const notesTexte = document.querySelector('.notes__texte');
const notesImages = document.querySelector('.notes__images');


const aProposContainer = document.querySelector('.a-propos__container');
const aProposImageContainer = document.querySelector('.a-propos__img-container');
const projetContainer = document.querySelector('.projets__container');
const projetCategories = document.querySelector('.projets__categories');
const projetType = document.querySelector('.projets__type-btn');
const projetTheme= document.querySelector('.projets__theme-btn');
const projetContenu = document.querySelector('.projets__contenu');
const projetGrid = document.querySelector('.projets__grid');


notesAPropos.addEventListener('mouseover', function() {
  aProposContainer.classList.add('hovered');
});

notesAPropos.addEventListener('mouseout', function() {
  aProposContainer.classList.remove('hovered');
});

notesAvatar.addEventListener('mouseover', function() {
  aProposImageContainer.classList.add('hovered');
});

notesAvatar.addEventListener('mouseout', function() {
  aProposImageContainer.classList.remove('hovered');
});

notesProjets.addEventListener('mouseover', function() {
    projetContainer.classList.add('hovered');
  });
  
notesProjets.addEventListener('mouseout', function() {
    projetContainer.classList.remove('hovered');
  });
  
notesPremier.addEventListener('mouseover', function() {
    projetCategories.classList.add('hovered');
  });
  
notesDeuxieme.addEventListener('mouseout', function() {
    projetType.classList.remove('hovered');
    projetTheme.classList.remove('hovered');
  });
  
notesDeuxieme.addEventListener('mouseover', function() {
    projetType.classList.add('hovered');
    projetTheme.classList.add('hovered');
  });
  
notesPremier.addEventListener('mouseout', function() {
    projetCategories.classList.remove('hovered');
  });

notesTexte.addEventListener('mouseover', function() {
    projetContenu.classList.add('hovered');
  });
  
notesTexte.addEventListener('mouseout', function() {
    projetContenu.classList.remove('hovered');
  });
  
notesImages.addEventListener('mouseover', function() {
    projetGrid.classList.add('hovered');
  });
  
notesImages.addEventListener('mouseout', function() {
    projetGrid.classList.remove('hovered');
  });





//ANIMATION IMAGE INTRO

gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      trigger: ".header",
      start: "top top",
      end: "bottom+=100vh top",
      pin: true, 
    }
  })
  .fromTo(".header__image", 
    { scale: 1, borderRadius: "0px" }, 
    { scale: 0.8, ease: "none" }
  )
  .to(".header__image", 
    { borderRadius: "20px", ease: "none" }, 0);



//ANIMATION TITRE 

document.addEventListener("DOMContentLoaded", () => {
  const texteContainer = document.querySelector(".a-propos__titre");
  const words = texteContainer.innerHTML.split(" ").map(word => `<span>${word}</span>`).join(" ");
  texteContainer.innerHTML = words;

  const spans = document.querySelectorAll(".a-propos__titre span");

  gsap.set(spans, { opacity: 0, y: 20 });

  gsap.to(spans, {
    scrollTrigger: {
      trigger: ".a-propos__titre",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    stagger: 0.1,
    ease: "power2.out",
    duration: 0.8
  });
});

}



