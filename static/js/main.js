(function() {
const jqueryNoConflict = jQuery;

const mapboxToken = 'pk.eyJ1IjoibmpuY2FsdWIiLCJhIjoiY2swMHl0OHFsMmU0dTNsbWxxdzB3eDlteSJ9.PdEYA9RIhU-8jqJcQZCdyw';

const defaultLatitude = 3.1390;
const defaultLongitude = 101.6869;
const defaultZoomLevel = 13;
const maxZoomLevel = 18;

const map = L.map('map', {
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [defaultLatitude, defaultLongitude],
  zoom: defaultZoomLevel,
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}', {
  attribution: `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
    <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
    Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
  maxZoom: maxZoomLevel,
  id: 'mapbox.dark',
  accessToken: mapboxToken,
}).addTo(map);

const pin = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

jqueryNoConflict.getJSON('../../data/locations.json', loadLocations);

function loadLocations(locations) {
  for(let i = 0; i < locations.length; i++) {
    const location = locations[i];
    const marker = L.marker([location.latitude, location.longitude], {icon: pin}).addTo(map);
    marker.bindPopup(`${location.name}`);
  }
}
})();
