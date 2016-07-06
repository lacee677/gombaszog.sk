if ($("#gomba-map").length > 0) {
	
	var mapPlaces = [
			{
				id: 1,
				area: {
						xw1: 940,
						xw2: 1038,
						yh1: 981,
						yh2: 1093
					},
				slug: "test",
				title: "Labirintus udvar",
				program: false,
				description: "Önismeret, pszichológia"
			},
			{
				id: 2,
				area: {
						xw1: 1491,
						xw2: 1647,
						yh1: 310,
						yh2: 465
					},
				slug: "pajtaszinhaz",
				title: "Pajtaszínház",
				program: true,
				description: "Egy eredeti gömöri pajta, amelyet a Gombaszög szervezői és a Fiatal Építészek Fóruma telepített a völgybe, és a Gurigongo Symposium tölt meg élettel. Színházi előadások, filmvetítések, slam, és még sok más jó vár mindenkit."
			},
			{
				id: 3,
				area: {
						xw1: 1443,
						xw2: 1644,
						yh1: 537,
						yh2: 660
					},
				slug: "kozbeszed",
				title: "Közbeszéd nagysátor",
				program: true,
				description: "A közéleti programok színtere"
			},
			{
				id: 4,
				area: {
						xw1: 1692,
						xw2: 1839,
						yh1: 636,
						yh2: 750
					},
				slug: "innsator",
				title: "Innsátor",
				program: true,
				description: "A chill és az alternatív zene sátra"
			},
			{
				id: 5,
				area: {
						xw1: 1692,
						xw2: 1839,
						yh1: 636,
						yh2: 750
					},
				slug: "innsator",
				title: "Innsátor",
				program: true,
				description: "A chill és az alternatív zene sátra"
			},
			{
				id: 6,
				area: {
						xw1: 1674,
						xw2: 1836,
						yh1: 258,
						yh2: 369
					},
				slug: "korona",
				title: "Korona sátor",
				program: true,
				description: "A tábor komolyzenei chillsátra"
			},
			{
				id: 7,
				area: {
						xw1: 945,
						xw2: 1236,
						yh1: 309,
						yh2: 441
					},
				slug: "kocsma",
				title: "Kocsma",
				program: false,
				description: "Egy igazi retró kocsma!"
			},
			{
				id: 8,
				area: {
						xw1: 1272,
						xw2: 1377,
						yh1: 312,
						yh2: 426
					},
				slug: "gorilla",
				title: "Kajaplacc",
				program: false,
				description: "Itt lakhatsz jól"
			},
			{
				id: 9,
				area: {
						xw1: 1263,
						xw2: 1332,
						yh1: 453,
						yh2: 525
					},
				slug: "gombabolt",
				title: "Gombabolt",
				program: false,
				description: "Étel-ital, hasznos eszközök boltja"
			},
			{
				id: 10,
				area: {
						xw1: 1197,
						xw2: 1326,
						yh1: 546,
						yh2: 600
					},
				slug: "poloesmobil",
				title: "Ajándékbolt és mobiltöltő állomás",
				program: true,
				description: "Itt veheted meg a legtutibb Gombaszög-pólót!"
			}
		];
	
	var imW = 1920;
	var imH = 1348;
	var imO = {};
	
	var setPosition = function(){
		imW = $("#gomba-map").width();
		imH = $("#gomba-map").height();
		if (imW == 0){
			imW = $("#gomba-map").outerWidth();
			imH = $("#gomba-map").outerHeight();
		}
		imO = $("#gomba-map").offset();
	};
	
	var isThere = function(xw, yh, area){
		return xw>area.xw1 && xw<area.xw2 && yh>area.yh1 && yh<area.yh2;
	};
	
	var showedLocationId = 0;
	
	var getPlaceContent = function(px, py){
		var opxw = 1920*(px-imO.left)/imW;
		var opyh = 1348*(py-imO.top)/imH;
		var isActive = false;
		//console.log(showedLocationId);
		//console.log("OrigPosX: " + opxw + ", OrigPosY: " + opyh);
		for(var i=0; i<mapPlaces.length; i++){
			var place=mapPlaces[i];
			if(isThere(opxw, opyh, place.area)){
				if(showedLocationId!=place.id){
					showedLocationId=place.id;
					$("#location-title").text(place.title);
					$("#location-description").text(place.description);
					$("#location-details").css("top", place.area.yh2*imH/1348 + "px");
					$("#location-details").css("left", place.area.xw1*imW/1920 + "px");
					$("#location-details").show();
				}
				isActive = true;
			}
		}
		if(!isActive){
			$("#location-details").hide();
			showedLocationId=0;
		}
	};
	
	$("#gomba-map").on("mousemove", function(e){
			getPlaceContent(e.pageX, e.pageY);
		});
		
	$(document).ready(function(){
		setTimeout(function(){
				setPosition();
			}, 300);
		});
}
