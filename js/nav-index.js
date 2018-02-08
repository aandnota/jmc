$(document).ready(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 50) {
      $('.nav-span').css({
        'display': 'none'
      }),
      $('#nav-small').load("pages/nav/nav-index.html .nav-span-small"),
      $('#nav-small').css({
        'display':'inline',
        'position': 'fixed',
        'z-index':'3',
        'width':'100vw'
      });
    } else {
      $('.nav-span').css({
        'display':'inline',
        'position':'fixed',
        'width' : '100vw',
        'height':'6vw',
        'background-color':'transparent',
        'background-position': 'center -215px',
        'background-repeat':'no-repeat',
        'padding-bottom':'1rem'
      }),
      $('#nav-small').css({
        'display':'none'
      });
    }
  });
});
