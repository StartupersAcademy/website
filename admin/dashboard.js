(function () {
$( document ).ready(function() {
    console.log( "ready!" );
    isLoggedIn();
});
$( "#page-wrapper" ).load( "/admin/views/dash.html", function() {
  console.log( "Load was performed." );
});

// Getting user info
var accesstoken = "3bed848d906327857d88aa398da9cf0335cdec2eb4ee3360b85829045ba548b2";

$('#logOutBut').on('click',function(event){
  event.preventDefault();
  logOut();
}
);

})();