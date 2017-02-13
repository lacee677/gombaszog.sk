if ($("#livepic").length > 0) {
	setInterval(function() {
		$("#livepic").attr("src", "http://kadbudapest.hu/gombcam/igynezkimostakemping.jpg?"+new Date().getTime());
	}, 20000)
}

