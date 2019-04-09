$(function() {
  // shows the "X" icon
  $('#bs-example-navbar-collapse-1')
    .on('shown.bs.collapse', function() {
      $('#navbar-hamburger').addClass('hidden');
      $('#navbar-close').removeClass('hidden');
    })
    // shows the hamburger icon
    .on('hidden.bs.collapse', function() {
      $('#navbar-hamburger').removeClass('hidden');
      $('#navbar-close').addClass('hidden');
    });

});
