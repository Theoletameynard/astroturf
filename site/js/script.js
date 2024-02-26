console.log("hello world");

$("#artists, #pro, #contact").hide();

function showDiv(id){
$("#artists, #pro, #contact").hide();
    $(id).is(":visible") ?
        $(id).hide() :
        $(id).show();
}


/*
/*

  // Sélectionnez l'élément du logo
      const logo = document.querySelector('.logo');

// Sélectionnez l'élément du logo avec le lien
const logoLink = document.querySelector('.logo-link');

// Ajoutez un écouteur d'événements pour le clic sur le logo
logoLink.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien (navigation)
  // Redirigez l'utilisateur vers la page d'accueil (ou la page souhaitée)
    window.location.href = 'index.html'; // Assurez-vous de spécifier le chemin correct
});



document.querySelectorAll('.title-link').forEach(link => {
    link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    if (href === './contact/') {
// Ne rien faire, laisser le comportement par défaut du lien s'effectuer
// e.preventDefault() et la logique AJAX sont retirés
    } else if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        toggleContent(targetId);
    }
    });
});

function toggleContent(targetId) {
    document.querySelectorAll('.overlay-content').forEach(content => {
    content.classList.remove('show');
    });
    document.getElementById(targetId).classList.add('show');
    document.getElementById('maVideo').classList.add('blur-video');
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.overlay-titles') && !e.target.closest('.overlay-content')) {
    document.querySelectorAll('.overlay-content').forEach(content => {
        content.classList.remove('show');
    });
    document.getElementById('maVideo').classList.remove('blur-video');
    }
});
*/
