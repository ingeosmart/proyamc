	var map = L.map('map').setView([7.887271306, -72.473073751],16)

		var gato2 = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		maxZoom: 19
		}).addTo(map);
		
		var csevilla = L.tileLayer('./sevilla2/{z}/{x}/{y}.png', {
        minZoom: 8,
        maxZoom: 20,
        tms: false,
        attribution: 'Equipo SIG Área Metropolitana de Cúcuta'
      }).addTo(map);

	document.getElementById('select-location').addEventListener('change',function(e){
	var coords = e.target.value.split(",");
	map.flyTo(coords,19);
	})


		var punto = L.marker([7.887271306, -72.473073751]).addTo(map);
		punto.addTo(map);
		punto.bindPopup('<center>¿Quieres Verme en 3D?</center><br> <a href="https://ingeosmart.github.io/modelo3d/" target="_blank"><center>Da click AQUI</center></a>');
		
		var cplanta5 = L.tileLayer('./planta55/{z}/{x}/{y}.png', {
        minZoom: 8,
        maxZoom: 20,
        tms: false,
        attribution: 'Equipo SIG Área Metropolitana de Cúcuta'
      }).addTo(map);
	  
		var cplanta4 = L.tileLayer('./planta44/{z}/{x}/{y}.png', {
        minZoom: 8,
        maxZoom: 20,
        tms: false,
        attribution: 'Equipo SIG Área Metropolitana de Cúcuta'
      }).addTo(map);
		
		var cplanta3 = L.tileLayer('./planta33/{z}/{x}/{y}.png', {
        minZoom: 10,
        maxZoom: 20,
        tms: false,
        attribution: 'Equipo SIG Área Metropolitana de Cúcuta'
      }).addTo(map);
		
		var cplanta2 = L.tileLayer('./planta22/{z}/{x}/{y}.png', {
        minZoom: 8,
        maxZoom: 20,
        tms: false,
        attribution: 'Equipo SIG Área Metropolitana de Cúcuta'
      }).addTo(map);
		
		var cplanta1 = L.tileLayer('./planta11//{z}/{x}/{y}.png', {
        minZoom: 8,
        maxZoom: 20,
        tms: false,
        attribution: 'Equipo SIG Área Metropolitana de Cúcuta'
      }).addTo(map);
			  
		
		var baseMaps = {
		"Mapa Satelital": gato2
		};
		
		var overlayMaps = {
		"Planta 5": cplanta5,
		"Planta 4": cplanta4,
		"Planta 3": cplanta3,
		"Planta 2": cplanta2,
		"Planta 1": cplanta1
		};
	  

L.control.layers(overlayMaps).addTo(map);
