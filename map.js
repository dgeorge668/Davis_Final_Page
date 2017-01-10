//Javascript for map, based off a design from Andy Maloney.

var map = L.map( 'map', {
    layers: MQ.mapLayer(),
    center: [35, -55],
    minZoom: 2,
    zoom: 3
});

var myURL = jQuery( 'script[src$="map.js"]' ).attr( 'src' ).replace( 'map.js', '' );

var myIcon = L.icon({
    iconUrl: myURL + 'pin24.png',
    iconRetinaUrl: myURL + 'pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

var myCurrentIcon = L.icon({
    iconUrl: myURL + 'pin.svg',
    iconRetinaUrl: myURL + 'pin.svg',
    iconSize: [58, 48],
    iconAnchor: [18, 42],
    popupAnchor: [0, -32]
});

L.marker( [41.8236, -71.4222], {icon: myCurrentIcon} )
      .bindPopup('<b> Providence, RI </b><br> 2014-Present' )
      .addTo( map );

for ( var i=0; i < markers.length; i++ ) 
{
   var marker = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
      .bindPopup('<b>' + markers[i].name + '</b><br>' + markers[i].time )
      .addTo( map );
}
