const data = {
    objects: [
        {
            id: 1,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 1",
            isSelected: false,
            type: "aud",
            coordinates: [[28, 11], [104, 11],[104, 56], [21, 56]],
            picture: "/stair.svg"
            
        },
        {
            id: 2,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 2",
            isSelected: false,
            type: "aud",
            coordinates: [[823, 11], [859, 11], [870, 67], [823, 67]],

            
        },
        {
            id: 3,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 3",
            isSelected: false,
            type: "aud",
            coordinates: [[799, 11], [823, 11], [823, 45], [799, 45]],
        },
        {
            id: 4,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 4",
            isSelected: false,
            type: "aud",
            coordinates: [[775, 11], [799, 11], [799, 45], [775, 45]],

        },
        {
            id: 5,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 5",
            isSelected: false,
            type: "aud",
            coordinates: [[752, 11], [775, 11], [775, 45], [752, 45]],

        },
        {
            id: 6,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 6",
            isSelected: false,
            type: "aud",
            coordinates: [[727, 11], [752, 11], [752, 45], [744.5, 45], [744.5, 42], [738, 42], [738, 45], [727, 45]],

        },
        {
            id: 7,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 7",
            isSelected: false,
            type: "aud",
            coordinates: [[716, 11], [727, 11], [727, 45], [716, 45]],

        },
        {
            id: 8,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 8",
            isSelected: false,
            type: "aud",
            coordinates: [[702, 11], [716, 11], [716, 35], [702, 35]],

        },
        {
            id: 9,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 8",
            isSelected: false,
            type: "aud",
            coordinates: [[702, 35], [716, 35], [716, 45], [712, 45], [712, 42], [707, 42], [707, 45], [702, 45]],

        },
        {
            id: 10,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 9",
            isSelected: false,
            type: "aud",
            coordinates: [[679, 11], [691, 11], [691, 53], [702, 53], [702, 64], [679, 64]],

        },
        {
            id: 11,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 9",
            isSelected: false,
            type: "aud",
            coordinates: [[823, 82], [826, 82], [826, 85], [833, 85], [833, 82], [873, 82], [880, 117], [823, 117]],

        },
        {
            id: 12,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 10",
            isSelected: false,
            type: "aud",
            coordinates: [[799, 82], [802, 82], [802, 85], [807, 85], [807, 82], [823, 82], [823, 117], [799, 117]],

        },
        {
            id: 13,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 11",
            isSelected: false,
            type: "aud",
            coordinates: [[750, 82], [754, 82], [754, 85], [760, 85], [760, 82], [799, 82], [799, 117], [750, 117]],

        },
        {
            id: 14,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 12",
            isSelected: false,
            type: "aud",
            coordinates: [[735, 82], [742, 82], [742, 85], [747, 85], [747, 82], [750, 82], [750, 117], [735, 117]],

        },
        {
            id: 15,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 13",
            isSelected: false,
            type: "aud",
            coordinates: [[702, 82], [706, 82], [706, 85], [711, 85], [711, 82], [735, 82], [735, 117], [702, 117]]

        },
        {
            id: 16,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 13",
            isSelected: false,
            type: "aud",
            coordinates: [[691, 94], [702, 94], [702, 117], [691, 117]]

        },
        {
            id: 17,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 13",
            isSelected: false,
            type: "aud",
            coordinates: [[679, 94], [691, 94], [691, 117], [679, 117]]

        },
        // {
        //     id: 17,
        //     uuid: "0000-0000-0000-0000-0001",
        //     title: "Коридор 1",
        //     isSelected: false,
        //     type: "hall",
        //     coordinates: [[701, 45], [746, 45], [746, 67], [850, 67], [850, 83], [702, 83], [702, 77], [700, 77]]
        //
        // },
    ]
};

const svg = document.getElementById("svg");

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

    polygon.setAttribute("id", object.id);
    svg.appendChild(polygon);
}

