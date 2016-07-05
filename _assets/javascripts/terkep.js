if ($("#gomba-map").length > 0) {
	
	var mapPlaces = [
			{
				id: 0,
				area: {
						xw1: 940,
						xw2: 982,
						yh1: 1051,
						yh2: 1093
					},
				slug: "test",
				title: "Teszt",
				program: false,
				description: "Teszt cucc"
			},
			{
				id: 1,
				area: {
						xw1: 1491,
						xw2: 310,
						yh1: 1647,
						yh2: 465
					},
				slug: "pajtaszinhaz",
				title: "Pajta Színház",
				program: true,
				description: "Pajtaszinhaz"
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
	
	var getPlaceContent = function(px, py){
		opxw = 1920*(px-imO.left)/imW;
		opyh = 1348*(py-imO.top)/imH;
		console.log("OrigPosX: " + opxw + ", OrigPosY: " + opyh);
		mapPlaces.forEach(function(place){
				if(isThere(opxw, opyh, place.area)){
					console.log("OrigPosX: " + opxw + ", OrigPosY: " + opyh + ", is in " + place.title);
				}
			});
	};
	
	setPosition();
	
	$("#gomba-map").on("mousemove", function(e){
			getPlaceContent(e.pageX, e.pageY);
		});
}
