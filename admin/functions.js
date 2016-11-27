function isLoggedIn(){
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      console.log('Logged')
    // User is signed in.
  }
  else{
      console.log('Not LoggedIn');
      window.location.href = "/signin/";
  }
});
}

function logOut(){
    firebase.auth().signOut()
    .then(function(result){
        console.log("Logged Out:" + result);
    })
    .catch(function(error){
        // Handle Errors here.
        console.log("Error Code: " + error.code + " Error message: " + error.message);
    });
}
