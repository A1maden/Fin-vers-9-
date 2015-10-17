

// КНОПКА МЕНЮ

$(document).ready(function() {


	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

 // Высчитываю высоту отноительно открытого окна

	$(".main_head_1").css("min-height", $(window).availHeight);
	$(".container").css("min-height", $(window).availHeight);
	$(".scene").css("min-height", $(window).availHeight);
	$(".top_mnu").css("min-height", $(window).availHeight);
 // Конец скрипта


});

// КОНЕЦ КНОПКА МЕНЮ

