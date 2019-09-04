import L from "leaflet";

import dotenv from "dotenv";
import settings from "./settings.yaml";
import locations from "./data/locations.yaml";

dotenv.config();

const appMap = L.map("map", {
  style: settings.maps.style,
  center: [settings.maps.latitude, settings.maps.longitude],
  zoom: settings.maps.zoom_level
});

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}",
  {
    attribution: `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
      <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
      Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
    maxZoom: settings.maps.max_zoom_level,
    id: settings.maps.map_id,
    accessToken: process.env.MAPBOX_ACCESS_TOKEN
  }
).addTo(appMap);

const redPin = new L.Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

for (let i = 0; i < locations.length; i++) {
  const location = locations[i];
  const marker = L.marker([location.latitude, location.longitude], {
    icon: redPin
  }).addTo(appMap);
  marker.bindPopup(`${location.name}`);
}
