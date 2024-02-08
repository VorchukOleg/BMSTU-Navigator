const data = {
    objects: [
        {
            id: 1,
            uuid: "0000-0000-0000-0000-0000",
            title: "110",
            isSelected: false,
            type: "aud",
            coordinates: [[34, 75], [80, 75], [80, 121], [34, 121]],
            picture: null

        },
        {
            id: 2,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лифт 1",
            isSelected: false,
            type: "aud",
            coordinates: [[34, 121], [80, 121], [80, 171], [34, 171]],
            picture: "elevator.svg"

        },
        {
            id: 3,
            uuid: "0000-0000-0000-0000-0000",
            title: "112",
            isSelected: false,
            type: "aud",
            coordinates: [[80, 75], [196, 75], [196, 171], [80, 171]],
            picture: null

        },
        {
            id: 4,
            uuid: "0000-0000-0000-0000-0000",
            title: "112а",
            isSelected: false,
            type: "aud",
            coordinates: [[111, 171], [196, 171], [196, 221], [111, 221]],
            picture: null

        },
        {
            id: 5,
            uuid: "0000-0000-0000-0000-0000",
            title: "C106",
            isSelected: false,
            type: "aud",
            coordinates: [[196, 75], [297, 75], [297, 221], [196, 221]],
            picture: null

        },
        {
            id: 6,
            uuid: "0000-0000-0000-0000-0000",
            title: "C101",
            isSelected: false,
            type: "aud",
            coordinates: [[297, 75], [392, 75], [392, 221], [297, 221]],
            picture: null

        },
        {
            id: 7,
            uuid: "0000-0000-0000-0000-0000",
            title: "C107",
            isSelected: false,
            type: "aud",
            coordinates: [[392, 75], [467, 75], [467, 190], [392, 190]],
            picture: null

        },
        {
            id: 8,
            uuid: "0000-0000-0000-0000-0000",
            title: "C108",
            isSelected: false,
            type: "aud",
            coordinates: [[467, 75], [536, 75], [536, 193], [498, 193], [498, 185], [467, 185]],
            picture: null

        },
        {
            id: 9,
            uuid: "0000-0000-0000-0000-0000",
            title: "109",
            isSelected: false,
            type: "aud",
            coordinates: [[34, 171], [111, 171], [111, 221], [34, 221]],
            picture: null

        },
        {
            id: 10,
            uuid: "0000-0000-0000-0000-0000",
            title: "С103",
            isSelected: false,
            type: "aud",
            coordinates: [[34, 254], [68, 254], [68, 300], [34, 300]],
            picture: null

        },
        {
            id: 11,
            uuid: "0000-0000-0000-0000-0000",
            title: "С105",
            isSelected: false,
            type: "aud",
            coordinates: [[68, 254], [98, 254], [98, 300], [68, 300]],
            picture: null

        },
        {
            id: 12,
            uuid: "0000-0000-0000-0000-0000",
            title: "С104",
            isSelected: false,
            type: "aud",
            coordinates: [[98, 254], [197, 254], [197, 300], [98, 300]],
            picture: null

        },
        {
            id: 13,
            uuid: "0000-0000-0000-0000-0000",
            title: "104",
            isSelected: false,
            type: "aud",
            coordinates: [[197, 254], [300, 254], [300, 300], [197, 300]],
            picture: "stair.svg"

        },
        {
            id: 14,
            uuid: "0000-0000-0000-0000-0000",
            title: "111",
            isSelected: false,
            type: "aud",
            coordinates: [[300, 254], [355, 254], [355, 300], [300, 300]],
            picture: null

        },
        {
            id: 15,
            uuid: "0000-0000-0000-0000-0000",
            title: "С102",
            isSelected: false,
            type: "aud",
            coordinates: [[355, 254], [421, 254], [421, 300], [355, 300]],
            picture: null

        },
        {
            id: 16,
            uuid: "0000-0000-0000-0000-0000",
            title: "Туалет",
            isSelected: false,
            type: "aud",
            coordinates: [[421, 233], [467, 233], [467, 263], [421, 263]],
            picture: "man.svg"

        },
        {
            id: 17,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница",
            isSelected: false,
            type: "aud",
            coordinates: [[421, 263], [498, 263], [498, 300], [421, 300]],
            picture: "stair.svg"

        },
        {
            id: 18,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лифты 2, 3",
            isSelected: false,
            type: "aud",
            coordinates: [[498, 300], [574, 300], [574, 350], [498, 350]],
            picture: "elevator.svg"

        },
        {
            id: 19,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница",
            isSelected: false,
            type: "aud",
            coordinates: [[574, 293], [668, 293], [668, 350], [574, 350]],
            picture: "stair.svg"

        },
        {
            id: 20,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор",
            isSelected: false,
            type: "hall",
            coordinates: [[536, 145], [668, 145], [668, 202], [536, 202]],
            picture: null

        },
        {
            id: 21,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор",
            isSelected: false,
            type: "hall",
            coordinates: [[498, 193], [536, 193], [536, 202], [668, 202], [668, 293], [574, 293],
                [574, 300], [498, 300]],
            picture: null

        },
        {
            id: 22,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор",
            isSelected: false,
            type: "hall",
            coordinates: [[467, 185], [498, 185], [498, 263], [467, 263]],
            picture: null

        },
        {
            id: 23,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор",
            isSelected: false,
            type: "hall",
            coordinates: [[392, 190], [467, 190], [467, 233], [421, 233], [421, 221], [392, 221]],
            picture: null

        },
        {
            id: 24,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор",
            isSelected: false,
            type: "hall",
            coordinates: [[297, 221], [421, 221], [421, 254], [297, 254]],
            picture: null

        },
        {
            id: 25,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор",
            isSelected: false,
            type: "hall",
            coordinates: [[196, 221], [297, 221], [297, 254], [196, 254]],
            picture: null

        },
        {
            id: 26,
            uuid: "0000-0000-0000-0000-0000",
            title: "Коридор",
            isSelected: false,
            type: "hall",
            coordinates: [[34, 221], [196, 221], [196, 254], [34, 254]],
            picture: null

        },
    ]
}



const data_1 = {
    objects: [
        {
            id: 1,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 104???",
            isSelected: false,
            type: "aud",
            coordinates: [[27, 11], [104, 11], [104, 46], [22, 46]],
            picture: null

        },
        {
            id: 2,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница 1",
            isSelected: false,
            type: "aud",
            coordinates: [[20,58],[22,46],[58,46],[58,58]],
            picture: "stair.svg",
        },
        {
            id: 3,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница 2",
            isSelected: false,
            type: "aud",
            coordinates: [[58,46],[104,46],[104,58],[58,58]],
            picture: "stair.svg",

        },
        {
            id: 4,
            uuid: "0000-0000-0000-0000-0000",
            title: "Проходная",
            isSelected: false,
            type: "aud",
            coordinates: [[68, 58],[97, 58],[97, 74.5],[68, 74.5]],
            picture: null,

        },
        {
            id: 5,
            uuid: "0000-0000-0000-0000-0000",
            title: "Вход",
            isSelected: false,
            type: "aud",
            coordinates: [[68, 74.5], [83, 74.5],[83, 120], [68, 120]],
            picture: "enter.svg",

        },

        {
            id: 6,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория ???",
            isSelected: false,
            type: "aud",
            coordinates: [[104,11],[129,11],[129,46],[120,46],[120,32.6],
                [104,32.6]],
            picture: null,

        },
        {
            id: 7,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница 3",
            isSelected: false,
            type: "hall",
            coordinates: [[104,32.6], [120,32.6], [120,46], [104, 46]],
            picture: "stair.svg",

        },
        {
            id: 8,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 106",
            isSelected: false,
            type: "aud",
            coordinates: [[129, 11], [158, 11], [166, 46], [129, 46]],
            picture: null,
        },
        {
            id: 9,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница 4",
            isSelected: false,
            type: "hall",
            coordinates: [[158, 11], [193, 11], [191,25], [161.5,25]],
            picture: "stair.svg",
        },
        {
            id: 10,
            uuid: "0000-0000-0000-0000-0000",
            title: "Туалет 1",
            isSelected: false,
            type: "aud",
            coordinates: [[161.5,25],[191,25],[187,46],[166,46]],
            picture: null,
        },
        {
            id: 11,
            uuid: "0000-0000-0000-0000-0000",
            title: "Туалет 1",
            isSelected: false,
            type: "aud",
            coordinates: [[166,46],[187,46],[182.0,79],[172,79]],
            picture: "man.svg"
        },
        {
            id: 12,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница 5",
            isSelected: false,
            type: "hall",
            coordinates: [[182,79],[200,79],[200, 50],[187,47.5]],
            picture: "stair.svg",
        },
        {
            id: 13,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лифт 1",
            isSelected: false,
            type: "hall",
            coordinates: [[193, 11], [204, 11], [200, 50], [187,47.5]],
            picture: "elevator.svg",
        },
        {
            id: 14,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 11",
            isSelected: false,
            type: "hall",
            coordinates: [[204, 11], [220, 11], [223, 50], [223, 79], [200, 79],
                [200, 50]],
            picture: null,
        },
        {
            id: 15,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 12",
            isSelected: false,
            type: "aud",
            coordinates: [[217, 11], [229, 11], [236, 47.5], [223, 50],],
            picture: "elevator.svg",

        },
        {
            id: 16,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 12",
            isSelected: false,
            type: "aud",
            coordinates: [[223, 50],[236, 47.5], [242, 79], [223, 79]],
            picture: "stair.svg",

        },
        {
            id: 17,
            uuid: "0000-0000-0000-0000-0000",
            title: "Туалет 2",
            isSelected: false,
            type: "aud",
            coordinates: [[232, 25],[263, 25],[259, 46.5],[236, 46.5]],
            picture: null,

        },
        {
            id: 18,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница 6",
            isSelected: false,
            type: "hall",
            coordinates: [[229, 11], [265, 11], [263, 25], [232, 25]],
            picture: "stair.svg",

        },
        {
            id: 19,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 13",
            isSelected: false,
            type: "aud",
            coordinates: [[236, 46.5],[259,46.5],[253, 79],[242, 79]],
            picture: "woman.svg",

        },
        {
            id: 20,
            uuid: "0000-0000-0000-0000-0001",
            title: "Гардероб 1",
            isSelected: false,
            type: "aud",
            coordinates: [[265, 11], [369, 11], [369, 46.5], [259, 46.5]],
            picture: "hanger.svg",

        },
        {
            id: 21,
            uuid: "0000-0000-0000-0000-0001",
            title: "Лестница 7",
            isSelected: false,
            type: "hall",
            coordinates: [[375.5, 11], [409, 11], [405, 35], [380, 35]],
            picture: "stair.svg",

        },
        {
            id: 22,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 2",
            isSelected: false,
            type: "aud",
            coordinates: [[380, 35], [405, 35], [404, 44], [407, 44], [399, 79.7],
                [386, 79.7], [378, 44], [381, 44]],
            picture: null,

        },
        {
            id: 25,
            uuid: "0000-0000-0000-0000-0001",
            title: "Гардероб 2",
            isSelected: false,
            type: "aud",
            coordinates: [[416, 11], [518, 11], [525, 45], [416, 45]],
            picture: "hanger.svg",

        },
        {
            id: 26,
            uuid: "0000-0000-0000-0000-0001",
            title: "Лестница 8",
            isSelected: false,
            type: "hall",
            coordinates: [[518, 11], [553, 11], [551, 23], [520.5, 23]],
            picture: "stair.svg",

        },
        {
            id: 27,
            uuid: "0000-0000-0000-0000-0001",
            title: "Туалет 3",
            isSelected: false,
            type: "aud",
            coordinates: [[520.5,23], [551, 23], [547.5, 45], [525, 45]],
            picture: null,

        },
        {
            id: 28,
            uuid: "0000-0000-0000-0000-0001",
            title: "Туалет 3",
            isSelected: false,
            type: "aud",
            coordinates: [[525, 45], [547.5, 45], [542.7, 78], [532, 78]],
            picture: "woman.svg",

        },
        {
            id: 29,
            uuid: "0000-0000-0000-0000-0001",
            title: "Лестница 9",
            isSelected: false,
            type: "hall",
            coordinates: [[547, 48], [559, 50], [559, 78], [542.7, 78]],
            picture: "stair.svg",

        },
        {
            id: 30,
            uuid: "0000-0000-0000-0000-0001",
            title: "Лифт 2",
            isSelected: false,
            type: "hall",
            coordinates: [[553, 11], [566, 11], [559, 50], [547, 48]],
            picture: "elevator.svg",

        },
        {
            id: 31,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[566, 11], [577, 11], [586, 50], [586, 78], [559, 78],
                [559, 50]],
            picture: null,
        },
        {
            id: 32,
            uuid: "0000-0000-0000-0000-0001",
            title: "Лифт 2",
            isSelected: false,
            type: "hall",
            coordinates: [[577, 11], [590, 11], [597.5, 48], [585, 50]],
            picture: "elevator.svg",

        },
        {
            id: 33,
            uuid: "0000-0000-0000-0000-0001",
            title: "Лестница 10",
            isSelected: false,
            type: "hall",
            coordinates: [[585, 50], [597.5, 48], [603, 78], [585, 78]],
            picture: "stair.svg",

        },
        {
            id: 34,
            uuid: "0000-0000-0000-0000-0001",
            title: "Лестница 11",
            isSelected: false,
            type: "hall",
            coordinates: [[590, 11], [622, 11], [621, 22.5], [592, 22.5]],
            picture: "stair.svg",

        },
        {
            id: 35,
            uuid: "0000-0000-0000-0000-0001",
            title: "Туалет 2",
            isSelected: false,
            type: "aud",
            coordinates: [[592, 22.5], [621, 22.5], [614.5, 78], [603, 78]],
            picture: "man.svg",

        },
        // конец
        {
            id: 36,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 110",
            isSelected: false,
            type: "aud",
            coordinates: [[679, 11], [691, 11], [691, 53], [702, 53], [702, 64], [679, 64]],
            picture: null,

        },
        {
            id: 37,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница 12",
            isSelected: false,
            type: "hall",
            coordinates: [[691, 11], [702, 11], [702, 53], [691, 53]],
            picture: "stair.svg",

        },
        {
            id: 38,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 112",
            isSelected: false,
            type: "aud",
            coordinates: [[702, 35], [716, 35], [716, 45], [702, 45]],
            picture: null,

        },
        {
            id: 39,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 112.1",
            isSelected: false,
            type: "aud",
            coordinates: [[702, 11], [716, 11], [716, 35], [702, 35]],
            picture: null,

        },
        {
            id: 40,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 112.2",
            isSelected: false,
            type: "aud",
            coordinates: [[716, 11], [727, 11], [727, 45], [716, 45]],
            picture: null,
        },
        {
            id: 41,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 114",
            isSelected: false,
            type: "aud",
            coordinates: [[727, 11], [752, 11], [752, 45], [727, 45]],
            picture: null,
        },
        {
            id: 42,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 088",
            isSelected: false,
            type: "aud",
            coordinates: [[752, 11], [775, 11], [775, 45], [752, 45]],
            picture: null,

        },
        {
            id: 43,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 088А",
            isSelected: false,
            type: "aud",
            coordinates: [[775, 11], [799, 11], [799, 45], [775, 45]],
            picture: null,

        },
        {
            id: 44,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 090",
            isSelected: false,
            type: "aud",
            coordinates: [[799, 11], [823, 11], [823, 45], [799, 45]],
            picture: null,
        },
        {
            id: 45,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 092",
            isSelected: false,
            type: "aud",
            coordinates: [[823, 11], [859, 11], [870, 67], [823, 67]],
            picture: null,

        },
        {
            id: 46,
            uuid: "0000-0000-0000-0000-0000",
            title: "Лестница 13",
            isSelected: false,
            type: "hall",
            coordinates: [[839, 67], [870, 67], [873, 82], [839, 82]],
            picture: "stair.svg",

        },
        {
            id: 46,
            uuid: "0000-0000-0000-0000-0000",
            title: "???",
            isSelected: false,
            type: "aud",
            coordinates: [[752, 45], [823, 45], [823, 67], [752, 67]],
            picture: null,

        },
        {
            id: 47,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 147",
            isSelected: false,
            type: "aud",
            coordinates: [[823, 82], [873, 82], [880, 117], [823, 117]],
            picture: null,

        },
        {
            id: 48,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 145",
            isSelected: false,
            type: "aud",
            coordinates: [[799, 82], [823, 82], [823, 117], [799, 117]],
            picture: null,

        },
        {
            id: 49,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 141",
            isSelected: false,
            type: "aud",
            coordinates: [[750, 82], [799, 82], [799, 117], [750, 117]],
            picture: null,

        },
        {
            id: 50,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 139",
            isSelected: false,
            type: "aud",
            coordinates: [[735, 82], [750, 82], [750, 117], [735, 117]],
            picture: null,

        },
        {
            id: 51,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 137",
            isSelected: false,
            type: "aud",
            coordinates: [[702, 82], [735, 82],
                [735, 117], [702, 117]],
            picture: null,

        },
        {
            id: 52,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 135",
            isSelected: false,
            type: "aud",
            coordinates: [[691, 94], [702, 94], [702, 117], [691, 117]],
            picture: null,

        },
        {
            id: 53,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 133",
            isSelected: false,
            type: "aud",
            coordinates: [[679, 94], [691, 94], [691, 117], [679, 117]],
            picture: null,

        },
        // низ
        {
            id: 42,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[180, 192], [180, 120], [249, 120], [249, 202], [234, 202],
                [234, 187], [224, 187], [224, 192]],
            picture: null,

        },
        {
            id: 43,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[224, 187], [224, 202], [227, 202], [227, 204], [234, 204], [234, 187]],
            picture: null,

        },
        {
            id: 44,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[249, 179], [249, 120], [284, 120], [284, 179]],
            picture: null,

        },
        {
            id: 45,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[284, 120], [344, 120], [344, 179], [284, 179]],
            picture: null,

        },
        {
            id: 46,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[250, 187], [274, 187], [274, 202], [250, 202]],
            picture: null,

        },
        {
            id: 47,
            uuid: "0000-0000-0000-0000-0001",
            title: "Что-то внизу",
            isSelected: false,
            type: "aud",
            coordinates: [[274, 187], [297, 187], [297, 202], [274, 202]],
            picture: null,

        },
        {
            id: 48,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[297, 187], [343, 187], [343, 202], [297, 202]],
            picture: null,

        },
        {
            id: 49,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[343, 187], [368, 187], [368, 202], [343, 202]],
            picture: null,

        },
        {
            id: 50,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[368, 143], [405, 143], [405, 202], [368, 202]],
            picture: null,

        },
        {
            id: 51,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[405, 202], [441, 202], [441, 143], [404.7, 143]],
            picture: null,

        },
        {
            id: 52,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[441, 202], [480, 202], [480, 143], [441, 143]],
            picture: null,

        },
        {
            id: 53,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[381, 120], [414, 120], [414, 133], [381, 133]],
            picture: null,

        },
        {
            id: 54,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[414, 120], [464, 120], [464, 133], [414, 133]],
            picture: null,

        },
        {
            id: 55,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[464, 120], [489, 120], [489, 133], [464, 133]],
            picture: null,

        },
        {
            id: 56,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[489, 120], [561, 120], [561, 166], [489, 166]],
            picture: null,

        },
        {
            id: 57,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[489, 172], [513, 172], [513, 187], [489, 187]],
            picture: null,

        },
        {
            id: 58,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[513, 172], [526, 172], [526, 202], [513, 202]],
            picture: null,

        },
        {
            id: 59,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[526, 202], [561, 202], [561, 172], [526, 172]],
            picture: null,

        },
        {
            id: 60,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[561, 187], [572, 187], [572, 126], [561, 120]],
            picture: null,

        },
        {
            id: 61,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[196, 202], [587, 202]],
            picture: null,

        },
        {
            id: 62,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[587, 202], [610, 184]],
            picture: null,

        },
        {
            id: 63,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[602, 173], [655.5, 131], [675.5, 159], [622, 200]],
            picture: null,

        },

        {
            id: 64,
            uuid: "0000-0000-0000-0000-0001",
            title: "Концертный зал",
            isSelected: false,
            type: "hall",
            coordinates: [[19, 132], [87, 132], [87, 145], [156, 144.5], [156, 163], [153, 177],
                [146, 200], [135, 219], [120, 238], [97, 254], [75, 261], [55, 266], [43, 197], [30, 199]],
            picture: null,

        },
        {
            id: 65,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор у зала",
            isSelected: false,
            type: "aud",
            coordinates: [[55, 266], [75, 261], [97, 254], [120, 238], [135, 219], [146, 200],
                [153, 177], [156, 163], [156, 144.5], [180, 144.5], [180.5, 192.5], [198, 192],
                [192, 213], [180, 237.5], [163, 260], [142, 280], [111, 298], [84, 307], [63.5, 311]],
            picture: null,

        },
        {
            id: 66,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[38, 245], [51, 244], [63.5, 311], [50, 313]],
            picture: null,

        },
        {
            id: 67,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[30, 199], [43, 197], [48.5, 228], [36, 230]],
            picture: "stair.svg",

        },


        {
            id: 80,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: true,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]],
            picture: null,

        },
        {
            id: 81,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[83, 74.5], [96, 74.5], [96, 58], [104, 58], [104, 46], [166, 46],
                [168, 58], [172, 79], [172, 120], [83, 120]],
            picture: null,

        },
        {
            id: 82,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[172, 79], [200, 79], [200, 120], [172, 120]],
            picture: null,

        },
        {
            id: 82,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[200, 79], [223, 79], [223, 120], [200, 120]],
            picture: null,

        },
        {
            id: 82,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223, 79], [253, 79], [253, 120], [223, 120]],
            picture: null,

        },
        {
            id: 83,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[253, 79], [259.5,44], [378, 44], [386, 79.7], [386, 120], [253, 120]],
            picture: null,

        },
        {
            id: 83,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[253, 79], [259.5,44], [378, 44], [386, 79.7], [386, 120], [253, 120]],
            picture: null,

        },
        {
            id: 84,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[386, 79.7], [399, 79.7], [399, 120], [386, 120]],
            picture: null,

        },
        {
            id: 84,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[399, 79.7], [407, 44], [524.5, 44], [532, 78], [532, 120], [399, 120]],
            picture: null,

        },
        {
            id: 85,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[532, 78], [614.5, 78], [622, 11], [679, 11], [679, 117], [698, 117],
                [664.5, 143.5], [655.5, 131], [602, 173], [610.2, 184.2], [587, 202], [561, 202],
                [561, 187], [572, 187], [572, 127], [560, 120], [532, 120]],
            picture: null,

        },
        {
            id: 86,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[679, 64], [702, 64], [702, 95], [679, 95]],
            picture: null,

        },
        {
            id: 86,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[702, 45], [752, 45], [752, 82], [702, 82]],
            picture: null,

        },
        {
            id: 86,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[752, 67], [839, 67], [839, 82], [752, 82]],
            picture: null,

        },
        {
            id: 87,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[344, 120], [382, 120], [382, 143], [344, 143]],
            picture: null,

        },
        {
            id: 87,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[344, 143], [368, 143], [368, 187], [297, 187],
                [297, 179], [344, 179]],
            picture: null,

        },
        {
            id: 87,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[249, 187], [297, 187], [297, 179], [249, 179]],
            picture: null,

        },
        {
            id: 88,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[382, 133], [405, 133], [405, 143], [382, 143]],
            picture: null,

        },
        {
            id: 88,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[405, 133], [441, 133], [441, 143], [405, 143]],
            picture: null,

        },
        {
            id: 88,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[441, 133], [489, 133], [489, 143], [441, 143]],
            picture: null,

        },
        {
            id: 88,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[489, 143], [489, 166], [561, 166], [561, 172], [480, 172],
                [480, 143]],
            picture: null,

        },
    ]
};

const svg = document.getElementById("svg");

for (object of data.objects) {
    let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    let pngImage = document.createElementNS("http://www.w3.org/2000/svg",
        "image");
    let centerDotx = 0;
    let centerDoty = 0;

    for (dots of object.coordinates) {

        let point = svg.createSVGPoint();
        point.x = dots[0];
        point.y = dots[1];
        polygon.points.appendItem(point);
        centerDotx += dots[0];
        centerDoty += dots[1];
    }
    centerDotx /= object.coordinates.length;
    centerDoty /= object.coordinates.length;
    if (object.isSelected) {
        object.type === 'aud'
        ? polygon.setAttribute("class", "isSelectedAud")
        : polygon.setAttribute("class", "isSelectedHall");
    }
    if (object.picture) {
        pngImage.setAttribute("x", centerDotx - 5);
        pngImage.setAttribute("y", centerDoty - 5);
        pngImage.setAttribute("width", 10);
        pngImage.setAttribute("height", 10);
        pngImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", "images/" + object.picture);

    }

    polygon.setAttribute("id", object.id);
    svg.appendChild(polygon);
    svg.appendChild(pngImage);
}

// Изменение цвета polygon когда мышка над названием магазина.
//     $('.first_floor_ulk-item').hover(
//         function(){
//             $('.first_floor_ulk polygon[data-id=' + $(this).data('id') + ']').attr('id', 'hover');
//         },
//         function(){
//             $('.first_floor_ulk polygon[data-id=' + $(this).data('id') + ']').attr('id', '');
//         }
//     );

    // // Клик по названию магазина - открывается подсказка.
    // $('.first_floor_ulk-item').on('click', function(){
    //     $('.first_floor_ulk-popup').hide();
    //     $('.first_floor_ulk polygon').attr('class', '');
    //
    //     var popup = $(this).find('.first_floor_ulk-popup');
    //     $(popup).css('top', '-' + ($(popup).outerHeight(true) + 15) + 'px');
    //     $(popup).css('left', '-' + (($(popup).outerWidth(true) / 2) - ($(this).outerWidth(true) / 2)) + 'px');
    //     $('.first_floor_ulk polygon[data-id=' + $(this).data('id') + ']').attr('class', 'active');
    //     $(popup).show();
    // });
    //
    // // Клик по полигону магазина - также открывается подсказка.
    // $('.first_floor_ulk polygon').click(function(){
    //     $('.first_floor_ulk-popup').hide();
    //     $('.scheme-item[data-id=' + $(this).data('id') + ']').trigger('click');
    // });
    //
    // // Клик вне магазинов все закрывает.
    // $("body").click(function(e) {
    //     if ($(e.target).closest(".first_floor_ulk polygon, .first_floor_ulk-item").length == 0) {
    //         $(".first_floor_ulk-popup").hide();
    //         $('.first_floor_ulk polygon').attr('class', '');
    //     }
    // });

