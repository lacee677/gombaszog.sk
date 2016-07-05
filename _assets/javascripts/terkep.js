if ($("#gomba-map").length > 0) {
	
	var mapPlaces = [
			{
				id: 0,
				area: {
						xw1: 200,
						xw2: 300,
						yh1: 400,
						yh2: 500
					}
				slug: test,
				title: "Teszt",
				program: false,
				description: "Teszt cucc"
			},
			{
				id: 1,
				area: {
						xw1: 400,
						xw2: 500,
						yh1: 500,
						yh2: 600
					}
				slug: pajtaszinhaz,
				title: "Pajta Színház",
				program: true,
				description: "Pajtaszinhaz"
			}
		];
	
	var imW = 1920;
	var imH = 1348;
	
	var setPosition = function(){
		if (msie > 0)
		{
			imW = $("#gomba-map").outerWidth();
			imH = $("#gomba-map").outerHeight();
		}
		else
		{
			imW = $("#gomba-map").width();
			imH = $("#gomba-map").height();
		}
	};
	
	var isThere = function(xw, yh, area){
		return xw>area.xw1 && xw<area.xw2 && yh>area.yh1 && yh<area.yh2;
	};
	
	var getPlaceContent = function(px, py){
		opxw = 1920*px/imW;
		opyh = 1348*py/imH;
		mapPlaces.forEach(place, function(){
				if(isThere(opxw, opyh, place.area)){
					console.log("OrigPosX: " + opxw + ", OrigPosY: " + opyh + ", is in " + place.title);
				}
			});
	};
	
	$("#gomba-map").on("mousemove", function(e){
			console.log("pageX: " + e.pageX + ", pageY: " + e.pageY);
			getPlaceContent(e.pageX, e.pageY);
		});
}
