const map = new maplibregl.Map({
    container: 'map',
    center: [77.2093, 28.6139],
    zoom: 11,
    minZoom: 2,
    maxZoom: 20,
    antialias: true,
    style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    //0--whole map
    //11-- city levels
    //18-- point levels
})

Map.on('load', () => {
    map.addSource('safety-data', { type: 'vector', url: 'pmtiles://safety-score.pmtiles' })
})

Map.addlayer({
    id: 'safety-heatmap-layer',
    type: 'heatmap',
    source: 'safety-data',
    'source-layer': 'pts_grid_full_data',
    paint: {
        'heatmap-weight': [
            'interpolate', ['linear']
            ['get', 'safety_score'],
            0, 0, 350, 1],

        'heatmap-intensity': [
            'interpolate', ['linear'],
            ['zoom'], 0, 1, 15, 3],

        'heat-color': [
            'interpolate', ['linear'], ['heatmap-density'],
            0, 'rgba(0,0,0,0)',
            0.2, 'rgb(255,0,0)',
            0.4, 'rgb(255,165,0)',
            0.6, 'rgb(255,255,0)',
            1, 'rgb(0,255,0)'],

        'heatmap-radius': [
            'interpolate', ['linear'],
            ['zoom'], 0, 2, 15, 20
        ],
        'heatmap-opacity': 0.8


    }


})