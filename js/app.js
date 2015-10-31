$(document).ready(function(){
	$('#tweet-content .tweet-compose').on('click', function(){
		$(this).css("height", "5em");
		$('#tweet-controls #tweet-submit, #tweet-controls #char-count').css("display", "inline-block");
	});

	$("#tweet-content .tweet-compose").keyup(function(){
		var max = 140;
		var length = $(this).val().length;
		var length = max - length;
		$("#char-count").text(length);
		if (length <= 10 && (length > 0)){
			$("#char-count").css("color", "red");
			$('#tweet-controls #tweet-submit').prop('disabled', false);
		} else if (length < 0) {
			$("#char-count").css("color", "red");
			$('#tweet-controls #tweet-submit').prop('disabled', true);
		} else {
			$("#char-count").css("color", "#999");
			$('#tweet-controls #tweet-submit').prop('disabled', false);
		}
	});

	$("#tweet-controls #tweet-submit").on("click", function(){	
		$('#stream').prepend(
			"<div class='tweet'>" +
				"<div class='content'>" +
					"<img class='avatar' src='img/damenleeturks.jpg' />" +
					"<strong class='fullname'>My BFF </strong>" +
					"<span class='username'> @mybff</span>" +
					"<p class='tweet-text'>"+ $("#tweet-content .tweet-compose").val() +"</p>" +
					"<div class='tweet-actions'>" +
						"<ul>" +
							"<li><span class='icon action-reply'></span> Reply</li>" +
							"<li><span class='icon action-retweet'></span> Retweet</li>" +
							"<li><span class='icon action-favorite'></span> Favorite</li>" +
							"<li><span class='icon action-more'></span> More</li>" +
						"</ul>" +
					"</div>" +
					"<div class='stats'>" +
						"<div class='retweets'>" +
							"<p></p>" +
							"<p>RETWEETS</p>" +
						"</div>" +
						"<div class='favorites'>" +
							"<p class='num-favorites'></p>" +
							"<p>FAVORITES</p>" +
						"</div>" +
						"<div class='users-interact'>" +
							"<div>" +
								"<img src='img/alagoon.jpg' />" +
								"<img src='img/vklimenko.jpg' />" +
							"</div>" +
						"</div>" +
						"<div class='time'>" +
							"1:04 PM - 19 Sep 13" +
						"</div>" +
					"</div>" +
					"<div class='reply'>" +
						"<img class='avatar' src='img/alagoon.jpg' />" +
						"<textarea class='tweet-compose' placeholder='Reply to @mybff'/></textarea>" +
					"</div>" +
				"</div>" +
			"</div>" 
			);
	$("#tweet-content .tweet-compose").attr("placeholder", "Compose new Tweet...").val("");
	});

// step 6/////////////////////////////////////////////////////////////
	$("#stream").on("mouseenter", ".tweet", function(){
		$(this).find(".tweet-actions li").css("visibility", "visible");
	});

	$("#stream").on("mouseleave", ".tweet", function (){
		$(this).find(".tweet-actions li").css("visibility", "hidden");
	});
	////////////////////////////////////////////////////////////////////////

	$("#stream").on("click", ".tweet", function(){
		$(this).find(".stats").css("height", "69px");
		$(this).find(".users-interact, .retweets, .favorites").css("height", "45px").css("display", "inline-block").css("float", "left").css("visibility", "visible");
		$(this).find(".users-interact").css("padding-top", "2px");
		$(this).find(".time").css("height", "23px").css("visibility", "visible");
		$(this).find(".users-interact img").css("height", "32px").css("visibility", "visible");
	});

});














