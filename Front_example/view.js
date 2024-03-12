// const data = {
//     objects: [
//         {
//             title: "110",
//             isSelected: false,
//             type: "aud",
//             coordinates: [[10,10], [200,10], [200,400], [10,400]],
//         },
//         {
//             title: "110",
//             isSelected: false,
//             type: "aud",
//             coordinates: [[210,10], [400,10], [400,200], [210,200]],
//         }
//     ]
// }
const data = {
    objects: [
        {
            id: 1,
            uuid: "0000-0000-0000-0000-0000",
            title: "110",
            isSelected: false,
            type: "aud",
            coordinates: [[214, 83], [265, 83], [265, 133], [214, 133]],
            picture: null

        },
        {
            id: 2,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лифт 1",
            isSelected: false,
            type: "aud",
            coordinates: [[214, 133], [265, 133], [265, 192], [214, 192]],
            picture: "elevator.svg"

        },
        {
            id: 3,
            uuid: "0000-0000-0000-0000-0000",
            title: "112",
            isSelected: false,
            type: "aud",
            coordinates: [[265, 83], [390, 83], [390, 192], [265, 192]],
            picture: null

        },
        {
            id: 4,
            uuid: "0000-0000-0000-0000-0000",
            title: "112а",
            isSelected: false,
            type: "aud",
            coordinates: [[298, 192], [390, 192], [390, 245], [298, 245]],
            picture: null

        },
        {
            id: 5,
            uuid: "0000-0000-0000-0000-0000",
            title: "C106",
            isSelected: false,
            type: "aud",
            coordinates: [[390, 83], [504, 83], [504, 245], [390, 245]],
            picture: null

        },
        {
            id: 6,
            uuid: "0000-0000-0000-0000-0000",
            title: "C101",
            isSelected: false,
            type: "aud",
            coordinates: [[504, 83], [609, 83], [609, 245], [504, 245]],
            picture: null

        },
        {
            id: 7,
            uuid: "0000-0000-0000-0000-0000",
            title: "C107",
            isSelected: false,
            type: "aud",
            coordinates: [[609, 83], [697, 83], [697, 210], [609, 210]],
            picture: null

        },
        {
            id: 8,
            uuid: "0000-0000-0000-0000-0000",
            title: "C108",
            isSelected: false,
            type: "aud",
            coordinates: [[697, 83], [768, 83], [768, 210], [697, 210]],
            picture: null

        },
        {
            id: 9,
            uuid: "0000-0000-0000-0000-0000",
            title: "109",
            isSelected: false,
            type: "aud",
            coordinates: [[214, 192], [298, 192], [298, 245], [214, 245]],
            picture: null

        },
        {
            id: 10,
            uuid: "0000-0000-0000-0000-0000",
            title: "С103",
            isSelected: false,
            type: "aud",
            coordinates: [[214, 282], [250, 282], [250, 335], [214, 335]],
            picture: null

        },
        {
            id: 11,
            uuid: "0000-0000-0000-0000-0000",
            title: "С105",
            isSelected: false,
            type: "aud",
            coordinates: [[250, 282], [284, 282], [284, 335], [250, 335]],
            picture: null

        },
        {
            id: 12,
            uuid: "0000-0000-0000-0000-0000",
            title: "С104",
            isSelected: false,
            type: "aud",
            coordinates: [[284, 282], [392, 282], [392, 335], [284, 335]],
            picture: null

        },
        {
            id: 13,
            uuid: "0000-0000-0000-0000-0000",
            title: "104",
            isSelected: false,
            type: "aud",
            coordinates: [[392, 282], [508, 282], [508, 335], [392, 335]],
            picture: "stair.svg"

        },
        {
            id: 14,
            uuid: "0000-0000-0000-0000-0000",
            title: "111",
            isSelected: false,
            type: "aud",
            coordinates: [[508, 282], [568, 282], [568, 335], [508, 335]],
            picture: null

        },
        {
            id: 15,
            uuid: "0000-0000-0000-0000-0000",
            title: "С102",
            isSelected: false,
            type: "aud",
            coordinates: [[568, 282], [640, 282], [640, 335], [568, 335]],
            picture: null

        },
        {
            id: 16,
            uuid: "0000-0000-0000-0000-0000",
            title: "Туалет_1",
            isSelected: false,
            type: "aud",
            coordinates: [[640, 257], [667, 257], [667, 293], [640, 293]],
            picture: "man.svg"

        },
        {
            id: 17,
            uuid: "0000-0000-0000-0000-0000",
            title: "Туалет_2",
            isSelected: false,
            type: "aud",
            coordinates: [[667, 257], [697, 257], [697, 293], [667, 293]],
            picture: "man.svg"

        },
        {
            id: 18,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница_1",
            isSelected: false,
            type: "aud",
            coordinates: [[640, 293], [726, 293], [726, 335], [640, 335]],
            picture: "stair.svg"

        },
        {
            id: 19,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лифты 2, 3",
            isSelected: false,
            type: "aud",
            coordinates: [[726, 335], [810, 335], [810, 383], [726, 383]],
            picture: "elevator.svg"

        },
        {
            id: 20,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница_2",
            isSelected: false,
            type: "aud",
            coordinates: [[810, 335], [912, 335], [912, 383], [810, 383]],
            picture: "stair.svg"

        },
        {
            id: 21,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор_1",
            isSelected: false,
            type: "hall",
            coordinates: [[768, 162], [912, 162], [912, 224], [768, 224]],
            picture: null

        },
        {
            id: 22,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор_2",
            isSelected: false,
            type: "hall",
            coordinates: [[810, 224], [912, 224], [912, 335], [810, 335]],
            picture: null

        },
        {
            id: 23,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор_3",
            isSelected: false,
            type: "hall",
            coordinates: [[697, 210], [768, 210], [768, 224], [810, 224], [810, 335], [726, 335], [726, 293], [697, 293]],
            picture: null

        },
        {
            id: 24,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор_4",
            isSelected: false,
            type: "hall",
            coordinates: [[609, 210], [697, 210], [697, 257], [640, 257], [640, 245], [609, 245]],
            picture: null

        },
        {
            id: 25,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор_5",
            isSelected: false,
            type: "hall",
            coordinates: [[508, 245], [640, 245], [640, 282], [508, 282]],
            picture: null

        },
        {
            id: 26,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор_6",
            isSelected: false,
            type: "hall",
            coordinates: [[392, 245], [508, 245], [508, 282], [392, 282]],
            picture: null

        },
        {
            id: 27,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор_7",
            isSelected: false,
            type: "hall",
            coordinates: [[284, 245], [392, 245], [392, 282], [284, 282]],
            picture: null

        },
        {
            id: 28,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор_8",
            isSelected: false,
            type: "hall",
            coordinates: [[214, 245], [284, 245], [284, 282], [214, 282]],
            picture: null

        },
    ]
}

for (object of data.objects) {
    let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    for (dots of object.coordinates) {

        let point = svg.createSVGPoint();
        point.x = dots[0];
        point.y = dots[1];
        polygon.points.appendItem(point);
    }
    if (object.isSelected) {
        object.type === 'aud'
        ? polygon.setAttribute("class", "isSelectedAud")
        : polygon.setAttribute("class", "isSelectedHall");
    }

    svg.appendChild(polygon);
}

$(function() {
    const polygons = $('polygon');
    const tooltip = $('#tooltip');
    let lastClicked = null;
    let mouseOverFired = false;
    let mouseOutFired = false;
    let clickFired = false;


    polygons.on('mouseover', function(e) { // мышка в фигуре
        // if (lastClicked === e.target && clickFired === false) {
        if (!clickFired) {
            $(this).css('fill', 'blue');
            mouseOverFired = true;
        }
    });

    polygons.on('mouseout', function() { // мышка вне фигуры
        if (lastClicked !== this && clickFired === false) {
            $(this).css('fill', 'green');
            mouseOutFired = true;
        }
    });

    polygons.on('click', function(e) { // мышка нажала
        if (lastClicked === e.target) {
            $(this).css('fill', '');
            tooltip.css('display', 'none');
            lastClicked = null;
            clickFired = false;
        } else {
            if (lastClicked) {
                $(lastClicked).css('fill', '');
            }
            $(this).css('fill', 'red');
            tooltip.css('display', 'block');
            tooltip.css('left', `${e.clientX}px`);
            tooltip.css('top', `${e.clientY + 20}px`);
            tooltip.text(`Нажато на: ${object.title}`);
            lastClicked = this;
            clickFired = true;
        }
    });
});
