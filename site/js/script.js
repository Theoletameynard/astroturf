console.log("hello world");

$("#artists, #pro, #contact").hide();

$("#background-video, h1").click(function(){
  //$("#artists, #pro, #contact").hide();
  showDiv(null);
});

function showDiv(id){
  $("#artists, #pro, #contact").hide();
 
  if(id == "#contact") {
    $("h1, nav, #content").addClass("blendy");
  }
  else {
    $("h1, nav, #content").removeClass("blendy");
  }

  $(id).is(":visible") ?
    $(id).hide() :
    $(id).show();

  $(id).is(":visible") ?
    $("#background-video").css({
      'filter'         : 'blur(30px)',
      '-webkit-filter' : 'blur(30px)',
      '-moz-filter'    : 'blur(30px)',
      '-o-filter'      : 'blur(30px)',
      '-ms-filter'     : 'blur(30px)',
      'opacity'		:'0.6'
    }):
    $("#background-video").css({
      'filter'         : 'blur(0px)',
      '-webkit-filter' : 'blur(0px)',
      '-moz-filter'    : 'blur(0px)',
      '-o-filter'      : 'blur(0px)',
      '-ms-filter'     : 'blur(0px)',
      'opacity'		:'1'
    });
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
