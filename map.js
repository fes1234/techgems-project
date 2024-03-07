// using this js to the indexedDB.html for googlemap
L.geoJSON(statesData, {
    style: function (feature) {
        return {
            color: "black",
            weight: 2,
            fillOpacity: 0.5
        };
    }
}).addTo(map);
// using this js to the indexedDB.html for googlemap





