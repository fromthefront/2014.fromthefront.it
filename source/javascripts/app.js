
$(document).ready(function() {
    $('html').removeClass('no-js');
    $('html').addClass('js ready');
});

// topbar toggle
var toggle = $('#top-bar__toggle'),
    topbar = $('#top-bar');

    toggle.on('click', function(){
        topbar.toggleClass('top-bar--open');
    });


// autoscroll for Speaker Nav
// var target = $('.speaker-nav__item--active');

// if(target.length > 0) {
//   $(function(){
//       var targetWidth = target.width(),
//           targetOffset = target.offset().left,
//           targetPosition = targetOffset - (targetWidth * 1);
//       $('.speaker-nav').scrollLeft(targetPosition);
//   });  
// }    






