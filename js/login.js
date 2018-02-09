//If user already logged redirect
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'index.html';
  }
});

$(document).ready(function() {

  $('.login').on('submit', function(e) {
    e.preventDefault();

    var email = $("#email").val();
    var password = $("#password").val();

    var $this = $(this),
    $state = $this.find('button > .state');
  
    if (email == '' || password == '') {
      //Fields are empty, do something
      $this.addClass('animated bounce error');
      $state.html('Missing username or password!');
      setTimeout(function() {
      $state.html('Log in');
        $this.removeClass('animated bounce error loading');
       }, 2000);
    }
    else {
      $this.addClass('loading');
      $state.html('Loading');    
      //Firebase Login
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var isSuccessful = false;

      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode == 'auth/invalid-email') {
        //Invalid email
        $this.removeClass('loading');
        $this.addClass('animated bounce error');
        $state.html('Invalid email');
        setTimeout(function() {
          $state.html('Log in');
          $this.removeClass('animated bounce error loading');
        }, 2000);
      }
      else if (errorCode == 'auth/user-not-found' || 'auth/wrong-password') {
        //Error animation
        $this.removeClass('loading');
        $this.addClass('animated bounce error');
        $state.html('Wrong username or password!');
        setTimeout(function() {
          $state.html('Log in');
          $this.removeClass('animated bounce error loading');
        }, 2000);
      } else if (errorCode == 'auth/internal-error') {
        $this.addClass('animated bounce error');
        $state.html('Interal server error!');
        setTimeout(function() {
          $state.html('Log in');
          $this.removeClass('animated bounce error');
        }, 2000);
      }
    });
    }
  });
});