const protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", (request) => {
    return new Promise((resolve, reject) => {
        protocol.tile(request, (err, data, cache, expires) => {
            if (err) {
                reject(err);
            } else {
                resolve({ data: data, cache: cache, expires: expires });
            }
        });
    });
});

const map = new maplibregl.Map({
    container: 'map',
    center: [77.2093, 28.6139],
    zoom: 11,
    minZoom: 11,
    maxZoom: 20,
    antialias: true,
    style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
})

map.on('load', () => {
    map.addSource('safety-data', { type: 'vector', url: 'pmtiles://safety-score.pmtiles' })


    map.addLayer({
        id: 'safety-heatmap-layer',
        type: 'heatmap',
        source: 'safety-data',
        'source-layer': 'pts_grid_full_data_new',
        paint: {

            'heatmap-weight':

                ['interpolate', ['linear'], ['get', 'safety_score'], 0, 0, 350, 1]
            ,
            'heatmap-intensity': [
                'interpolate', ['linear'],
                ['zoom'], 0, 0.2, 15, 0.8],

            'heatmap-color': [
                'interpolate', ['linear'], ['heatmap-density'],
                0, 'rgba(255, 0, 255, 0)',
                0.1, 'rgb(255, 0, 255)',
                0.3, 'rgb(0, 0, 255)',
                0.5, 'rgb(0, 255, 255)',
                0.7, 'rgb(0, 255, 0)',
                0.9, 'rgb(255, 255, 0)',
                1, 'rgb(255, 0, 0)'],


            'heatmap-radius': [
                'interpolate', ['linear'],
                ['zoom'], 0, 5, 15, 15],
            'heatmap-opacity': 0.7

        }

    });
    map.addControl(new maplibregl.NavigationControl());


    map.on('error', (e) => {
        console.error("happy", e);
    });
})
const fromInput = document.getElementById('from-input');
const toInput = document.getElementById('to-input');
const suggestionBox = document.getElementById('suggestion-box');
const suggestionItems = document.querySelectorAll('#suggestions li');
let acitive = null;
let activeInput = null;

fromInput.addEventListener('input', (e) => {
    activeInput = e.target;
    getSuggestions(e.target.value);
});

toInput.addEventListener('input', (e) => {
    activeInput = e.target;
    getSuggestions(e.target.value);
});

async function getSuggestions(text) {
    if (text.length < 1) return;

    const url = `https://photon.komoot.io/api/?q=${text}&lat=28.6139&lon=77.2093&limit=5`;

    const response = await fetch(url);
    const data = await response.json();

    displaySuggestions(data.features);
}
function displaySuggestions(places) {
    const list = document.getElementById('suggestions');
    list.innerHTML = '';

    places.forEach(place => {
        const li = document.createElement('li');


        const placeName = place.properties.name + (place.properties.city ? `, ${place.properties.city}` : '');
        li.innerText = placeName;


        li.addEventListener('click', () => {
            if (activeInput) {
                activeInput.value = placeName;
                suggestionBox.classList.remove('active');


                const coords = place.geometry.coordinates;

            };
            activeInput = null;
        });

        list.appendChild(li);
    });

    suggestionBox.classList.add('active');
}
document.addEventListener('mousedown', (e) => {
    if (!suggestionBox.contains(e.target) && e.target !== fromInput && e.target !== toInput) {
        suggestionBox.classList.remove('active');
    }
});
