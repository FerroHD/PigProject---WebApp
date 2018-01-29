$(document).ready(function() {

  $('.login').on('submit', function(e) {
    e.preventDefault();

    var email = $("#email").val();
    var $this = $(this),
    
    $state = $this.find('button > .state');
  
    if (email == '') {
      //Fields are empty, do something
            $this.addClass('animated bounce error');
            $state.html('Email field empty!');
            setTimeout(function() {
              $state.html('Reset password');
              $this.removeClass('animated bounce error loading');
            }, 2000);
    }
    else {
      //Query DB and reset pws
      //Send pws via email
    }
  });
});