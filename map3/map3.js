/* global L */
var map3Object = L.map('map3Div').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map3Object)
var stateUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateUrl, function (data) {
  L.geoJSON(data, { style: { color: 'green' } }).addTo(map3Object)
})
