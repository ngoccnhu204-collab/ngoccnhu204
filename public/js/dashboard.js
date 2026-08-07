// =======================
// KHỞI TẠO BẢN ĐỒ LEAFLET
// =======================


// Tạo bản đồ trung tâm Việt Nam

var map = L.map('map').setView(
    [21.0285, 105.8542],
    12
);


// Thêm bản đồ nền OpenStreetMap

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution:
        '&copy; OpenStreetMap contributors'
    }
).addTo(map);


// Dữ liệu vị trí khí hậu Hà Nội

const locations = [

    {
        lat: 21.0285,
        lng: 105.8542,
        name: "Trung tâm",
        temp: 28.5,
        humidity: 65,
        rain: 120
    },


    {
        lat: 21.0456,
        lng: 105.8324,
        name: "Phía Bắc",
        temp: 26.2,
        humidity: 72,
        rain: 150
    },


    {
        lat: 21.0123,
        lng: 105.8765,
        name: "Phía Nam",
        temp: 29.8,
        humidity: 58,
        rain: 90
    }

];


// =======================
// HIỂN THỊ ĐIỂM TRÊN MAP
// =======================

locations.forEach(function(loc){


    L.marker([
        loc.lat,
        loc.lng
    ])

    .addTo(map)

    .bindPopup(`

        <b>${loc.name}</b><br>

        🌡️ Nhiệt độ:
        ${loc.temp} °C

        <br>

        🌧️ Lượng mưa:
        ${loc.rain} mm

        <br>

        💧 Độ ẩm:
        ${loc.humidity} %

    `);


});
// =======================
// BIỂU ĐỒ KHÍ HẬU
// =======================


const ctx = document
    .getElementById('rainChart')
    .getContext('2d');


new Chart(ctx, {

    type: 'line',

    data: {

        // Trục thời gian
        labels: [
            'Tháng 1',
            'Tháng 2',
            'Tháng 3',
            'Tháng 4',
            'Tháng 5',
            'Tháng 6'
        ],


        datasets: [

            {

                label:
                '🌧️ Lượng mưa (mm)',


                data:[
                    50,
                    80,
                    120,
                    180,
                    250,
                    300
                ],


                borderColor:'#2563eb',

                backgroundColor:
                'rgba(37,99,235,0.1)',


                tension:0.4,

                fill:true

            },


            {

                label:
                '🌡️ Nhiệt độ (°C)',


                data:[
                    22,
                    24,
                    26,
                    28,
                    30,
                    31
                ],


                borderColor:'#ef4444',

                backgroundColor:
                'rgba(239,68,68,0.1)',


                tension:0.4,

                fill:true

            }

        ]

    },


    options:{

        responsive:true,


        plugins:{

            legend:{

                display:true

            }

        },


        scales:{

            y:{

                beginAtZero:true

            }

        }

    }


});
locations.forEach(loc => {

    L.marker([loc.lat, loc.lng])
        .addTo(map)
        .bindPopup(`
            <b>${loc.name}</b><br>
            🌡️ Nhiệt độ: ${loc.temp}°C<br>
            💧 Độ ẩm: ${loc.humidity}%<br>
            🌧️ Lượng mưa: ${loc.rain} mm
        `);

});
L.circle([loc.lat, loc.lng], {
    radius: 2000,
    color: "blue",
    fillColor: "#3b82f6",
    fillOpacity: 0.2
}).addTo(map);
function toggleLayer(type){

    if(type === "temperature"){
        alert("Hiển thị lớp Nhiệt độ");
    }

    if(type === "humidity"){
        alert("Hiển thị lớp Độ ẩm");
    }

    if(type === "green"){
        alert("Hiển thị lớp Cây xanh");
    }

}