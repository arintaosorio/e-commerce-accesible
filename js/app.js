$('.carousel').carousel()


// Initialize Firebase
var config = {
   apiKey: "AIzaSyCR_ZiFnHz7RYhowbfNNeQ7JI1foc3CbPQ",
   authDomain: "access-80e95.firebaseapp.com",
   databaseURL: "https://access-80e95.firebaseio.com",
   projectId: "access-80e95",
   storageBucket: "",
   messagingSenderId: "300302795784"
 };
firebase.initializeApp(config);

//init
var provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){
   firebase.auth()
   .signInWithPopup(provider).
   then(function(result) {
   // This gives you a Google Access Token. You can use it to access the Google API.
   console.log(result.user);
   save(result.user);
   $('#login').hide();
   $('#picture').innerHTML = " ";

   $('#picture').append('<img width="50vh" vspace=10vh; src="'+result.user.photoURL+'" />')
});
})
   function save(user) {
       var user = {
         uid:user.uid,
         nombre:user.displayName,
         email:user.email,
         foto:user.photoURL
       }
       firebase.database().ref('venus/' + user.iud) //guarda en rama siempre que el usuario inicie sesión
       .set(user)
       }
      
       //guardar en base de datos
       $('#picture').click(function () {
       firebase.database().ref('buyer')
       .set({
         // nombre: 'prueba',
         // edad: '0',
       })
       });
      
       // //Base de datos
       // firebase.database().ref('venus')
       // .on('child_added', function(s){
       //   var user = s.val();
       //   $('#pseudo').append('<img width="50vh" vspace=10vh; src= "'+user.foto+'"/>');
       //   // document.getElementById('login').innerHTML = 'logout';
    
  

// filtro input


//    $('#search').keyup(function () {
//     var text = $(this).val().toLowerCase();
//     if(text.trim().length > 0 ){ 


//     	console.log(text==educacion.name)
     
//     }
  
// });


   // filtro2

