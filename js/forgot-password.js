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
        $this.removeClass('animated bounce error');
      }, 2000);
    }
    else {
      var auth = firebase.auth();

      auth.sendPasswordResetEmail(email).then(function() {
      // Email sent.
      $this.addClass('loading');
      $this.addClass('ok');
      $state.html('Email sent!');
      setTimeout(function() {
        $state.html('Reset password');
        $this.removeClass('ok loading'); //first remove class loading then ok
        }, 2000);
      console.log("email sent")
      }).catch(function(error) {
      // An error happened
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      
      if (errorCode == 'auth/invalid-email') {
        //Invalid email
        $this.addClass('animated bounce error');
        $state.html('Invalid email!');
        setTimeout(function() {
          $state.html('Reset password');
          $this.removeClass('animated bounce error');
        }, 2000);
      } else if (errorCode == 'auth/user-not-found') {
        //User not found
        $this.addClass('animated bounce error');
        $state.html('User not found!');
        setTimeout(function() {
          $state.html('Reset password');
          $this.removeClass('animated bounce error');
        }, 2000);
      } else if (errorCode == 'auth/internal-error') {
        $this.addClass('animated bounce error');
        $state.html('Interal server error!');
        setTimeout(function() {
          $state.html('Reset password');
          $this.removeClass('animated bounce error');
        }, 2000);
      }
      });
    }
  });
});