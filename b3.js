$(document).ready(function(){
  $("#bu1").click(function(){
    $("div").css("background-color", "red");
  });
  $("#bu2").click(function(){
    $("div").css("border-radius", "50px");
  });
  $("#bu3").click(function(){
    $( document.body ).append( $( "<div>" ) );
    $("div").css({
    "width": "30px",
    "border": "5px solid green",
    "margin": "50px 0 0 10px",
    "float": "left",
    "padding": "30px",
   "display":"inline-block"
    });
  });
});
