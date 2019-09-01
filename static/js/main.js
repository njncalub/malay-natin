(function() {

const mapBoxToken = 'pk.eyJ1IjoibmpuY2FsdWIiLCJhIjoiY2swMHl0OHFsMmU0dTNsbWxxdzB3eDlteSJ9.PdEYA9RIhU-8jqJcQZCdyw';
const defaultLocation = [3.1390, 101.6869];
const defaultZoomLevel = 9;
const maxZoomLevel = 18;

const map = L.map('map', {
  style: 'mapbox://styles/mapbox/dark-v10',
  center: defaultLocation,
  zoom: defaultZoomLevel,
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}', {
  attribution: `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
    <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
    Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
  maxZoom: maxZoomLevel,
  id: 'mapbox.dark',
  accessToken: mapBoxToken,
}).addTo(map);

})();
