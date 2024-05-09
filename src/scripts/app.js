'use strict'

document.addEventListener("DOMContentLoaded", function() {
    const projetsEl = document.querySelectorAll('.projets__el');
    const projBtns = document.querySelector('.projets__proj-btn');
    const themeBtns = document.querySelector('.projets__theme-btn');
  
    projetsEl.forEach(el => {
      el.addEventListener('click', function() {
        // On vérifie quel élément a été cliqué
        if (el.textContent.trim() === 'PROJETS') {
          projBtns.style.display = 'flex';
          themeBtns.style.display = 'none';
        } else if (el.textContent.trim() === 'THÈMES') {
          projBtns.style.display = 'none';
          themeBtns.style.display = 'flex';
        }
      });
    });
  });
  