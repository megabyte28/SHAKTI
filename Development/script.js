const protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol);

const map = new maplibregl.Map({
    container: 'map',
    center: [77.2093, 28.6139],
    zoom: 11,
    minZoom: 11,
    maxZoom: 20,
    antialias: true,
    style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    //0--whole map
    //11-- city levels
    //18-- point levels
})

map.on('load', () => {
    map.addSource('safety-data', { type: 'vector', url: 'pmtiles://./safety-score.pmtiles' })
    
    map.addLayer({
        id:'test-points',
        type:'circle',
        source:'safety-data',
        'source-layer':'pts_grid_full_data',
        paints:{
            'circle-radius':5,
            'circle-color':'red'
        }
    })
    map.addLayer({
        id: 'safety-heatmap-layer',
        type: 'heatmap',
        source: 'safety-data',
        'source-layer': 'pts_grid_full_data',
        paint: {
            // range is 0–350 as you said, but raw values are small so we scale
            'heatmap-weight': 
                
                ['interpolate', ['linear'], ['get', 'safety_score'], 0, 0, 10, 1]
                         // multiply by a constant to boost density
            ,

            'heatmap-intensity': [
                'interpolate', ['linear'],
                ['zoom'], 0, 1, 15, 3],

            'heatmap-color': [
                'interpolate', ['linear'], ['heatmap-density'],
                0, 'rgba(0,0,0,0)',
                // densities in these tiles are extremely small, so start coloring early
                0.005, 'rgb(255,0,0)',
                0.01, 'rgb(255,165,0)',
                0.02, 'rgb(255,255,0)',
                0.05, 'rgb(0,255,0)'],

            'heatmap-radius': [
                'interpolate', ['linear'],
                ['zoom'], 0, 2, 15, 20
            ],
            'heatmap-opacity': 0.8

        }
    })

    // add navigation controls so users can zoom with buttons
    map.addControl(new maplibregl.NavigationControl());

    // log errors to console for debugging
    map.on('error', (e) => console.error('map error', e));
})