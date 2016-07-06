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
			id: 20,
			area: {
					xw1: 1660,
					xw2: 1860,
					yh1: 15,
					yh2: 160
				},
			location: "barlang",
			title: "Gombaszögi barlang",
			program: false,
			description: "A gombaszögi barlang bejárata"
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
			description: "A kopjafa faragásának helyszíne"
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
	
	var programFS = {"sum":"4c546c9cf13047d0971cb7a009d55acb","time":"1467824789",
		"program":[{"id":675,"name":"Partibuszok indulása","description":"Buszra helyet foglalni a jegyelővételnél lehet, pontos menetrend hamarosan!","start":"2016-07-12T09:00:00.000+02:00","end":"2016-07-12T09:01:00.000+02:00"},{"id":618,"name":"Reggeli játék és torna","description":"","start":"2016-07-12T10:00:00.000+02:00","end":"2016-07-12T11:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":625,"name":"Arcfestés, hajfonás, hennázás","description":"","start":"2016-07-12T11:00:00.000+02:00","end":"2016-07-12T12:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":631,"name":"Tematikus foglalkozások","description":"","start":"2016-07-12T12:00:00.000+02:00","end":"2016-07-12T14:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":637,"name":"Mesél a bolygó","description":"Mesefelolvasás Tomovič Miri és Gyenge Veroni előadásában a legkisebbeknek és mindenkinek, akiben ott bújik még a gyermek.\r\n\t","start":"2016-07-12T14:00:00.000+02:00","end":"2016-07-12T15:00:00.000+02:00","location":"B-612","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":640,"name":"Foglalkozások, játék","description":"","start":"2016-07-12T15:00:00.000+02:00","end":"2016-07-12T18:30:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":648,"name":"Bagossy Brothers Company koncert","description":"","start":"2016-07-12T20:30:00.000+02:00","end":"2016-07-12T21:45:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":649,"name":"jóvilágvan koncert","description":"","start":"2016-07-12T22:15:00.000+02:00","end":"2016-07-12T23:59:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":583,"name":"Korai Accoustic\t","description":"","start":"2016-07-12T23:59:00.000+02:00","end":"2016-07-13T02:00:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":564,"name":"Regisztráció","description":"","start":"2016-07-13T09:00:00.000+02:00","end":"2016-07-13T14:00:00.000+02:00","partner":"Csapatjáték","logo":"/uploads/images/image_HrnIKm64vl9.png"},{"id":592,"name":"#kávé #cigi #irodalom\t \t \t","description":"","start":"2016-07-13T09:30:00.000+02:00","end":"2016-07-13T11:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":666,"name":"Klasszikus zenei sátor","description":"","start":"2016-07-13T10:00:00.000+02:00","end":"2016-07-13T17:00:00.000+02:00","location":"Korona  sátor","partner":"Korona","logo":"/uploads/images/image_plaOGdQR57K.png"},{"id":533,"name":"Megnyitó","description":"Beszédet mond Potápi Árpád János, a Miniszterelnökség nemzetpolitikáért felelős államtitkára, Borzy Bálint, Szalóc polgármestere, Kotiers Róza, a Diákhálózat elnöke és Orosz Örs, a Gombaszögi Nyári Tábor főszervezője \t\r\n\t","start":"2016-07-13T10:00:00.000+02:00","end":"2016-07-13T11:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":619,"name":"Reggeli játék és torna","description":"","start":"2016-07-13T10:00:00.000+02:00","end":"2016-07-13T11:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":597,"name":"#folyamatosjelen","description":"déli meditálás  Bokor Krisztiánnal \t","start":"2016-07-13T11:00:00.000+02:00","end":"2016-07-13T13:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":534,"name":"A sötét fotont, vagy az 5. erőt találták meg Debrecenben?","description":"Krasznahorkay Attila előadása\r\n\t\r\n\t","start":"2016-07-13T11:00:00.000+02:00","end":"2016-07-13T12:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":626,"name":"Arcfestés, hajfonás, hennázás","description":"","start":"2016-07-13T11:00:00.000+02:00","end":"2016-07-13T12:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":475,"name":"Szakkollégiumok szerepe a felsőoktatásban","description":"","start":"2016-07-13T12:00:00.000+02:00","end":"2016-07-13T14:00:00.000+02:00","location":"Márai Sándor  sátor"},{"id":632,"name":"Tematikus foglalkozások","description":"","start":"2016-07-13T12:00:00.000+02:00","end":"2016-07-13T14:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":602,"name":"Hé te! Hozd el a szöveged!","description":"Egymás vers, próza, slam szövegeinek kivesézése, megbeszélése. \r\n\t","start":"2016-07-13T12:30:00.000+02:00","end":"2016-07-13T14:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":535,"name":"Közönségtalálkozó a Kétnyelvű Dél-Szlovákia aktivistáival","description":"Csóti György, a Kisebbségi Jogvédő Intézet igazgatója: A KDSZ a legismertebb nyelvhasználati mozgalom az országban, de talán a Kárpát-medencében is. A monterkys gerillák idén felfedték kilétüket, és újabb akciókkal hivták fel a figyelmet a kétnyelvűségre. Az elmúlt évek kalandos bevetéseiről és rendőros sztorijairól, illetve motivációikról először beszélnek a tábor közönségének.","start":"2016-07-13T12:30:00.000+02:00","end":"2016-07-13T14:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":536,"name":"A sci-fi és a Trónok Harca politológiája","description":"Miért okolhatók a jedi lovagok a Galaktikus Köztársaság bukásáért? Miben hasonlit az Éhezők viadala univerzuma a dél-afrikai apartheidhez? Legitim-e Cercei királynő uralma és lesz-e valaha politikai konszolidáció Westerosban? Tóth Csaba, a Republikon Intézet igazgatója nemrégiben könyvet irt a sci-fi és a politika kapcsolatáról. Azt vallja, hogy a mai nemzedéknek könnyebb a diktatúrák kialakulást Palpatine kancellárral, mint Hitlerrel szemléltetni. A politológussal az egyes sci-fi világok politikai rendszereit és a benne szereplők motivációit elemezzük. Moderátor: Kovács Balázs.","start":"2016-07-13T14:00:00.000+02:00","end":"2016-07-13T15:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":502,"name":"Teaház","description":"","start":"2016-07-13T14:00:00.000+02:00","end":"2016-07-13T18:30:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":607,"name":"Mesél a bolygó","description":"Mesefelolvasás Tomovič Miri és Gyenge Veroni előadásában a legkisebbeknek és mindenkinek, akiben ott bújik még a gyermek.\r\n\t","start":"2016-07-13T14:00:00.000+02:00","end":"2016-07-13T15:00:00.000+02:00","location":"B-612","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":476,"name":"Beszélgetés és felolvasás a MÁSIK tagjaival\t \t","description":"Melecsky Kristóf, György Ádám - moderátor: mindig egy másik\t\r\n\t\r\n\t","start":"2016-07-13T14:00:00.000+02:00","end":"2016-07-13T15:30:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":503,"name":"Labirintus Udvar megnyitása","description":"bevezetés a labirintus világába, felkészítés, labirintus járás  - Halász Péterrel és Anitával","start":"2016-07-13T14:00:00.000+02:00","end":"2016-07-13T17:30:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":575,"name":"Felolvasó Színház","description":"Valami jó kis kortárs dráma a Gurigongo KultúrKomandó tálalásában\r\n\t\r\n\t\r\n\t","start":"2016-07-13T15:00:00.000+02:00","end":"2016-07-13T17:00:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":642,"name":"Foglalkozások, játék","description":"","start":"2016-07-13T15:00:00.000+02:00","end":"2016-07-13T18:30:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":477,"name":"Beszélgetés Szarka Károllyal tudósítói és prózaírói munkásságáról \t","description":"moderátor: Mucha Attila\t\r\n\t\r\n\t","start":"2016-07-13T15:30:00.000+02:00","end":"2016-07-13T17:00:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":537,"name":"Politikai nyomásgyakorlás a médiában","description":"Mandiner, Magyar Nemzet, Új Szó: Politikai nyomásgyakorlás a médiában - Panelbeszélgetés az D. Horváth Gáborral (Magyar Nemzet), Balogh Ákos Gergellyel (Mandiner) és Szalay Zoltánnal (Új Szó) az aktuális problémákról a politikai szereplők és a sajtó viszonyában. Moderátor: Hangácsi István.","start":"2016-07-13T15:30:00.000+02:00","end":"2016-07-13T17:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":611,"name":"GyógyKonyha\t \t","description":"Varga Bijus előadása a konyhában használatos növények jótékony hatásáról\t ","start":"2016-07-13T15:30:00.000+02:00","end":"2016-07-13T17:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":565,"name":"Csapatok bemutatkozása \t \t","description":"","start":"2016-07-13T16:00:00.000+02:00","end":"2016-07-13T17:00:00.000+02:00","partner":"Csapatjáték","logo":"/uploads/images/image_HrnIKm64vl9.png"},{"id":613,"name":"Huncut kora esti mesék Szeleczki Moncsival\t \t","description":"","start":"2016-07-13T17:00:00.000+02:00","end":"2016-07-13T18:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":538,"name":"Velemjáró","description":"Az applikációt Horony Ákos, Lancz Attila, Kántor Zoltán és Stubendek Attila mutatja be.\t","start":"2016-07-13T17:00:00.000+02:00","end":"2016-07-13T18:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":478,"name":"Mucha Attila: konyha, Sör, főzés \t \t","description":"sörkóstolással egybekötött kötetbemutató - moderátor: Varga Bianka","start":"2016-07-13T17:00:00.000+02:00","end":"2016-07-13T18:00:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":566,"name":"Csocsóbajnokság\t \t \t \t \t \t \t \t","description":"","start":"2016-07-13T17:30:00.000+02:00","end":"2016-07-13T21:30:00.000+02:00","partner":"Csapatjáték","logo":"/uploads/images/image_HrnIKm64vl9.png"},{"id":504,"name":"Barlang és önismeret, avagy ha le is út, fel is út","description":"Szabó Eszter a barlangászatról","start":"2016-07-13T18:00:00.000+02:00","end":"2016-07-13T19:30:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":576,"name":"Soóky László:  A nagy (cseh)szlovákiai magyar csönd \t","description":"  előadja Benkő Géza. Olyan ez, mint egy modern népmese: az úgy volt, hogy egyszer csak meghalt Sztálin elvtárs, meg Gottwald elvtárs is…","start":"2016-07-13T18:00:00.000+02:00","end":"2016-07-13T19:30:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":539,"name":"Mi lesz a magyar alapiskolákkal?\t \t \t","description":"","start":"2016-07-13T18:00:00.000+02:00","end":"2016-07-13T19:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":505,"name":"Es(z)ti mesék  a VándorLással","description":"Kovács Kovi Zoltán: A marokkói sivatagok világa\r\n","start":"2016-07-13T20:00:00.000+02:00","end":"2016-07-13T21:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":651,"name":"Péterfy Bori és a Love Band koncert","description":"","start":"2016-07-13T21:00:00.000+02:00","end":"2016-07-13T22:20:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":652,"name":"Korai Trancemission koncert","description":"","start":"2016-07-13T22:30:00.000+02:00","end":"2016-07-13T23:59:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":567,"name":"Tájfutás\t \t \t \t","description":"","start":"2016-07-14T07:00:00.000+02:00","end":"2016-07-14T09:30:00.000+02:00","partner":"Csapatjáték","logo":"/uploads/images/image_HrnIKm64vl9.png"},{"id":479,"name":"Diákok és tanárok az oktatásért","description":"Panelbeszélgetés az alulról szerveződő, \r\naz oktatás területén tevékenykedő \r\nmozgalmak képviselőivel. \r\nAlžbeta Bojková (IVU), \r\nTóth Tibor (magyariskola.sk), \r\nLovász Bálint (ŠRVŠ)\"\t\r\n\t\r\n\t","start":"2016-07-14T09:30:00.000+02:00","end":"2016-07-14T11:00:00.000+02:00","location":"Márai Sándor  sátor"},{"id":506,"name":"Teaház","description":"Teaház\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","start":"2016-07-14T09:30:00.000+02:00","end":"2016-07-14T18:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":593,"name":"#kávé #cigi #irodalom\t \t \t","description":"","start":"2016-07-14T09:30:00.000+02:00","end":"2016-07-14T11:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":667,"name":"Klasszikus zenei sátor","description":"","start":"2016-07-14T10:00:00.000+02:00","end":"2016-07-14T17:00:00.000+02:00","location":"Korona  sátor","partner":"Korona","logo":"/uploads/images/image_plaOGdQR57K.png"},{"id":672,"name":"Civil információs nap","description":"","start":"2016-07-14T10:00:00.000+02:00","end":"2016-07-14T18:00:00.000+02:00","location":"SZAKC sátor","partner":"SZAKC","logo":null},{"id":622,"name":"Reggeli játék és torna","description":"","start":"2016-07-14T10:00:00.000+02:00","end":"2016-07-14T11:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":540,"name":"Kétnyelvű táblák és kulturális alap ","description":"Mik az új kisebbségi biztos tervei? Milyen környezetbe érkezett? Kikkel akar együttműködni? Vendégünk Bukovszky László kisebbségi kormánybiztos.\r\n\t","start":"2016-07-14T10:00:00.000+02:00","end":"2016-07-14T11:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":512,"name":"Labirintus felkészítő és labirintus járás","description":"","start":"2016-07-14T10:00:00.000+02:00","end":"2016-07-14T12:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":509,"name":"Életpálya-kötélpálya","description":"","start":"2016-07-14T10:30:00.000+02:00","end":"2016-07-14T12:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":598,"name":"#folyamatosjelen\t \t","description":"déli meditálás Bokor Krisztiánnal \t","start":"2016-07-14T11:00:00.000+02:00","end":"2016-07-14T12:30:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":627,"name":"Arcfestés, hajfonás, hennázás","description":"","start":"2016-07-14T11:00:00.000+02:00","end":"2016-07-14T12:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":480,"name":"Irodalmi Közös-ülés\t \t \t \t \t","description":" irodalmi összeruccanás bakelitekkel (hozunk lemezjátszót, lemezeket, magunkat és a vendégeinket).","start":"2016-07-14T11:00:00.000+02:00","end":"2016-07-14T14:00:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":541,"name":"Az önjáraró jövő ","description":"trendek és stratégiák, a hi-tech világ kihívásai\t\r\n\t","start":"2016-07-14T11:30:00.000+02:00","end":"2016-07-14T12:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":577,"name":"jóZENEdó","description":"muzsika másnapra Lóci játszik","start":"2016-07-14T11:30:00.000+02:00","end":"2016-07-14T13:00:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":518,"name":"Művészetterápiás workshop Molnár Andreával","description":"","start":"2016-07-14T12:00:00.000+02:00","end":"2016-07-14T15:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":633,"name":"Tematikus foglalkozások","description":"","start":"2016-07-14T12:00:00.000+02:00","end":"2016-07-14T14:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":516,"name":"Egyéni karrier tanácsadás ","description":"","start":"2016-07-14T12:30:00.000+02:00","end":"2016-07-14T15:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":542,"name":"Európa jelene és jövője","description":"beszélgetés Tamás Gáspár Miklóssal\t\r\n\t\r\n\t","start":"2016-07-14T12:30:00.000+02:00","end":"2016-07-14T14:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":603,"name":"Kötetlenek","description":"Plonicky Tamás és Farkas Benjámin (Beszélgetés és felolvasás)\r\n\t\r\n\t","start":"2016-07-14T12:30:00.000+02:00","end":"2016-07-14T14:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":563,"name":"Van-e gerinced?","description":"Van-e gerinced? Médiaszimulációs játék a Külpolitikai Újságírásért Egyesület szervezésében - Egy játék, ahol kipróbálhatod, hogy mennyire vagy gerinces, milyen döntéseket hozol stressz nyomása alatt és hogy hogyan tudsz együttműködni másokkal a céljaid elérése érdekében. A hírszoba szimuláció pont abban segít, hogy jobban megértsd önmagad es a média világának működését, hogy a környezet hogyan befolyásol Téged és ez mennyire kiszámítható vagy sem. A kétórás szerepjáték mindenkinek passzol, végre nem csak passzív program, hanem rólad szól.\r\n","start":"2016-07-14T13:00:00.000+02:00","end":"2016-07-14T15:00:00.000+02:00","location":"Labirintus Udvar"},{"id":543,"name":"KCSSZ nemzetközi szimpózium","description":"","start":"2016-07-14T14:00:00.000+02:00","end":"2016-07-14T15:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":568,"name":"Paintball","description":"","start":"2016-07-14T14:00:00.000+02:00","end":"2016-07-14T17:00:00.000+02:00","partner":"Csapatjáték","logo":"/uploads/images/image_HrnIKm64vl9.png"},{"id":608,"name":"Mesél a bolygó","description":"Mesefelolvasás Tomovič Miri és Gyenge Veroni előadásában a legkisebbeknek és mindenkinek, akiben ott bújik még a gyermek.","start":"2016-07-14T14:00:00.000+02:00","end":"2016-07-14T15:00:00.000+02:00","location":"B-612","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":481,"name":"Beszélgetés és felolvasás a MÁSIK tagjaival ","description":"Dékány Niki, Mucha Dorka - moderátor: mindig egy másik\t\r\n\t\r\n\t","start":"2016-07-14T14:00:00.000+02:00","end":"2016-07-14T15:30:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":638,"name":"Látogatás a Pajtába","description":"Fabók Mancsi Bábszínháza: A székely menyecske meg az ördög\t\r\nElőadás a Pajtaszínházban\t","start":"2016-07-14T15:00:00.000+02:00","end":"2016-07-14T16:30:00.000+02:00","location":"Pajtaszínház","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":522,"name":"Lehet-e élmény a tanulás?","description":"kerekasztalbeszélgetés élménypedagógiás szakemberekkel","start":"2016-07-14T15:00:00.000+02:00","end":"2016-07-14T17:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":578,"name":"A székely menyecske meg az ördög","description":"Előadja a Fabók Mancsi Bábszínháza. Szigorúan kiskorú felügyelete mellett ajánljuk!\"\t\r\n\t\r\n\t","start":"2016-07-14T15:00:00.000+02:00","end":"2016-07-14T16:30:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":482,"name":"Bokor Krisztián variációi egy rendrakásra\t \t \t","description":"Bokor Krisztián azt mondta, vannak valami variációi egy rendrakásra - moderátor: Mucha Attila","start":"2016-07-14T15:30:00.000+02:00","end":"2016-07-14T17:00:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":544,"name":"Orosz médiahack","description":"Eszmecsere Jarábik Balázzsal és Feledy Botond külpolitikai szakértőkkel az orosz EU- és nyugat-ellenes propaganda részleteiról és hatásairól. Moderátor: Hangácsi István.\t\r\n\t\r\n\t","start":"2016-07-14T15:30:00.000+02:00","end":"2016-07-14T17:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":643,"name":"Foglalkozások, játék","description":"","start":"2016-07-14T16:30:00.000+02:00","end":"2016-07-14T18:30:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":614,"name":"Huncut kora esti mesék Szeleczki Moncsival\t \t","description":"","start":"2016-07-14T17:00:00.000+02:00","end":"2016-07-14T18:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":545,"name":"Kecskemétről Zsolnára Marosz Diánával","description":"Őszintén arról, hogy milyen magyarországiként Szlovákiában élni, kétnyelvűen gyermekeket nevelni és a SME egyik legolvasottabb magyar bloggerjének lenni. Moderátor: Hangácsi István.\t\r\n\t\r\n\t","start":"2016-07-14T17:00:00.000+02:00","end":"2016-07-14T18:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":485,"name":"Csider István Zoltán: Rendrakás","description":" beszélgetés és kötetbemutató - moderátor: Dékány Niki\t\r\n\t","start":"2016-07-14T17:00:00.000+02:00","end":"2016-07-14T18:00:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":526,"name":"Mesterségem címere: Világutazó!","description":"Harmincz Ritával, A sárga ruhás lánnyal beszélget Kovács Kovi Zoltán","start":"2016-07-14T18:00:00.000+02:00","end":"2016-07-14T19:30:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":486,"name":"Borkóstoló Nagy Attilával\t \t \t","description":"NAP borászat","start":"2016-07-14T18:00:00.000+02:00","end":"2016-07-14T19:30:00.000+02:00","location":"Márai Sándor  sátor"},{"id":579,"name":"Szomjas férfiak sört isznak helyettem","description":"Szirmai Melinda és az E-Mancik előadása. Versek, dalok, monológok, arról, hogy jártunk - nem jártunk a férfiakkal. \"\t\r\n\t\r\n\t","start":"2016-07-14T18:00:00.000+02:00","end":"2016-07-14T19:30:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":650,"name":"A Farkas, a Mézes, a Német meg a Bob koncert","description":"","start":"2016-07-14T20:00:00.000+02:00","end":"2016-07-14T21:00:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":527,"name":"Es(z)ti mesék a VándorLással","description":"Harmincz Rita: A csodálatos Indonéziáról","start":"2016-07-14T20:00:00.000+02:00","end":"2016-07-14T21:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":654,"name":"Magashegyi Underground koncert","description":"","start":"2016-07-14T21:00:00.000+02:00","end":"2016-07-14T22:30:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":653,"name":"Halott Pénz koncert","description":"","start":"2016-07-14T22:30:00.000+02:00","end":"2016-07-14T23:30:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":532,"name":"Önismereti túra és beavatás férfiaknak","description":"","start":"2016-07-14T23:30:00.000+02:00","end":"2016-07-14T23:59:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":570,"name":"Gulyásfőzőverseny\t   \t \t \t \t \t \t \t \t \t","description":"","start":"2016-07-15T09:00:00.000+02:00","end":"2016-07-15T14:00:00.000+02:00","partner":"Csapatjáték","logo":"/uploads/images/image_HrnIKm64vl9.png"},{"id":507,"name":"Teaház","description":"","start":"2016-07-15T09:30:00.000+02:00","end":"2016-07-15T18:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":594,"name":"#kávé #cigi #irodalom\t \t \t","description":"","start":"2016-07-15T09:30:00.000+02:00","end":"2016-07-15T11:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":513,"name":"Labirintus felkészítő és labirintus járás","description":"","start":"2016-07-15T10:00:00.000+02:00","end":"2016-07-15T12:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":546,"name":"Új arc a pályán","description":"Hat év után új elnöke van a Magyar Közösség Pártjának. Mi az első száz nap programja? Kikkel működne együtt? Milyen állapotban találta a pártot? Vendégünk Menyhárt József, az MKP elnöke. \r\n","start":"2016-07-15T10:00:00.000+02:00","end":"2016-07-15T11:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":668,"name":"Klasszikus zenei sátor","description":"","start":"2016-07-15T10:00:00.000+02:00","end":"2016-07-15T17:00:00.000+02:00","location":"Korona  sátor","partner":"Korona","logo":"/uploads/images/image_plaOGdQR57K.png"},{"id":620,"name":"Reggeli játék és torna","description":"","start":"2016-07-15T10:00:00.000+02:00","end":"2016-07-15T11:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":487,"name":"Száz év tükrében  a nagy háború 1916-2016","description":"videoklippvetélkedő bemutatás\r\n\t","start":"2016-07-15T10:00:00.000+02:00","end":"2016-07-15T11:00:00.000+02:00","location":"Márai Sándor  sátor"},{"id":510,"name":"Életpálya-kötélpálya","description":"","start":"2016-07-15T10:30:00.000+02:00","end":"2016-07-15T12:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":515,"name":"Tudatos karriertervezés, avagy hogyan lehet boldog pillanat minden hétfő reggel? ","description":"workshop Szűcs Istvánnal ","start":"2016-07-15T10:30:00.000+02:00","end":"2016-07-15T12:30:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":547,"name":"Magyar a kormányban","description":"Ismét magyar vezetésű a környezetvédelmi tárca. Mit lehet elérni a tárca élén? Milyen tervei vannak  a miniszternek? Milyennek látja most a koalíciót belülről? Vendégünk Solymos László környezetvédelmi miniszter, az új kormány egyetlen magyar tagja.\r\n\t","start":"2016-07-15T11:00:00.000+02:00","end":"2016-07-15T12:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":628,"name":"Arcfestés, hajfonás, hennázás","description":"","start":"2016-07-15T11:00:00.000+02:00","end":"2016-07-15T12:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":599,"name":"#folyamatosjelen\t \t","description":"déli meditálás  Bokor Krisztiánnal","start":"2016-07-15T11:00:00.000+02:00","end":"2016-07-15T12:30:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":492,"name":"Ismerd meg Felvidék legszebb lányait!","description":"","start":"2016-07-15T11:00:00.000+02:00","end":"2016-07-15T12:00:00.000+02:00","location":"Márai Sándor  sátor"},{"id":580,"name":"jóZENEdó","description":"muzsika másnapra: cseRihannák\t","start":"2016-07-15T11:30:00.000+02:00","end":"2016-07-15T13:00:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":634,"name":"Tematikus foglalkozások","description":"","start":"2016-07-15T12:00:00.000+02:00","end":"2016-07-15T14:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":493,"name":"Sorozatgyilkos asszonyok: a tiszazugi arzénmérgezések ","description":"Az első világháború után Magyarország elhagyatott vidékén néhány asszony arzénnal mérgezte meg a férjét. Mind a hazai, mind a nemzetközi sajtó kiemelten foglalkozott a történtekkel. Az esetet oknyomozói alapossággal göngyölítették fel az ELTE történészei, amiről hamarosan egy kötet is meg fog jelenni. A projektről és az eredményekről beszélgethetünk a kutatókkal.","start":"2016-07-15T12:00:00.000+02:00","end":"2016-07-15T13:30:00.000+02:00","location":"Márai Sándor  sátor"},{"id":548,"name":"Fiatal vállalkozóink sikerei\t \t \t","description":"","start":"2016-07-15T12:00:00.000+02:00","end":"2016-07-15T13:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":519,"name":"Hogyan éljek utazásból? ","description":"Workshop az utazni vágyóknak","start":"2016-07-15T12:30:00.000+02:00","end":"2016-07-15T13:30:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":517,"name":"Egyéni karrier tanácsadás ","description":"","start":"2016-07-15T12:30:00.000+02:00","end":"2016-07-15T15:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":604,"name":"ELSŐSegély egyetemistáknak","description":"A Gímesi Művelődési Tábor és Gólyatábor bemutatja: ELSŐSegély egyetemistáknak, avagy mit kell tudnom, mi vár rám szeptembertől.\r\n\t\r\n\t","start":"2016-07-15T12:30:00.000+02:00","end":"2016-07-15T14:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":549,"name":"Magyar ifjúság: múlt, jelen, jövő","description":"Kerekasztal a magyarországi és szlovákiai ifjúságkutatókkal a legújabb trendekről: Bauer Béla és Szabó Andrea az MTA-tól, Morvai Tünde az NPKI-tól és Szakács András a Méltányosságtól. Moderátor: Hangácsi István.","start":"2016-07-15T13:30:00.000+02:00","end":"2016-07-15T15:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":483,"name":"Beszélgetés és felolvasás a MÁSIK tagjaival","description":"Gyenge Veroni, Varga Bianka, Wawruch Róza - moderátor: mindig egy másik\t\r\n\t\r\n\t","start":"2016-07-15T14:00:00.000+02:00","end":"2016-07-15T15:30:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":581,"name":"Hepp Trupp: Autósmese, avagy Toda, Berci és a Csodamerci \t \t \t","description":"Csodamerci? Az ám. Beleülnél? Lazán.","start":"2016-07-15T14:00:00.000+02:00","end":"2016-07-15T15:30:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":639,"name":"Látogatás a Pajtába","description":"Hepp Trupp: Autós mese, avagy Toda, Berci és a csodamerci\t\r\nElőadás a Pajtaszínházban\t","start":"2016-07-15T14:00:00.000+02:00","end":"2016-07-15T15:30:00.000+02:00","location":"Pajtaszínház","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":550,"name":"Egy messziről jött ember","description":"Beszélgetés Nick Thorpe, a BBC kelet-közép-európai tudósítójával\t\r\n\t","start":"2016-07-15T15:00:00.000+02:00","end":"2016-07-15T16:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":494,"name":"Instavers - azonnal oldódik","description":"Bemutatja Kele Dóri szerkesztő, moderátor: Mucha Dorka\t\r\n\t\r\n\t","start":"2016-07-15T15:00:00.000+02:00","end":"2016-07-15T17:00:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":523,"name":"Álmodd az életed, éld az álmaidat!","description":"kerekasztal beszélgetés igazi „álommegvalósítókkal\"","start":"2016-07-15T15:00:00.000+02:00","end":"2016-07-15T17:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":571,"name":"Ügyességi Versenyek","description":"","start":"2016-07-15T15:00:00.000+02:00","end":"2016-07-15T18:00:00.000+02:00","partner":"Csapatjáték","logo":"/uploads/images/image_HrnIKm64vl9.png"},{"id":644,"name":"Foglalkozások, játék","description":"","start":"2016-07-15T15:30:00.000+02:00","end":"2016-07-15T18:30:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":551,"name":"Menni vagy maradni? - fiatalnak lenni Európában","description":"Navracsics Tiborral, az Európai Bizottság oktatásért, kultúráért, ifjúságpolitikáért és sportért felelős biztosával a fiatalokat érő kihivásokról fogunk eszmét cserélni, de biztosan szóba kerül a Brexit is. Moderátorok: Feledy Botond és Kovács Balázs","start":"2016-07-15T16:00:00.000+02:00","end":"2016-07-15T17:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":612,"name":"Saróka Lili zenél és  varázsol el bennünket\t","description":"","start":"2016-07-15T16:00:00.000+02:00","end":"2016-07-15T17:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":615,"name":"Huncut kora esti mesék Szeleczki Moncsival\t \t","description":"","start":"2016-07-15T17:00:00.000+02:00","end":"2016-07-15T18:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":495,"name":"kabai lóránt: Semmi szín","description":"többek között a kötetről is beszélgetünk - moderátor: Mucha Attila\t\r\n\t","start":"2016-07-15T17:00:00.000+02:00","end":"2016-07-15T18:00:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":552,"name":"Gyerek a munkahelyen?","description":"Beszélgetés a nők munkapiaci helyzetéről.\t\r\n\t\r\n\t","start":"2016-07-15T17:30:00.000+02:00","end":"2016-07-15T19:00:00.000+02:00","location":"Közbeszéd nagysátor","partner":"Phoenix PT","logo":null},{"id":528,"name":"Párkapcsolatunk olyan, mint egy cipzár","description":"Süll Tamás párkapcsolati tanácsadó előadása, nem csak pároknak \r\n\r\n","start":"2016-07-15T18:00:00.000+02:00","end":"2016-07-15T19:30:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":582,"name":"Mentőcsónak Egység: Menekülj okosan! – MigrAction","description":"interaktív színházi társasjáték \r\nNégy csapat foglal helyet a nézőtéren: négy család, vagyis egy falu közössége. A csapatok menekülni kényszerülnek, mert a falujukat elpusztította a polgárháború.","start":"2016-07-15T18:00:00.000+02:00","end":"2016-07-15T20:00:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":496,"name":"A transzneműségről (beszélgetés és workshop)","description":"Nem mindenki érzi magát olyan neműnek, mint amilyennek született. A Phoenix Polgári Társulás, a TransFúzia szervezet, és a Nyitott Társadalomért Alapítvány közös beszélgetése. Moderátor: Rácz Vince. -\r\nA beszélgetés után workshop, ahol többet is megtudhattok a témáról. Jelentkezés e-mailben a Phoenix PT címén: info@phoenix-ngo.sk","start":"2016-07-15T18:30:00.000+02:00","end":"2016-07-15T21:00:00.000+02:00","location":"Márai Sándor  sátor","partner":"Phoenix PT","logo":null},{"id":553,"name":"Beszélgetés Bárdos Judit szinészművésszel","description":"","start":"2016-07-15T19:00:00.000+02:00","end":"2016-07-15T20:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":529,"name":"Es(z)ti mesét a VándorLással","description":" Leporisz Viktor: Izland a tűz és jég országa ","start":"2016-07-15T20:00:00.000+02:00","end":"2016-07-15T21:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":655,"name":"Buy Her Sugar koncert","description":"","start":"2016-07-15T20:30:00.000+02:00","end":"2016-07-15T21:30:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":656,"name":"Margaret Island koncert","description":"","start":"2016-07-15T21:30:00.000+02:00","end":"2016-07-15T22:40:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":657,"name":"P.A.S.O. koncert","description":"","start":"2016-07-15T23:15:00.000+02:00","end":"2016-07-16T01:00:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":591,"name":"PiroskarikáSlam","description":"","start":"2016-07-16T00:30:00.000+02:00","end":"2016-07-16T02:00:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":508,"name":"Teaház","description":"","start":"2016-07-16T09:30:00.000+02:00","end":"2016-07-16T18:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":595,"name":"#kávé #cigi #irodalom\t \t \t","description":"","start":"2016-07-16T09:30:00.000+02:00","end":"2016-07-16T11:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":623,"name":"Reggeli játék és torna","description":"","start":"2016-07-16T10:00:00.000+02:00","end":"2016-07-16T11:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":497,"name":"Felsőoktatási  kerekasztal","description":"Bárczi Zsófia (KFE, KETK dékán asszony),\r\nHorváth Kinga (SJE, TKK, dékán asszony) \r\nLovássz Bálint (ŠRVŠ), \r\nHortai Ferenc (doktorandusz, VUT Brünn)","start":"2016-07-16T10:00:00.000+02:00","end":"2016-07-16T12:00:00.000+02:00","location":"Márai Sándor  sátor"},{"id":514,"name":"Labirintus felkészítő és labirintus járás","description":"","start":"2016-07-16T10:00:00.000+02:00","end":"2016-07-16T12:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":555,"name":"Műveltségi vetélkedő\t \t","description":"","start":"2016-07-16T10:00:00.000+02:00","end":"2016-07-16T12:00:00.000+02:00","location":"Közbeszéd nagysátor","partner":"Csapatjáték","logo":"/uploads/images/image_HrnIKm64vl9.png"},{"id":669,"name":"Klasszikus zenei sátor","description":"","start":"2016-07-16T10:00:00.000+02:00","end":"2016-07-16T17:00:00.000+02:00","location":"Korona  sátor","partner":"Korona","logo":"/uploads/images/image_plaOGdQR57K.png"},{"id":511,"name":"Életpálya-kötélpálya","description":"","start":"2016-07-16T10:30:00.000+02:00","end":"2016-07-16T12:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":600,"name":"#folyamatosjelen\t \t \t","description":"déli meditálás  Bokor Krisztiánnal","start":"2016-07-16T11:00:00.000+02:00","end":"2016-07-16T12:30:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":629,"name":"Arcfestés, hajfonás, hennázás","description":"","start":"2016-07-16T11:00:00.000+02:00","end":"2016-07-16T12:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":584,"name":"jóZENEdó","description":"muzsika másnapra: JVV nemkomplett","start":"2016-07-16T11:30:00.000+02:00","end":"2016-07-16T13:00:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":556,"name":"Diákhálózat - 25 éve a felvidéki fiatalok szolgálatában\t","description":"\r\n\t\r\n\t\r\n\t","start":"2016-07-16T12:00:00.000+02:00","end":"2016-07-16T13:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":673,"name":"Gömöri templomtúra Szakállos Évával\t \t \t \t \t \t \t \t","description":"Előzetes jelentkezés a regisztrációnál","start":"2016-07-16T12:00:00.000+02:00","end":"2016-07-16T16:00:00.000+02:00"},{"id":498,"name":"Irodalmi Közös-ülés","description":" irodalmi összeruccanás bakelitekkel (hozunk lemezjátszót, lemezeket, magunkat és a vendégeinket).\t\r\n\t\r\n\t\r\n\t","start":"2016-07-16T12:00:00.000+02:00","end":"2016-07-16T14:00:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":635,"name":"Tematikus foglalkozások","description":"","start":"2016-07-16T12:00:00.000+02:00","end":"2016-07-16T14:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":605,"name":"Csak egy mondat...","description":"Workshopnak nem nevezhető, kötetlen közös versírás a bármi és mindenről.","start":"2016-07-16T12:30:00.000+02:00","end":"2016-07-16T14:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":521,"name":"Playback színházi előadás","description":"játszd vissza az életed!","start":"2016-07-16T12:30:00.000+02:00","end":"2016-07-16T14:30:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":585,"name":"Pozsonyi mesék ","description":"Mesedélután Garajszki Margittal\t \t","start":"2016-07-16T13:00:00.000+02:00","end":"2016-07-16T14:00:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":609,"name":"Mesél a bolygó","description":"Mesefelolvasás Tomovič Miri és Gyenge Veroni előadásában a legkisebbeknek és mindenkinek, akiben ott bújik még a gyermek.\t\r\n\t","start":"2016-07-16T14:00:00.000+02:00","end":"2016-07-16T15:00:00.000+02:00","location":"B-612","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":557,"name":"Nemzeti mítoszok a magyar, szlovák és román társadalmakban","description":"Generációkat befolyásoló előítéletek, amelyek csak nehezítik a probléma mentes együttlélést. De miért? Akik tiszta vizet öntenek a pohárba: Vörös László (SAV), Zahorán Csaba és Patakfalvi Czirják Ágnes. Moderátor: Hangácsi István.","start":"2016-07-16T14:00:00.000+02:00","end":"2016-07-16T15:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":484,"name":"Beszélgetés és felolvasás a MÁSIK tagjaival","description":"Kovács Krisztián, Mucha Attila - mindig egy másik\t\r\n\t\r\n\t","start":"2016-07-16T14:00:00.000+02:00","end":"2016-07-16T15:30:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":525,"name":"Építő kocka vs. mobiltelefon","description":"Fontos, hogy figyeljünk a képességeinkre? - Hlavácsek Réka konduktor, fejlesztő pedagógus workshopja\r\n\r\n","start":"2016-07-16T15:00:00.000+02:00","end":"2016-07-16T16:30:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":587,"name":"Slam Poetry Felvidék+ópenmájk","description":"Egy közös délután a felvidéki slam szófacsaróival. Itt lesz mindenki, aki számít...meg aki nem!\r\n Hozd a szöveged és slamszűztelenítsd magad!!","start":"2016-07-16T15:00:00.000+02:00","end":"2016-07-16T17:00:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":645,"name":"Foglalkozások, játék","description":"","start":"2016-07-16T15:00:00.000+02:00","end":"2016-07-16T18:30:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":524,"name":"Párkacspolati workshop, tanácsadás","description":"","start":"2016-07-16T15:00:00.000+02:00","end":"2016-07-16T17:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":558,"name":"Integráció vagy terrorizmus \t \t \t \t","description":"Az iszlám közösségek állapota Európában","start":"2016-07-16T15:30:00.000+02:00","end":"2016-07-16T17:30:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":499,"name":"Soltész Béla Inbox és Hátizsákkal Brazíliában","description":"(novella, útikönyv) kötetbemutató - moderátor: Mucha Attila\t\r\n\t\r\n\t","start":"2016-07-16T15:30:00.000+02:00","end":"2016-07-16T17:00:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":616,"name":"Huncut kora esti mesék Szeleczki Moncsival\t \t","description":"","start":"2016-07-16T17:00:00.000+02:00","end":"2016-07-16T18:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":500,"name":"Laboda Róbert: Én csak néztem","description":"rendhagyó kötet előtti bemutató és beszélgetés a szerzővel, moderátor: Mucha Dorka\t\r\n\t","start":"2016-07-16T17:00:00.000+02:00","end":"2016-07-16T18:00:00.000+02:00","location":"Márai Sándor  sátor","partner":"MÁSIK","logo":null},{"id":559,"name":"Kiállítás Komka Péter képeiből","description":"A kiállítást megnyitja Németh Zsolt, az Országgyűlés Külügyi bizottságának elnöke\t","start":"2016-07-16T17:30:00.000+02:00","end":"2016-07-16T18:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":501,"name":"Bödők Gergely: Magyarország Nagy háborúja","description":"Mindennapi élet a hátországban és a frontokon.\t\r\n\t\r\n\t","start":"2016-07-16T18:00:00.000+02:00","end":"2016-07-16T19:30:00.000+02:00","location":"Márai Sándor  sátor"},{"id":530,"name":"Vágyakból valóság, avagy az eredményes élet","description":"Szűcs István karriertanácsadó, tréner előadása ","start":"2016-07-16T18:00:00.000+02:00","end":"2016-07-16T19:30:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":588,"name":"Nézőművészeti Kft \u0026 Manna: Soha senkinek","description":"“Vajon a gondolatokat ki lehet fehéríteni hibajavítóval, mint az írást? És az érzelmeket? Fel kéne találni.” \r\nAz előadást 15 éves kor felett ajánljuk!","start":"2016-07-16T18:00:00.000+02:00","end":"2016-07-16T19:30:00.000+02:00","location":"Pajtaszínház","partner":"Gurigongo Symposium","logo":"/uploads/images/image_GHgJBuTdEN0.png"},{"id":560,"name":"Tesztoszteronmentes irodalom?","description":"Van-e neme az irodalomnak? És a fordításnak? Írók, költők, fordítók, tudósok egymás közt.\t\r\n\t\r\n\t","start":"2016-07-16T18:00:00.000+02:00","end":"2016-07-16T19:30:00.000+02:00","location":"Közbeszéd nagysátor","partner":"Phoenix PT","logo":null},{"id":561,"name":"Mennyország tourist!","description":"Franciaországi EB-élménybeszámolók + vetítés (gólösszefoglaló) Vendég: Gazdag József és a trollfocis adminok Moderátor: Földváry István\t\r\n\t\r\n\t","start":"2016-07-16T19:30:00.000+02:00","end":"2016-07-16T21:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":671,"name":"Nők a médiában","description":" Bodó Mária (MTVA) televíziós és rádiós szerkesztő-műsorvezető, Durica Kati (ELLE magazin, index) író, újságíró és Sztankó Annamária (a trafik.sk főszerkesztője) és vendégeik beszélgetnek a \"te csak maradj csöndben és legyél csinos\" jelenségről,  \"belpolitika? te? írj inkább szépségtippeket!\" beszólásokról, és a nők médiában való megjelenéséről - megjelenítéséről. Várunk minden lányt és fiút, aki médiában szeretne dolgozni, próbálkozik a blogolással vagy a kulisszák mögé akar látni.\t","start":"2016-07-16T19:30:00.000+02:00","end":"2016-07-16T21:00:00.000+02:00","location":"Márai Sándor  sátor"},{"id":531,"name":"Es(z)ti mesék a VándorLással","description":" Mátis Iván: India színei","start":"2016-07-16T20:00:00.000+02:00","end":"2016-07-16T21:00:00.000+02:00","location":"Labirintus Udvar","partner":"TANDEM n.o.","logo":"/uploads/images/image_XxBP0DgVa5z.png"},{"id":658,"name":"Spliff 447 koncert","description":"","start":"2016-07-16T20:30:00.000+02:00","end":"2016-07-16T22:00:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":659,"name":"KFT koncert","description":"","start":"2016-07-16T22:00:00.000+02:00","end":"2016-07-16T23:30:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":660,"name":"Besh o droM koncert","description":"","start":"2016-07-16T23:30:00.000+02:00","end":"2016-07-17T01:00:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":572,"name":"Vizes ügyességi versenyek és vizespóló\t \t \t \t","description":"","start":"2016-07-17T09:00:00.000+02:00","end":"2016-07-17T11:00:00.000+02:00","partner":"Csapatjáték","logo":"/uploads/images/image_HrnIKm64vl9.png"},{"id":596,"name":"#kávé #cigi #irodalom\t \t \t","description":"","start":"2016-07-17T09:30:00.000+02:00","end":"2016-07-17T11:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":624,"name":"Reggeli játék és torna","description":"","start":"2016-07-17T10:00:00.000+02:00","end":"2016-07-17T11:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":670,"name":"Klasszikus zenei sátor","description":"","start":"2016-07-17T10:00:00.000+02:00","end":"2016-07-17T17:00:00.000+02:00","location":"Korona  sátor","partner":"Korona","logo":"/uploads/images/image_plaOGdQR57K.png"},{"id":601,"name":"#folyamatosjelen\t \t","description":"déli meditálás  Bokor Krisztiánnal","start":"2016-07-17T11:00:00.000+02:00","end":"2016-07-17T12:30:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":630,"name":"Arcfestés, hajfonás, hennázás","description":"","start":"2016-07-17T11:00:00.000+02:00","end":"2016-07-17T12:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":589,"name":"Istentisztelet","description":"","start":"2016-07-17T11:00:00.000+02:00","end":"2016-07-17T12:00:00.000+02:00","location":"Pajtaszínház"},{"id":636,"name":"Tematikus foglalkozások","description":"","start":"2016-07-17T12:00:00.000+02:00","end":"2016-07-17T14:00:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":606,"name":"Random arcok zenéje \t \t","description":"Hoztál hangszert? Zenélj nekünk!","start":"2016-07-17T12:30:00.000+02:00","end":"2016-07-17T14:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":674,"name":"Kirándulás a betléri kastélyba.","description":"Előzetes jelentkezés a regisztrációnál\t\r\n\t\r\n\t\r\n\t","start":"2016-07-17T13:00:00.000+02:00","end":"2016-07-17T14:30:00.000+02:00"},{"id":590,"name":"Építészeti pecha kucha","description":"bemutatkozik a Fiatal Építészek Fóruma.","start":"2016-07-17T13:00:00.000+02:00","end":"2016-07-17T14:30:00.000+02:00","location":"Pajtaszínház"},{"id":610,"name":"Mesél a bolygó  \t","description":"Mesefelolvasás Tomovič Miri és Gyenge Veroni előadásában a legkisebbeknek és mindenkinek, akiben ott bújik még a gyermek.","start":"2016-07-17T14:00:00.000+02:00","end":"2016-07-17T15:00:00.000+02:00","location":"B-612","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":646,"name":"Foglalkozások, játék","description":"","start":"2016-07-17T15:00:00.000+02:00","end":"2016-07-17T18:30:00.000+02:00","location":"Gombaovi","partner":"Gombaovi","logo":"/uploads/images/image_yAPf0YC9wRk.png"},{"id":573,"name":"Iszapbírkózás\t \t \t \t","description":"","start":"2016-07-17T15:00:00.000+02:00","end":"2016-07-17T17:00:00.000+02:00","partner":"Csapatjáték","logo":"/uploads/images/image_HrnIKm64vl9.png"},{"id":562,"name":"Felvidéki kaland, afrikai kitérővel - könyvbemutató","description":"Durica Katarina legújabb regényének, a Szlovákul szeretni kötetbemutatója. Az írónővel Sántha Szilárd beszélget, majd nagy világirodalmi kvíz értékes nyereményekért\t\r\n\t","start":"2016-07-17T15:00:00.000+02:00","end":"2016-07-17T16:00:00.000+02:00","location":"Közbeszéd nagysátor"},{"id":617,"name":"Huncut kora esti mesék Szeleczki Moncsival\t \t","description":"","start":"2016-07-17T17:00:00.000+02:00","end":"2016-07-17T18:00:00.000+02:00","location":"B-612","partner":"JuGyIK","logo":null},{"id":661,"name":"East Wing Group koncert","description":"","start":"2016-07-17T18:00:00.000+02:00","end":"2016-07-17T19:00:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":662,"name":"Korpás Éva koncert","description":"","start":"2016-07-17T19:00:00.000+02:00","end":"2016-07-17T20:00:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":663,"name":"Budapest Bár koncert","description":"","start":"2016-07-17T20:00:00.000+02:00","end":"2016-07-17T21:30:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":664,"name":"Kistehén koncert","description":"","start":"2016-07-17T21:30:00.000+02:00","end":"2016-07-17T23:00:00.000+02:00","location":"Nagyszínpad","partner":"Koncert","logo":"/uploads/images/image_1pMIjSiGxbv.png"},{"id":574,"name":"Eredményhirdetés","description":"","start":"2016-07-17T22:30:00.000+02:00","end":"2016-07-17T23:30:00.000+02:00","partner":"Csapatjáték","logo":"/uploads/images/image_HrnIKm64vl9.png"},{"id":676,"name":"Partibuszok indulása hazafelé","description":"","start":"2016-07-18T09:00:00.000+02:00","end":"2016-07-18T09:01:00.000+02:00"}
		]}.program;
	
	var getProgram = function(){
		$.get("api/program", function( data ) {
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
				setPosition();
			}, 300);
		});
}
