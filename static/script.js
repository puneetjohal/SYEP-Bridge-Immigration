var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function scrollToElement (obj) {
  $('html, body').animate({
    scrollTop: obj.offset().top
  }, 2000);
};

$(document).on('click', 'a', function () {
  scrollToElement($(this));
});
