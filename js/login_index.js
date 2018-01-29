$(document).ready(function() {
  $('.login').on('submit', function(e) {
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    var $this = $(this),
    $state = $this.find('button > .state');
  
    if (username == '' || password == '') {
      //Fields are empty, do something
            $this.addClass('animated shake error');
            $state.html('Empty form');
            setTimeout(function() {
              $state.html('Log in');
              $this.removeClass('animated shake error');
            }, 2000);
    }
    else {

      $this.addClass('loading');
      $state.html('Authenticating');

      $.post("login_script.php", { username1: username, password1: password},
      function(data) {
        if (data == 'wrong_email_or_password') {
          //Wrong username or password
          setTimeout(function() {
            $this.addClass('error');
            $state.html('Wrong username or password');
            setTimeout(function() {
              $state.html('Log in');
              $this.removeClass('error loading'); //first remove class loading then error
            }, 4000);
          }, 3000);
        }
        else if (data == 'successful_login') {
          //Successful login
          //Redirect to control panel
          setTimeout(function() {
            $this.addClass('ok');
            $state.html('Welcome back!');
            setTimeout(function() {
              $state.html('Log in');
              $this.removeClass('ok loading'); //first remove class loading then ok
            }, 4000);
          }, 3000);
        }
        else {
          //Something went horribly wrong...
          alert('Something went wrong');
       };
      })
    }
  });
});