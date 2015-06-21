// Rock Hammer by Stuff and Nonsense
// Version: <!-- $version -->
// URL: http://stuffandnonsense.co.uk/projects/rock-hammer/
// Version: <!-- $license -->

// Entry point for our JavaScript code

function rnd_std_normal() {
	return (Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1);
}

function rnd_normal(mean, stdev) {
	return Math.round(rnd_std_normal()*stdev+mean);
}

$(document).ready(function() {
	$("#heart_sprite").sprite({fps: 0, no_of_frames: 8});

	$("#trigger").click(function() {
		if ($("#trigger").hasClass("on")) {
			$("#heart_sprite").fps(0).spStop(true);
			$("#trigger").html("Start Simulation");
			$("#trigger").removeClass("on");
		} else {
			var bpm = rnd_normal(parseInt($("#mean").val()), parseInt($("#stdev").val()));
			console.log(bpm);
			$("#heart_sprite").fps(bpm / 15.0);
			$("#trigger").html("Stop Simulation");
			$("#trigger").addClass("on");
		}
	});

	$("#experimental").change(function() {
		if ($(this).is(":checked")) {
			$("#mean").val(225);
		} else {
			$("#mean").val(180);
		}
	});
});