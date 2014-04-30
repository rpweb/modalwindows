//all about triggering

$(document).ready(function(){
  //navigation
  $('nav li:not(:first-child) a').click(function() {
    //reset cube class
    $('.cube div').removeClass(function() {
      return $( this ).attr( "class" );
    });

    //set cube class show-* out of attribute data-nav
    $('.cube div').addClass($(this).attr('data-nav'));

    //opening window
    $('.bgshadow, .window').addClass('appear');
    $('.content').addClass('show-'+$(this).attr('data-nav'));

    //set nav link shining effect
    $(this).addClass('active');
  });

  //toggle cube
  $('nav li:first-child a').click(function() {
    $(this).toggleClass('_active');
    if(!$('.cube').hasClass('appear')){
      $('.cube').addClass('appear');
      $('.cube').removeClass('disappear');
    }else{
      $('.cube').removeClass('appear');
      $('.cube').addClass('disappear');
    }
  });

  //closing window
  $('.bgshadow, .close a').click(function() {
    $('.bgshadow, .window').removeClass('appear');
    $('.content').removeClass('show-'+$('.active').attr('data-nav'));
    //remove nav link shining effect
    $('nav li:not(:first-child) a.active').removeClass('active');
  });
});