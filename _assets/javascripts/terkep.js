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
			location: "Labirintus Udvar",
			title: "Labirintus udvar",
			program: true,
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
			location: "Pajtaszínház",
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
			location: "Közbeszéd nagysátor",
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
			location: "innsator",
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
			location: "Innsátor",
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
			location: "Korona sátor",
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
			location: "Kocsma",
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
			location: "Kajaplacc",
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
			location: "gombabolt",
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
			location: "poloesmobil",
			title: "Ajándékbolt és mobiltöltő állomás",
			program: false,
			description: "Itt veheted meg a legtutibb Gombaszög-pólót és itt töltheted a telefonod!"
		},
		{
			id: 11,
			area: {
					xw1: 1540,
					xw2: 1700,
					yh1: 780,
					yh2: 840
				},
			location: "mediasator",
			title: "Roda István Turistaház - Médiasátor",
			program: false,
			description: "Itt székelnek az újságírók, cikkírók, grafikusok, informatikusok, és itt szerkesztődik a Vadalma, amelybe a te cikked is várjuk! Nem kell mást tenned, mint bejönni, leírni, és ha OK, másnap megjelenik!"
		},
		{
			id: 12,
			area: {
					xw1: 1360,
					xw2: 1450,
					yh1: 840,
					yh2: 920
				},
			location: "szifon",
			title: "Szifon",
			program: false,
			description: "Finom itókák lelőhelye. Lesz bor, fröccs, szóda és szörp minden mennyiségben!"
		},
		{
			id: 13,
			area: {
					xw1: 1220,
					xw2: 1285,
					yh1: 230,
					yh2: 290
				},
			location: "bankautomata",
			title: "Bankautomata",
			program: false,
			description: "Pénzfelvételi lehetőség"
		},
		{
			id: 14,
			area: {
					xw1: 825,
					xw2: 924,
					yh1: 230,
					yh2: 330
				},
			location: "B-612",
			title: "B-612 bolygó - JuGYIK sátor",
			program: true,
			description: "JuGYIK sátor"
		},
		{
			id: 15,
			area: {
					xw1: 880,
					xw2: 1020,
					yh1: 490,
					yh2: 550
				},
			location: "medence",
			title: "Medence",
			program: false,
			description: "Csobbanás és lehűlés a nagy melegben - a tavalyihoz hasonlóan szalmából készítve!"
		},
		{
			id: 16,
			area: {
					xw1: 720,
					xw2: 780,
					yh1: 240,
					yh2: 340
				},
			location: "Gombaovi",
			title: "Gombaovi",
			program: true,
			description: "Kisgyermek óvoda"
		},
		{
			id: 17,
			area: {
					xw1: 560,
					xw2: 610,
					yh1: 250,
					yh2: 300
				},
			location: "elsosegely",
			title: "Elsősegély",
			program: false,
			description: "Gyors egészségügyi ellátás, ha gondod támadna..."
		},
		{
			id: 18,
			area: {
					xw1: 1100,
					xw2: 1170,
					yh1: 480,
					yh2: 550
				},
			location: "Csapatjáték infopult",
			title: "Csapatjáték infopult",
			program: false,
			description: "Csapatjáték információk, jelentkezés"
		},
		{
			id: 19,
			area: {
					xw1: 1660,
					xw2: 1860,
					yh1: 15,
					yh2: 160
				},
			location: "barlang",
			title: "Gombaszögi barlang",
			program: false,
			description: "A gombaszögi barlang bejárata - Az akár három méteres szalmacseppköveiről ismert, UNESCO világörökséggé nyilvánított barlang a táborjeggyel ingyenesen meglátogatható a reggeli órákban. A barlanglátogatásra jelentkezni a portán lehet."
		},
		{
			id: 21,
			area: {
					xw1: 510,
					xw2: 570,
					yh1: 330,
					yh2: 390
				},
			location: "Kopjafafaragó",
			title: "Kopjafafaragó",
			program: true,
			description: "A kopjafa faragásának helyszíne. Csatlakozz te is Nagyferenc Katalin kopjafafaragóhoz, állíts emléket az utókornak!"
		},
		{
			id: 22,
			area: {
					xw1: 320,
					xw2: 400,
					yh1: 180,
					yh2: 280
				},
			location: "Fotólabor",
			title: "Fotólabor",
			program: true,
			description: "Fotókészítés, előhívás, gyönyörködés"
		},
		{
			id: 23,
			area: {
					xw1: 360,
					xw2: 580,
					yh1: 480,
					yh2: 660
				},
			location: "Nagyszínpad",
			title: "Nagyszínpad",
			program: true,
			description: "Itt csápolunk koncert közben"
		},
		{
			id: 24,
			area: {
					xw1: 260,
					xw2: 325,
					yh1: 670,
					yh2: 740
				},
			location: "frissito",
			title: "Frissítő",
			program: false,
			description: "Ital, frissítő"
		},
		{
			id: 25,
			area: {
					xw1: 640,
					xw2: 710,
					yh1: 360,
					yh2: 430
				},
			location: "Kézműves sátor",
			title: "Kézműves sátor",
			program: false,
			description: "Festés, rajzolás, agyagozás stb."
		},
		{
			id: 26,
			area: {
					xw1: 790,
					xw2: 890,
					yh1: 390,
					yh2: 460
				},
			location: "Márai Sándor  sátor",
			title: "Márai Sándor sátor",
			program: true,
			description: "Beszélgetések, felolvasások, közéleti programok"
		},
		{
			id: 27,
			area: {
					xw1: 540,
					xw2: 610,
					yh1: 900,
					yh2: 970
				},
			location: "Buszmegálló",
			title: "Buszmegálló",
			program: true,
			description: "Innen indulnak és ide érkeznek a partibuszok, illetve a SAD helyközi buszjáratai, a megálló neve Szalóc, Gombaszögi barlang - Slavec, Gombasecká jaskyňa"
		},
		{
			id: 28,
			area: {
					xw1: 650,
					xw2: 720,
					yh1: 960,
					yh2: 1030
				},
			location: "taxi",
			title: "Taxidroszt",
			program: false,
			description: "Taxidroszt"
		},
		{
			id: 29,
			area: {
					xw1: 940,
					xw2: 1000,
					yh1: 1150,
					yh2: 1230
				},
			location: "parkolo",
			title: "Parkoló",
			program: false,
			description: "Parkolóhely mindenkinek. A parkolásért nem kell fizetni, ugyanakkor egy papírt kérünk elhelyezni a szélvédő alá a tulajdonos telefonszámával, hogy szükség esetén el lehessen érni"
		},
		{
			id: 30,
			area: {
					xw1: 800,
					xw2: 890,
					yh1: 970,
					yh2: 1090
				},
			location: "porta",
			title: "Porta és információ",
			program: false,
			description: "Jegyvétel és információ"
		},
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
					$("#location-details").css("top", place.area.yh2*imH/1348 + "px");
					$("#location-details").css("left", place.area.xw1*imW/1920 + "px");
					$("#location-details").show();
					$("#description-modal-label").text(place.title);
					$("#location-description").text(place.description);
					if(place.program){
						renderProgram(place.location);
					}
					else{
						deleteProgram();
					}
				}
				isActive = true;
			}
		}
		if(!isActive){
			$("#location-details").hide();
			showedLocationId=0;
		}
	};
	
	var programFS = {};
	
	var getProgram = function(){
		$.get("/api/program", function( data ) {
			programFS = data.program;
		}, "json" );
	}
	
	var deleteProgram = function(){
		$("#location-program").html("");
	}
	
	var renderProgram = function(actLocation){
		$("#location-program").html("");
		var napNevek = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
		var napNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
		var actNap = null;
		var actNapWrap = null;
		for(var i=0; i<programFS.length; i++){
			if(actLocation == programFS[i].location){
				actProgram=programFS[i];
				var formattedDate = new Date(actProgram.start);
				if(formattedDate.getDay()!=actNap){
					var actDay = formattedDate.getDay();
					actNapWrap = $("<div class=\"program-day-wrap program-day-" + napNames[actDay] + "\"><h4>" + napNevek[actDay] + "</h4></div>").appendTo($("#location-program"));
					actNap=actDay;
				}
				actNapWrap.append("<div class=\"program-wrap\">"+
								"<div class=\"program-start\">" + formattedDate.getHours() + ":" + formattedDate.getMinutes() + (formattedDate.getMinutes()<10?"0":"") + "</div>"+
								"<div class=\"program-title\">" + actProgram.name + "</div>"+
								"<div class=\"program-description\">" + actProgram.description + "</div>"+
							"</div>");
			}
		}
	}
	
	$("#gomba-map").on("mousemove", function(e){
			getPlaceContent(e.pageX, e.pageY);
		});
		
	$(document).ready(function(){
		setTimeout(function(){
				getProgram();
				setPosition();
			}, 300);
		});
}
