
function register(email,password){
console.log("info:" + email + " " + password); 
firebase.auth().signInWithEmailAndPassword(email, password).
catch(function(error) {
  // Handle Errors here.
  console.log("Error Code: " + error.code + " Error message: " + error.message);
  var errorCode = error.code;
  var errorMessage = error.message;
});
}

$('#btn-signup').on('click',function(event){ 
    event.preventDefault();
    register($('#email').val(),$('#passwd').val());
}
);

