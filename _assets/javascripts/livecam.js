if ($("#livepic").length > 0) {
	setInterval(function() {
		$("#livepic").attr("src", "http://kadbudapest.hu/gombcam/igynezkimostakemping.jpg?"+new Date().getTime());
	}, 20000)
}

if ($("#weatherwrap").length > 0) {

	function fillZeros(st){
		if((st.toString().length)<2){
			return "0" + st;
		}
		return st;
	}

	function K2C(kelvin) {  
		return Math.round(kelvin-273.15);
	}  

	function renderWeather(wData) {
		var wIconWrap = document.getElementById("weatherimage");
		while (wIconWrap.firstChild) {
			wIconWrap.removeChild(wIconWrap.firstChild);
		}
		var imgNode = document.createElement("IMG");
		imgNode.setAttribute("class", "weatherimage-image");
		imgNode.setAttribute("src", "img/wms/" + wData.weather[0].icon + ".png");
		wIconWrap.appendChild(imgNode);

		var wTemp = document.getElementById("weathertemp");
		wTemp.innerHTML = K2C(wData.main.temp) + " ℃";

		var wPressure = document.getElementById("weatherpressure");
		wPressure.innerHTML = "Légnyomás: " + wData.main.sea_level + " hPa";

		var wHumid = document.getElementById("weatherhumidity");
		wHumid.innerHTML = "Páratartalom: " + wData.main.humidity + "%";

		var wSun = document.getElementById("weathersun");
		var sunRise = new Date(parseInt(wData.sys.sunrise*1000));
		// console.log("Napkelte: " + wData.sys.sunrise + ", " + (new Date(1476594047)));
		var sunSet = new Date(wData.sys.sunset*1000);
		wSun.innerHTML = "Napkelte: " + fillZeros(sunRise.getHours()) + ":" + fillZeros(sunRise.getMinutes()) + ", naplemente: " + fillZeros(sunSet.getHours()) + ":" + fillZeros(sunSet.getMinutes());
	}

	function updateWeather() {
		var xmlhttp=new XMLHttpRequest();
		var rnsr = Math.round(Math.random()*19182);
		xmlhttp.open("GET", 'http://api.openweathermap.org/data/2.5/weather?lat=48.563488&lon=20.467229&appid=251c4ed706476f19a5e8569a4068df4d');
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4) {
				if(xmlhttp.status === 200){
					var wData = JSON.parse(xmlhttp.responseText);
					renderWeather(wData);
					console.log(wData.main);
				}else{
					console.log('News download error: ' + xmlhttp.statusText )
				}
			}
		}
		xmlhttp.send();
	}

	updateWeather();

	setInterval(function() {
		updateWeather();
	}, 200000)
}

