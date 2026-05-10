// Inicializa o mapa focado em Sorocaba
const map = L.map('map').setView([-23.5015, -47.4521], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// Lista de pontos de coleta
const pontos = [
    {
        nome: "Projeto Metareciclagem",
        info: "Segunda a sexta, das 8h às 16h",
        coords: [-23.4947, -47.4645],
        link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Armando+Sales+de+Oliveira,+762+Sorocaba"
    },
    {
        nome: "Sema (Vila Hortência)",
        info: "Ponto oficial da prefeitura (Green Eletron)",
        coords: [-23.5085, -47.4432],
        link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Santa+Maria,+197+Sorocaba"
    },
    {
        nome: "Ecoponto Vila Helena",
        info: "Ideal para grandes volumes",
        coords: [-23.4682, -47.4795],
        link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Roque+Sampaio,+100+Sorocaba"
    }
];

// Adiciona os marcadores ao mapa
pontos.forEach(ponto => {
    L.marker(ponto.coords).addTo(map)
        .bindPopup(`
            <b>${ponto.nome}</b><br>
            ${ponto.info}<br><br>
            <a href="${ponto.link}" target="_blank" style="color: blue; text-decoration: underline;">
                Como chegar (Google Maps)
            </a>
        `);
});