$(document).ready(function() {

    /* Retrieving an element's text */

    //You can find any DOM element and it's text using this syntax:
    // text() is a method offered by jQuery
    console.log($("h1").text()); //returns "jQuery Basics"

    //text() allows you to modify the text node

    $("h1").text("jQuery: dsfsdfsdf")

  console.log($("h1").text()); //returns "jQuery Basics"
    //console.log();
    //console.log($("h1").attr("i have chaned"));

});
