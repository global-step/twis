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
    $('.members').addClass('elementary-show').removeClass('secretary-show').removeClass('teacher-show')
  })

  $('.teacher .scrollDown').click(function(){
    $(this).parent().addClass('open')
    $('.elementary, .secretary').removeClass('open')
    $('.members').addClass('teacher-show').removeClass('secretary-show').removeClass('elementary-show')
  })

  $('.secretary .scrollDown').click(function(){
    $(this).parent().addClass('open')
    $('.teacher, .elementary').removeClass('open')
    $('.members').addClass('secretary-show').removeClass('teacher-show').removeClass('elementary-show')
  })

  $('#select').change(function(){
    $('.members').removeClass('secretary-show').removeClass('teacher-show').removeClass('elementary-show')
    $('.members').addClass(this.value + '-show')
  })

}); //eo:doc ready
 