
const key = 'oKElpFQEJAR63mwH9eO6';
const map = L.map('map');

L.tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,{ 
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 1,
  attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
  crossOrigin: true
}).addTo(map);


var latitude = 21.0061832;
var longtitude = 105.8431307;

var marker = L.marker([latitude, longtitude]).addTo(map);
map.setView([latitude, longtitude],20)