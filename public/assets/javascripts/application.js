// Document Ready
$( document ).ready(function() {

  $('.contact-semi').click(function(){
    $(this).toggleClass('open');
  })

  $('.hamburger').click(function(){
    $(this).toggleClass('open');
  })

  $('footer h5').click(function(){
    $(this).parent().parent().parent().toggleClass('open')
  })

  $('.nav-item > p').click(function(){
    $(this).parent().toggleClass('open');
  })

  $('#ja').click(function(){
    $(this).addClass('hide')
    $('#en').removeClass('hide')
  })

  $('#en').click(function(){
    $(this).addClass('hide')
    $('#ja').removeClass('hide')
  })

  $('.scrollDown').click(function(){
    var heroHeight = $('.hero').css('height')
    var heroHeight = parseInt(heroHeight) - 120;
    $("html, body").animate({ scrollTop: heroHeight.toString() + "px" }, "slow");
  })

  $('.offer-1, .offer-2').click(function(){
    $(this).toggleClass('open');
  })

}); //eo:doc ready
 