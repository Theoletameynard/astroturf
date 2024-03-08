console.log("welcome to astroturf world 🖖");

$("#artists, #pro, #contact").hide();

$("#background-video, h1, #content").click(function(){
  //$("#artists, #pro, #contact").hide();
  showDiv(null);
});

$("p, form").click(function(e){
  if (!e) var e = window.event;
  e.cacenlBubble = true;
  e.stopPropagation();
});


function showDiv(id,e){
  $("#artists, #pro, #contact").hide();
   if (!e) var e = window.event
    e.cancelBubble = true;
  e.stopPropagation();
 
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
