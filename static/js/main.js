(function() {

const mapBoxToken = 'pk.eyJ1IjoibmpuY2FsdWIiLCJhIjoiY2swMHl0OHFsMmU0dTNsbWxxdzB3eDlteSJ9.PdEYA9RIhU-8jqJcQZCdyw';
const defaultLocation = [3.1390, 101.6869];
const defaultZoomLevel = 10;
const maxZoomLevel = 18;

const map = L.map('mapid').setView(defaultLocation, defaultZoomLevel);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
    <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
    Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>`,
  maxZoom: maxZoomLevel,
  id: 'mapbox.streets',
  accessToken: mapBoxToken,
}).addTo(map);

})();