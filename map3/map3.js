/* global L */
var map3Object = L.map('map3Div').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map3Object)
var stateUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateUrl, function (data) {
  var stateStyle = function (feature) {
    var males = feature.properties.MALES
    var females = feature.properties.FEMALES
    var stateColor = 'blue'
    if (males < females) { stateColor = 'red' }
    return {
      color: stateColor,
      weight: 1,
      fillOpacity: 0.3,
      fill: true
    }
  }
  var popup = function (feature, layer) {
    var name = feature.properties.STATE_NAME
    var males = feature.properties.MALES
    var females = feature.properties.FEMALES
    layer.bindPopup('State name: ' + name + '<br>Males: ' + males + '<br>Females: ' + females)
  }
  var options = {
    style: stateStyle,
    onEachFeature: popup
  }
  L.geoJSON(data, options).addTo(map3Object)
})
