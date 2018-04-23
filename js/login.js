// Initialize Firebase
function inicializarFirebase(){
    var config = {
      apiKey: "AIzaSyCybx-su5N2l6KJIABoKtpVdYitupRbMAs",
      authDomain: "ecommerce-acc.firebaseapp.com",
      databaseURL: "https://ecommerce-acc.firebaseio.com",
      projectId: "ecommerce-acc",
      storageBucket: "ecommerce-acc.appspot.com",
      messagingSenderId: "518854600534"
    };
    firebase.initializeApp(config);
  }
    var provider = new firebase.auth.GoogleAuthProvider();
    
    $('#login').click(function() {
      firebase.auth()
        .signInWithPopup(provider)
        .then(function(result) {
          console.log(result.user);
  
          $('#login').hide();
          $('#photo').append("<img width='50px' src='" + result.user.photoURL + "''/>");
          $('#name').append(result.user.displayName);
          $('#email').append(result.user.email);
        })
    });
  
  
    window.load = inicializar;
    
    function inicializar() {
    
      inicializarFirebase();
    
    }