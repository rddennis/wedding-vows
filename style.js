$("document").ready(function(){
	var screenWidth = $(window).width();

	if (screenWidth <= 800) {
		if ($("#content-container").hasClass("web")) {
			$("#content-container").removeClass("web");
			$("i").css("display", "none");
		} else {
			if (!($("#content-container").hasClass("web"))) {
				$("#content-container").addClass("web")
			};
		}};

	$(window).on("resize", function(){

		var screenWidth = $(window).width();

		if (screenWidth <= 800) {

			$("i").css("display", "none");

			if ($("#content-container").hasClass("web")) {
				$("#content-container").removeClass("web");
				
			}
		  } else {
				if (!($("#content-container").hasClass("web"))) {
					$("i").css("display", "block");

					$("#content-container").addClass("web");
				};
			};
		})

	$("#more-info, #nav-icon").click(function(){
		if ($("#content-container").hasClass("web")){
			$("#content-container").slideToggle(1000);
			$("i", this).toggleClass("fa-bars fa-times");
			} else {
			$("html, body").animate(
				{scrollTop: $("#content-container").offset().top}, 1000);
		};
	});

	$("#more-info").click(function(){
		if ($("i").hasClass("fa-bars") && ($(window).width() >= 800)) {
			$("i").removeClass("fa-bars");
			$("i").addClass("fa-times");
		}
	});

});
