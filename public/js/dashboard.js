window.map = L.map("map", {
    center: [10.8231, 106.6297],
    zoom: 10,
    zoomControl: true
});

L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
        maxZoom: 20,
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        subdomains: "abcd"
    }
).addTo(window.map);

setTimeout(() => {
    window.map.invalidateSize(true);
}, 500);