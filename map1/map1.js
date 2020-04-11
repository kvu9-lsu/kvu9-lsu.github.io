/* global L */
var map1Object = L.map('map1Div').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map1Object)
var nolaMarker = L.marker([30, -90]).addTo(map1Object)
var triangle = L.polygon([
  [31, -88],
  [35, -88],
  [32, -82]
]).addTo(map1Object)
var brlaBox = L.polygon([
  [31.45, -90.17],
  [31.45, -92.17],
  [29.45, -92.17],
  [29.45, -90.17]
], { color: 'yellow' }).addTo(map1Object)
var bridge = L.polyline([
  [30.02, -90.15],
  [30.36, -90.09]], { color: 'red' }).addTo(map1Object)
triangle.bindPopup('Your polygon popup text here.')
nolaMarker.bindPopup('Your marker popup text here.')
brlaBox.bindPopup('A box around Baton Rouge, LA.')
bridge.bindPopup('This is a bridge across Lake Pontchartrain.')
