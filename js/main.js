//Add js for keeping track of current year in footer

$(document).ready(function(){
	var year = new Date(); //gets the current date
	$('nav').hide();
	$('#currentYear').text(year.getFullYear()); //sets current year in footer
});

$('#signInBtn').click(function(){
		$('nav').slideToggle('slow'); //animate signIn form
	});


//Database code:

Parse.initialize("ivRkO4ESdsZ7LS03mBbux8cQseV4hlKCUC9vnNlX", "KOJOvChPgm4I06kGcb7rjsu45S9BP8oedZWheMld");

$("#submit").click(function() {

        var username = $("#username").val();
        var password = $("#userpassword").val();

        console.log(username +' '+ password);
    
        Parse.User.logIn(username, password, {
          success: function(user) {
          	alert('Logged In!');
            console.log('success');          
          },
          error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
                console.log('signup failed');
          	}
          });
    });

$("#pop").click(function() {

	var newusername = $("#newname").val();
		newpassword = $("#newpass").val();
		email = $("#newemail").val();

	if (newusername === "") {
        alert("Type in your new Username!");
    }

	else if (newpassword === "") {
		alert("Type in your new Password!");
	}

	else if (email === "") {
		alert("Type in your new Email!");
	}

	else {
		register();
	}

	function register(){
		
	var newusername = $("#newname").val();
		newpassword = $("#newpass").val();
		email = $("#newemail").val();

		var user = new Parse.User();
            user.set("username", newusername);
            user.set("password", newpassword);
            user.set("email", email);
              
            user.signUp(null, {
              success: function(user) {
                alert('You have been signed up!');
                console.log("Signed Up!!")
              },
              error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
                console.log('signup failed');
              }
            });
	}
});