document.addEventListener('DOMContentLoaded', function() {
    const coordInputs = document.querySelectorAll('input[type="text"]');
    const redrawButton = document.getElementById('redrawButton');
    const polygon = document.getElementById('polygon');
    const savePolygonButton = document.getElementById('savePolygonButton');
    const displayPolygonsButton = document.getElementById('displayPolygonsButton');
    const svgCanvas = document.getElementById('svgCanvas');
    const polygonList = document.getElementById('polygonList');
    const selectedPolygonCoords = document.getElementById('selectedPolygonCoords');
    const polygons = [];

    function redrawPolygon() {
        let points = '';
        const svgWidth = svgCanvas.getAttribute('width');
        const svgHeight = svgCanvas.getAttribute('height');

        coordInputs.forEach(input => {
            const value = input.value.trim();
            if (value) {
                const coords = value.split(' ');
                if (coords.length === 2) {
                    let x = parseFloat(coords[0]);
                    let y = parseFloat(coords[1]);

                    if (x > svgWidth) x = svgWidth;
                    if (y > svgHeight) y = svgHeight;

                    points += `${x},${y} `;
                }
            }
        });
        points = points.trim();
        polygon.setAttribute('points', points);
    }


    function savePolygon() {
        const points = polygon.getAttribute('points');
        if (points) {
            const id = 'polygon-' + Date.now();
            polygons.push({ id, points });
            displayPolygonList();
        }
    }

    function displayPolygonList() {
        polygonList.innerHTML = '';
        polygons.forEach(polygon => {
            const li = document.createElement('li');
            li.textContent = polygon.id;
            li.addEventListener('mouseover', function() {
                document.getElementById(polygon.id).style.stroke = 'red';
            });
            li.addEventListener('mouseout', function() {
                document.getElementById(polygon.id).style.stroke = 'black';
            });
            li.addEventListener('click', function() {
                displaySelectedPolygonCoords(polygon.points);
            });
            polygonList.appendChild(li);
        });
    }

    function displaySelectedPolygonCoords(points) {
        selectedPolygonCoords.innerHTML = '';
        const coords = points.split(' ');
        coords.forEach(coord => {
            const span = document.createElement('span');
            span.textContent = coord + ' ';
            selectedPolygonCoords.appendChild(span);
        });
    }

    function clearPolygons() {
        while (svgCanvas.firstChild) {
            svgCanvas.removeChild(svgCanvas.firstChild);
        }
        polygons.length = 0;
        polygonList.innerHTML = '';
        selectedPolygonCoords.innerHTML = '';
    }

    coordInputs.forEach(input => {
        input.addEventListener('input', redrawPolygon);
    });

    redrawButton.addEventListener('click', function() {
        coordInputs.forEach(input => {
            input.value = '';
        });
        redrawPolygon();
    });

    savePolygonButton.addEventListener('click', savePolygon);

    displayPolygonsButton.addEventListener('click', function() {
    while (svgCanvas.firstChild) {
        svgCanvas.removeChild(svgCanvas.firstChild);
    }

    polygons.forEach(polygon => {
        const newPolygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        newPolygon.setAttribute('id', polygon.id);
        newPolygon.setAttribute('points', polygon.points);
        newPolygon.setAttribute('fill', 'none');
        newPolygon.setAttribute('stroke', 'black');
        svgCanvas.appendChild(newPolygon);
    });
});


    redrawPolygon();
});

