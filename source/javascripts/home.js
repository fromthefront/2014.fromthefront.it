//= require jquery/dist/jquery
//= require Snap.svg/dist/snap.svg-min

//= require app





// animate helix w/ snap.svg
var helix = Snap.select('#helix');
// helix events
helixAnimation();
  // Infinite animation for the helix
  function helixAnimation(){
    helix.stop().animate(
      { transform: 'r360,135,47'},
      400, // timing

      function(){
        helix.attr({ transform: 'rotate(0 135 47)'}); // reset
        helixAnimation(); // repeat
      }
    );
  }


