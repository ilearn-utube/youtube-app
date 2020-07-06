$(document).ready(function(){
	// $(".img-small-thumbnail").mouseenter(function(){
	// 	$(this).addClass("animate__animated animate__pulse");
	// });

	// $(".img-small-thumbnail").mouseout(function(){
	// 	$(this).removeClass("animate__animated animate__pulse");
	// });

	$(".media").mouseover(function(){
		$(this).addClass("animate__animated animate__pulse");
	});

	$(".media").mouseout(function(){
		$(this).removeClass("animate__animated animate__pulse");
	});


	$(".media").click(function(){

		var title = $(this).contents().find('h6').text();
		var descrption = $(this).contents().find('p').text();	

		$("#youtube_video_title").text(title);
		$("#youtube_paragh_des").text(descrption);			
	});

})