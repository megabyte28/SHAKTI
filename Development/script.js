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
const navBtn = document.getElementById('nav-btn');
let acitive = null;
let activeInput = null;
let startCoords = null;
let endCoords = null;
let navMarker = null;
function createNavMarker(coords) {
    const el = document.createElement('div');
    el.className = 'navigation-arrow';
    el.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 100 100">
            <path d="M50 10 L90 90 L50 75 L10 90 Z" fill="white" stroke="black" stroke-width="5" stroke-linejoin="round"/>
        </svg>`;

    navMarker = new maplibregl.Marker({
        element: el,
        rotationAlignment: 'map',
        pitchAlignment: 'map'
    })
        .setLngLat(coords)
        .addTo(map);
};
function startLiveTracking() {
    if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition((position) => {
            const { longitude, latitude, heading } = position.coords;
            const currentPos = [longitude, latitude];
            if (!navMarker) createNavMarker(currentPos);
            else navMarker.setLngLat(currentPos);
            if (heading !== null) navMarker.setRotation(heading);
            map.easeTo({
                center: startCoords,
                pitch: 60,
                zoom: 18,
                bearing: heading || 0,
                duration: 1000
            });
        }, (err) => console.error(err), { enableHighAccuracy: true });
    }
};
function checkInput() {
    const fromValue = fromInput.value.trim();
    const toValue = toInput.value.trim();
    if (fromValue !== "" && toValue !== "") {
        navBtn.classList.add('active');
    }
    else {
        navBtn.classList.remove('active');
    }
}
fromInput.addEventListener('input', (e) => {
    activeInput = e.target;
    getSuggestions(e.target.value);
    checkInput();
});

toInput.addEventListener('input', (e) => {
    activeInput = e.target;
    getSuggestions(e.target.value);
    checkInput();
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

    const locationLi = document.createElement('li');
    locationLi.innerHTML = "<strong>Use Current Location</strong>";
    locationLi.classList.add('current-location-item');

    locationLi.addEventListener('click', () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const coords = [position.coords.longitude, position.coords.latitude];

                if (activeInput) {
                    activeInput.value = "Your Location";
                    suggestionBox.classList.remove('active');


                    if (activeInput.id === 'from-input') {
                        startCoords = coords;
                    } else {
                        endCoords = coords;
                    }
                    checkInput();
                }
            }, (err) => {
                alert("Location access denied or unavailable.");
                console.error(err);
            });
        }
    });
    list.appendChild(locationLi);

    places.forEach(place => {
        const li = document.createElement('li');


        const placeName = place.properties.name + (place.properties.city ? `, ${place.properties.city}` : '');
        li.innerText = placeName;


        li.addEventListener('click', () => {
            if (activeInput) {
                activeInput.value = placeName;
                suggestionBox.classList.remove('active');
                const coords = place.geometry.coordinates;
                if (activeInput.id === 'from-input') {
                    startCoords = coords;
                }
                else {
                    endCoords = coords;
                }
            };
            checkInput();
            activeInput = null;

        });

        list.appendChild(li);
    });

    suggestionBox.classList.add('active');
}
async function getRoutes() {
    const url = "https://api.openrouteservice.org/v2/directions/driving-car/geojson";
    const Apikey = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjJiZTE3NjMzYWJiNDQ0Y2M5Y2EzYTg1N2QwNzBkYzc5IiwiaCI6Im11cm11cjY0In0="

    const body = {
        coordinates: [startCoords, endCoords],
        alternative_routes: { target_count: 3 },
        units: 'm'
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': Apikey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();
    return data.features;
}
function CalculateRouteSafety(route) {
    const coords = route.geometry.coordinates;
    let totalScore = 0;
    let pointsCount = 0;
    const zoom = map.getZoom();
    for (let i = 0; i < coords.length; i += 10) {
        const point = coords[i];
        const lat = point[1];
        const pixel = map.project(point);
        const metersperpixel = (Math.cos(lat * Math.PI / 180) * 2 * Math.PI * 6378137) / (256 * Math.pow(2, zoom));
        const radiusinpixel = 72.5 / metersperpixel;
        const bbox = [[pixel.x - radiusinpixel, pixel.y - radiusinpixel], [pixel.x + radiusinpixel, pixel.y + radiusinpixel]]
        const features = map.queryRenderedFeatures(bbox, { layers: ['safety-heatmap-layer'] });
        const sum = features.reduce((s, f) => s + (f.properties.safety_score || 0), 0);
        const avg = sum / features.length;
        totalScore += avg;
        pointsCount++;
    }
    return totalScore / pointsCount;
}

function drawRoute(routeGeojson) {
    if (map.getLayer('route-line')) {
        map.removeLayer('route-line');
    }

    if (map.getSource('route-source')) {
        map.removeSource('route-source');
    }
    map.addSource('route-source', { type: 'geojson', data: routeGeojson });
    map.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route-source',
        paint: {
            'line-color': '#bc13fe',
            'line-width': 5,
            'line-opacity': 0.8
        }
    })
};
async function startNavigation() {
    const routes = await getRoutes();
    let safestRoute = routes[0];
    let highestSafety = -1;
    routes.forEach((route) => {
        const score = CalculateRouteSafety(route);
        if (score > highestSafety) {
            highestSafety = score;
            safestRoute = route;
        }
        drawRoute(safestRoute);
        startLiveTracking();
    })
    startLiveTracking();
};
document.addEventListener('mousedown', (e) => {
    if (!suggestionBox.contains(e.target) && e.target !== fromInput && e.target !== toInput) {
        suggestionBox.classList.remove('active');
    }
});
navBtn.addEventListener('click', () => {
    if (map.getLayer('safety-heatmap-layer')) {
        map.setLayoutProperty('safety-heatmap-layer', 'visibility', 'none');
        suggestionBox.classList.remove('active');
        navBtn.classList.remove('active');
        startNavigation();
    }
})
