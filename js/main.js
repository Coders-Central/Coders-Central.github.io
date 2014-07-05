//Add js for keeping track of current year in footer


$(document).ready(function(){
	$('nav').hide();
	$('#signInBtn').click(function(){
		$('nav').slideToggle('slow');
	});
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
            /*function error() {
                $('input').addClass('error');

                $('input').click(function(){
                    $(this).removeClass('error');
                });
            };*/
            //error();
            console.log('failed!');
            alert('Error!');
          }
        });
    });