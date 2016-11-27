
function signin(email,password){
console.log("info:" + email + " " + password); 
firebase.auth().signInWithEmailAndPassword(email, password)
.then(function(result){
    console.log("Correcto:" + result);
    window.location.href = "/dashboard/";
}
)
.catch(function(error) {
  // Handle Errors here.
  console.log("Error Code: " + error.code + " Error message: " + error.message);
  var errorCode = error.code;
  var errorMessage = error.message;
});
}

$('#btn-login').on('click',function(event){ 
    event.preventDefault();
    signin($('#login-username').val(),$('#login-password').val());
}
);

