$(document).ready(function() {

 var currentScreen = $('.screen.shown');

 $('body').on('click', '.switch-button', function(e){
  var $el = $(e.target);
  if(!$el.is('a')){
   $el = $el.parents('a.switch-button');
  }
  var $newEl = $($el.attr('href'));
     currentScreen.removeClass('shown');
     currentScreen = $newEl;
     currentScreen.addClass('shown');

 });
});
