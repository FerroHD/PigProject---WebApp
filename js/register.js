$(document).ready(function() {

  $('.login').on('submit', function(e) {
    e.preventDefault();

    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();
    var confirm_email = $("#confirm_email").val();
    var password = $("#password").val();
    var confirm_password = $("#confirm_password").val();
    
    var $this = $(this),
    $state = $this.find('button > .state');
  
    if (first_name == '' || last_name == '' || email == '' || confirm_email == '' || password == '' || confirm_password == '') {
      //Fields are empty
            $this.addClass('animated bounce error');
            $state.html('Fill all the fiels!');
            setTimeout(function() {
              $state.html('Register');
              $this.removeClass('animated bounce error');
            }, 2000);
    }
    else if (email != confirm_email) {
      //Emails doesn't match
      $this.addClass('animated bounce error');
            $state.html('Emails does not match!');
            setTimeout(function() {
              $state.html('Register');
              $this.removeClass('animated bounce error');
            }, 2000);
    }
    else if (password != confirm_password) {
      //Passwords doesn't match
      $this.addClass('animated bounce error');
            $state.html('Password does not match!');
            setTimeout(function() {
              $state.html('Register');
              $this.removeClass('animated bounce error');
            }, 2000);
    }
    else {
      //Everything is fine, register the new user
    }
  });
});