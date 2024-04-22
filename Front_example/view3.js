
function add() {
    // Получаем контейнер, в который будут добавляться новые поля
    var formContainer = document.querySelector('.left-column form');
    event.preventDefault();

    // Создаем новый div, который будет содержать новое поле ввода
    var newInputContainer = document.createElement('div');
    // var newPointX = document.createElement('input');
    newInputContainer.className = 'formfield';

    // Создаем новое поле ввода
    var newInputX = document.createElement('input');
    newInputX.type = 'text';
    newInputX.name = 'text';
    newInputX.classList.add('text');
    newInputX.size = 50;
    newInputX.placeholder = 'Write coords';

    // var newInputY = document.createElement('input');
    // newInputY.type = 'text';
    // newInputY.name = 'text';
    // newInputY.classList.add('text');
    // newInputY.size = 50;
    // newInputY.placeholder = 'Optional Field';
    // Добавляем новое поле ввода в div
    newInputContainer.appendChild(newInputX);
    // newInputContainer.appendChild(newInputY);

    // Добавляем div с новым полем ввода в контейнер формы
    formContainer.insertBefore(newInputContainer, formContainer.querySelector('.controls'));
}

function remove() {
    var input_tags = newInputContainer.getElementsByTagName('input');
    if (input_tags.length > 2) {
        newInputContainer.removeChild(input_tags[(input_tags.length) - 1]);
        // formfield.removeChild(input_tags[(input_tags.length) - 2]);
    }
}

function displayImage(inputElement) {
    const file = inputElement.files[0];
    const coordinatesDiv = document.getElementById('coordinates');
    let points = [];
    const imageURL = URL.createObjectURL(file);
    const preview = document.getElementById('preview');
    const cursor = document.getElementById('cursor');

    preview.src = imageURL;
    inputElement.value = null;
    preview.onload = () => URL.revokeObjectURL(imageURL);

    preview.addEventListener('click', function(event) {
        const rect = preview.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        points.push([x, y]);
        if (points.length > 1) {
            drawPolygon();
        }
        coordinatesDiv.innerHTML += `Координаты: ${x}, ${y}<br>`;
    });

    preview.onmouseover = function (event) {
        cursor.style.display = 'block';
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
        document.getElementById('coordinatesInput').value = `${event.clientX}, ${event.clientY}`;
    };

    preview.onmouseout = function () {
        cursor.style.display = 'none';
    };

    preview.onmousemove = function (event) {
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
        document.getElementById('coordinatesInput').value = `${event.clientX}, ${event.clientY}`;
    };
}

function moveCursor(coordinates) {
    const [x, y] = coordinates.split(',').map(Number);
    const cursor = document.getElementById('cursor');
    const rect = document.getElementById('preview').getBoundingClientRect();
    const newX = x - rect.left;
    const newY = y - rect.top;

    cursor.style.left = newX + 'px';
    cursor.style.top = newY + 'px';
}

function drawPolygon() {
        const svgNS = "http://www.w3.org/2000/svg";
        const svgContainer = document.getElementById('svg-container');
        let svgPolygon;
        const preview = document.getElementById('preview');
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute('width', preview.width);
        svg.setAttribute('height', preview.height);
        svgContainer.innerHTML = '';
        svgContainer.appendChild(svg);

        svgPolygon = document.createElementNS(svgNS, "polygon");
        svgPolygon.setAttribute('points', points.map(p => `${p[0]},${p[1]}`).join(' '));
        svgPolygon.setAttribute('style', 'fill:none;stroke:black;stroke-width:2');
        svg.appendChild(svgPolygon);
    }
// let selectedAuds = [];

// for (object of data.objects) {
//         let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
//         for (dots of object.coordinates) {
//
//             let point = svg.createSVGPoint();
//             point.x = dots[0];
//             point.y = dots[1];
//             polygon.points.appendItem(point);
//         }
//         if (object.type === 'hall') {
//             polygon.setAttribute("class", "isHall")
//         }
//         if (object.type === 'aud') {
//             polygon.setAttribute("class", "isAud")
//             polygon.setAttribute("title", object.title)
//         }
//
//         if (object.isSelected) {
//             object.type === 'aud'
//             ? polygon.setAttribute("class", "isSelectedAud")
//             : polygon.setAttribute("class", "isSelectedHall");
//         }
//
//         svg.appendChild(polygon);
//     }
// document.addEventListener('DOMContentLoaded', function() {
//     const polygons = document.querySelectorAll('polygon');
//     const tooltip = document.getElementById('tooltip');
//     let lastClicked = null;
//     let mouseOverFired = false;
//     let mouseOutFired = false;
//     let clickFired = false;
//
//     polygons.forEach(polygon => {
//         const polygonType = polygon.getAttribute('class');
//
//         if (polygonType === 'isAud') {
//             const polygonTitle = polygon.getAttribute('title');
//             polygon.addEventListener('mouseover', function (e) {
//                 if (!clickFired) {
//                     this.style.fill = '#ADD8E6';
//                     mouseOverFired = true;
//                 }
//             });
//
//             polygon.addEventListener('mouseout', function () {
//                 if (lastClicked !== this && !clickFired) {
//                     this.style.fill = 'green';
//                     mouseOutFired = true;
//                 }
//             });
//
//             polygon.addEventListener('click', function (e) {
//                 // if (lastClicked === this && polygon.getAttribute) {
//                 if (polygon.getAttribute('class') === 'isSelectedAud') {
//                     polygon.setAttribute('class', 'isAud');
//                     let lastSelectedAud = selectedAuds.pop();
//                     if (lastSelectedAud !== this) {
//                         selectedAuds.pop();
//                         selectedAuds.push(lastSelectedAud);
//                     }
//
//                     tooltip.style.display = 'none';
//                     lastClicked = null;
//                     clickFired = false;
//                 } else {
//
//                     if (selectedAuds.length < 2) {
//                         polygon.setAttribute('class', 'isSelectedAud');
//                         selectedAuds.push(this);
//                         tooltip.style.display = 'block';
//                         tooltip.style.left = `${e.clientX}px`;
//                         tooltip.style.top = `${e.clientY + 20}px`;
//                         tooltip.textContent = `Нажато на: ${polygonTitle}`;
//                     }
//                     if (lastClicked) {
//                         lastClicked.style.fill = '';
//                     }
//                     lastClicked = this;
//                     clickFired = true;
//                 }
//             });
//         }
//     });
// });