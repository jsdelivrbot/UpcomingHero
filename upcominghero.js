$(document).ready(function(){
	console.log("UpcomingHero succesfully loaded!");

	var i = 0;
	var currentUser = "";

	$('body').on('DOMNodeInserted', 'div.text', function () {
		var msg = getChatMessage($(this));
		var user = getChatUser($(this));
		console.log("Message: "+msg);
		console.log("User: "+user);
	});

	function getChatMessage(msg){
		var amsg = msg;
		var amsghtml = amsg.html(); //Message
		return amsghtml;
	}
	function getChatUser(user){
		var user = user;
		if(user.children().children(".username").html()){
			currentUser = user.children().children(".username").html();
			return user.children.children().(".username").html();
		}else{
			return currentUser;
		}
	}
})
