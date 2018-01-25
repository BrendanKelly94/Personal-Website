$(document).ready(function(){
  var offset = 50;
  $('#spy').scrollspy();
  $('.sections').click(function() {
    console.log($(this).attr("href"));
    $('html, body').animate({
    scrollTop: ($(($(this).attr("href"))).offset().top)
  },750);
  });

});
