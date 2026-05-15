// Inicializa o mapa centralizado em Sorocaba
const map = L.map('map').setView([-23.5015, -47.4521], 13);

// Camada de mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// Ícone azul personalizado para os alfinetes
const blueIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Lista de Pontos de Coleta
const pontosColeta = [
    {
        nome: "Projeto Metareciclagem",
        endereco: "Av. Armando Sales de Oliveira, 762 - Vila Trujillo",
        horario: "Segunda a sexta, das 8h às 16h",
        coords: [-23.4938, -47.4645]
    },
    {
        nome: "Sema (Secretaria do Meio Ambiente)",
        endereco: "Rua Santa Maria, 197 - Vila Hortência",
        horario: "Horário comercial",
        detalhe: "Coletores Green Eletron para pilhas",
        coords: [-23.5055, -47.4428]
    },
    {
        nome: "Ecoponto Vila Helena",
        endereco: "Rua Roque Sampaio, 100 - Sorocaba",
        horario: "Consulte horários locais",
        coords: [-23.4682, -47.4851]
    },
    {
        nome: "FACENS / UniFacens",
        endereco: "Rodovia Senador José Ermírio de Moraes, 1425",
        horario: "Horário acadêmico",
        coords: [-23.4691, -47.4297]
    },
    {
        nome: "Carrefour Sônia Maria",
        endereco: "Av. Brasil, 376 - Vila Carvalho, Sorocaba",
        horario: "Horário do mercado",
        coords: [-23.4912, -47.4610]
    }
    // Adicione os outros pontos seguindo esse padrão de coordenadas
];

pontosColeta.forEach(ponto => {
    // Cria o link do Google Maps para a rota
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ponto.endereco)}`;
    
    // Cria o marcador no mapa
    const marker = L.marker(ponto.coords, {icon: blueIcon}).addTo(map);

    // Conteúdo do Popup (aparece ao clicar)
    const popupContent = `
        <div style="font-size: 14px;">
            <strong>${ponto.nome}</strong><br>
            <p style="margin: 5px 0;">${ponto.horario}</p>
            <p style="font-size: 12px; color: #555;">${ponto.endereco}</p>
            <a href="${googleMapsUrl}" target="_blank" style="display: block; margin-top: 10px; color: #007bff; text-decoration: none; font-weight: bold;">
                🚗 Traçar Rota (Google Maps)
            </a>
        </div>
    `;

    // Tooltip (aparece ao passar o mouse)
    marker.bindTooltip(ponto.nome);
    
    // Vincula o popup ao marcador
    marker.bindPopup(popupContent);

    // Evento de hover para abrir o popup automaticamente
    marker.on('mouseover', function (e) {
        this.openPopup();
    });
});