$( document ).ready(function() {
  $('.search__help').click(function(){
    $(this).toggleClass('search__help--active');
    $('.search__info').toggleClass('fadeIn');
  }); /*end click search__help*/

  $('.search__close').click(function(){
    $('.search__info').toggleClass('fadeIn');
    $('.search__help').toggleClass('search__help--active');
  })/*end click search__close*/
});

