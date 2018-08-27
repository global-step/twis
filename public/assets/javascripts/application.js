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
    var heroHeight = $('header + div').css('height')
    var heroHeight = parseInt(heroHeight) - 120;
    $("html, body").animate({ scrollTop: heroHeight.toString() + "px" }, "slow");
  })

  $('.offer-1, .offer-2').click(function(){
    $(this).toggleClass('open');
  })

  $('.elementary .scrollDown').click(function(){
    $(this).parent().addClass('open')
    $('.teacher, .secretary').removeClass('open')
    $('.members').addClass('elementaries').removeClass('secretaries').removeClass('teachers')
  })

  $('.teacher .scrollDown').click(function(){
    $(this).parent().addClass('open')
    $('.elementary, .secretary').removeClass('open')
    $('.members').addClass('teachers').removeClass('secretaries').removeClass('elementaries')
  })

  $('.secretary .scrollDown').click(function(){
    $(this).parent().addClass('open')
    $('.teacher, .elementary').removeClass('open')
    $('.members').addClass('secretaries').removeClass('teachers').removeClass('elementaries')
  })

}); //eo:doc ready
 