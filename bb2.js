$(document).ready(function(){
  $("#but1").click(function(){
    var res=$("#text1").val();
  //  console.log("sadadasd");
    //console.log( "sdfsdfsdf"+  $("#menu"));
    $("ul").append("<li>"+res+"</li>");
  });
});
