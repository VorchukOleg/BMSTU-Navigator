const data = {
    objects: [
        {
            id: 1,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 1",
            isSelected: false,
            type: "aud",
            coordinates: [[27, 11], [104, 11], [104, 46], [22, 46]],
            // picture: "/stair.svg"

        },
        {
            id: 2,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 2",
            isSelected: false,
            type: "aud",
            coordinates: [[20,58],[22,46],[33,46],[33,58]]

        },
        {
            id: 3,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 2",
            isSelected: false,
            type: "aud",
            coordinates: [[68, 58],[97, 58],[97, 74.5],[68, 74.5]]

        },
        {
            id: 4,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 2",
            isSelected: false,
            type: "aud",
            coordinates: [[68, 74.5], [83, 74.5],[82, 120], [68, 120]]

        },
        {
            id: 5,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 3",
            isSelected: false,
            type: "aud",
            coordinates: [[58,46],[81,46],[81,58],[58,58]],

        },
        {
            id: 6,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 5",
            isSelected: false,
            type: "aud",
            coordinates: [[104,11],[129,11],[129,46],[120,46],[120,32.6],
                [104,32.6]],

        },
        {
            id: 7,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 7",
            isSelected: false,
            type: "aud",
            coordinates: [[129, 11], [158, 11], [166, 46], [129, 46]],

        },
        {
            id: 8,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 7",
            isSelected: false,
            type: "aud",
            coordinates: [[158, 11], [703, 11]],

        },
        {
            id: 9,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 8",
            isSelected: false,
            type: "aud",
            coordinates: [[161.5,25],[191,25],[187,46],[166,46]],

        },
        {
            id: 10,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 9",
            isSelected: false,
            type: "aud",
            coordinates: [[166,46],[187,46],[182.0,79],[172,79]],

        },
        {
            id: 11,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 10",
            isSelected: false,
            type: "aud",
            coordinates: [[182,79],[195,79],[199.6, 50],[187,47.5]],

        },
        {
            id: 12,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 11",
            isSelected: false,
            type: "hall",
            coordinates: [[204, 11], [220, 11], [227, 49], [223, 50], [229, 79], [195, 79],
                [200, 50], [196.5, 49]],

        },
        {
            id: 13,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 12",
            isSelected: false,
            type: "aud",
            coordinates: [[223, 50],[236, 47.5], [242, 79], [229, 79]],

        },
        {
            id: 14,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 12",
            isSelected: false,
            type: "aud",
            coordinates: [[232, 25],[263, 25],[259, 46.5],[236, 46.5]],

        },
        {
            id: 15,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 13",
            isSelected: false,
            type: "aud",
            coordinates: [[236, 46.5],[259,46.5],[253, 79],[242, 79]]

        },
        {
            id: 16,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 1",
            isSelected: false,
            type: "aud",
            coordinates: [[265, 11], [369, 11], [369, 46.5], [259, 46.5]]

        },
        {
            id: 17,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 2",
            isSelected: false,
            type: "hall",
            coordinates: [[375.5, 11], [409, 11], [404, 44], [407, 44], [399, 79.7],
                [386, 79.7], [378, 44], [381, 44]]

        },
        {
            id: 18,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 2",
            isSelected: false,
            type: "aud",
            coordinates: [[416, 11], [518, 11], [525, 45], [416, 45]]

        },
        {
            id: 19,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[520.5,23], [551, 23], [547.5, 45], [525, 45]]

        },
        {
            id: 20,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[525, 45], [547.5, 45], [542.7, 78], [532, 78]]

        },
        {
            id: 21,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 2",
            isSelected: false,
            type: "aud",
            coordinates: [[547, 48], [559, 50], [556, 78], [542.7, 78]]

        },
        {
            id: 22,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[563, 11], [581, 11], [588, 50], [586, 50], [592, 78], [556, 78],
                [559, 50], [557.5, 49.5]]
        },
        {
            id: 23,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[586, 50], [597.5, 48], [603, 78], [592, 78]]

        },
        {
            id: 24,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[592, 22.5], [621, 22.5], [614.5, 78], [603, 78]]

        },
        {
            id: 25,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 2",
            isSelected: false,
            type: "aud",
            coordinates: [[823, 11], [859, 11], [870, 67], [823, 67]],


        },
        {
            id: 26,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 2",
            isSelected: false,
            type: "aud",
            coordinates: [[870, 67], [873, 82]],


        },
        {
            id: 27,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 3",
            isSelected: false,
            type: "aud",
            coordinates: [[799, 11], [823, 11], [823, 45], [799, 45]],
        },
        {
            id: 28,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 4",
            isSelected: false,
            type: "aud",
            coordinates: [[775, 11], [799, 11], [799, 45], [775, 45]],

        },
        {
            id: 29,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 5",
            isSelected: false,
            type: "aud",
            coordinates: [[752, 11], [775, 11], [775, 45], [752, 45]],

        },
        {
            id: 30,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 6",
            isSelected: false,
            type: "aud",
            coordinates: [[727, 11], [752, 11], [752, 45], [744.5, 45], [744.5, 42], [738, 42], [738, 45], [727, 45]],

        },
        {
            id: 31,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 7",
            isSelected: false,
            type: "aud",
            coordinates: [[716, 11], [727, 11], [727, 45], [716, 45]],

        },
        {
            id: 32,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 8",
            isSelected: false,
            type: "aud",
            coordinates: [[702, 11], [716, 11], [716, 35], [702, 35]],

        },
        {
            id: 33,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 8",
            isSelected: false,
            type: "aud",
            coordinates: [[702, 35], [716, 35], [716, 45], [712, 45], [712, 42], [707, 42], [707, 45], [702, 45]],

        },
        {
            id: 34,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 9",
            isSelected: false,
            type: "aud",
            coordinates: [[679, 11], [691, 11], [691, 53], [702, 53], [702, 64], [679, 64]],

        },
        {
            id: 35,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 9",
            isSelected: true,
            type: "aud",
            coordinates: [[823, 82], [826, 82], [826, 85], [833, 85], [833, 82], [873, 82], [880, 117], [823, 117]],

        },
        {
            id: 36,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 10",
            isSelected: false,
            type: "aud",
            coordinates: [[799, 82], [802, 82], [802, 85], [807, 85], [807, 82], [823, 82], [823, 117], [799, 117]],

        },
        {
            id: 37,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 11",
            isSelected: false,
            type: "aud",
            coordinates: [[750, 82], [754, 82], [754, 85], [760, 85], [760, 82], [799, 82], [799, 117], [750, 117]],

        },
        {
            id: 38,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 12",
            isSelected: false,
            type: "aud",
            coordinates: [[735, 82], [742, 82], [742, 85], [747, 85], [747, 82], [750, 82],
                [750, 117], [735, 117]],

        },
        {
            id: 39,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 13",
            isSelected: false,
            type: "aud",
            coordinates: [[702, 82], [706, 82], [706, 85], [711, 85], [711, 82], [735, 82],
                [735, 117], [702, 117]]

        },
        {
            id: 40,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 13",
            isSelected: false,
            type: "aud",
            coordinates: [[691, 94], [702, 94], [702, 117], [691, 117]]

        },
        {
            id: 41,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 13",
            isSelected: false,
            type: "aud",
            coordinates: [[679, 94], [691, 94], [691, 117], [679, 117]]

        },
        // низ
        {
            id: 42,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[180, 192], [180, 120], [249, 120], [249, 202], [234, 202], [234, 187], [224, 187], [224, 192]]

        },
        {
            id: 43,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[224, 187], [224, 202], [227, 202], [227, 204], [234, 204], [234, 187]]

        },
        {
            id: 44,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[249, 179], [249, 120], [284, 120], [284, 179]]

        },
        {
            id: 45,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[284, 120], [344, 120], [344, 179], [284, 179]]

        },
        {
            id: 46,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[250, 187], [274, 187], [274, 202], [250, 202]]

        },
        {
            id: 47,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[274, 187], [297, 187], [297, 202], [274, 202]]

        },
        {
            id: 48,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[297, 187], [343, 187], [343, 202], [297, 202]]

        },
        {
            id: 49,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[343, 187], [368, 187], [368, 202], [343, 202]]

        },
        {
            id: 50,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[368, 143], [405, 143], [405, 202], [368, 202]]

        },
        {
            id: 51,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[405, 202], [441, 202], [441, 143], [404.7, 143]]

        },
        {
            id: 52,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[441, 202], [480, 202], [480, 143], [441, 143]]

        },
        {
            id: 53,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[381, 120], [414, 120], [414, 133], [381, 133]]

        },
        {
            id: 54,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[414, 120], [464, 120], [464, 133], [414, 133]]

        },
        {
            id: 55,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: true,
            type: "aud",
            coordinates: [[464, 120], [489, 120], [489, 133], [464, 133]]

        },
        {
            id: 56,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[489, 120], [561, 120], [561, 166], [489, 166]]

        },
        {
            id: 57,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[489, 172], [513, 172], [513, 187], [489, 187]]

        },
        {
            id: 58,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[513, 172], [526, 172], [526, 202], [513, 202]]

        },
        {
            id: 59,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[526, 202], [561, 202], [561, 172], [526, 172]]

        },
        {
            id: 60,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[561, 187], [572, 187], [572, 126], [561, 120]]

        },
        {
            id: 61,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[196, 202], [587, 202]]

        },
        {
            id: 62,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[587, 202], [610, 184]]

        },
        {
            id: 63,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[602, 173], [655.5, 131], [675.5, 159], [622, 200]]

        },

        {
            id: 64,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[19, 132], [87, 132], [87, 145], [156, 144.5], [156, 163], [153, 177],
                [146, 200], [135, 219], [120, 238], [97, 254], [75, 261], [55, 266], [43, 197], [30, 199]]

        },
        {
            id: 65,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "aud",
            coordinates: [[55, 266], [75, 261], [97, 254], [120, 238], [135, 219], [146, 200],
                [153, 177], [156, 163], [156, 144.5], [180, 144.5], [180.5, 192.5], [198, 192],
                [192, 213], [180, 237.5], [163, 260], [142, 280], [111, 298], [84, 307], [63.5, 311]]

        },
        {
            id: 66,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[38, 245], [51, 244], [63.5, 311], [50, 313]]

        },
        {
            id: 67,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[30, 199], [43, 197], [48.5, 228], [36, 230]]

        },
        {
            id: 68,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: []

        },
        {
            id: 69,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: []

        },
        {
            id: 70,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]]

        },
        {
            id: 71,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]]

        },
        {
            id: 72,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]]

        },{
            id: 73,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]]

        },
        {
            id: 74,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]]

        },{
            id: 75,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]]

        },
        {
            id: 76,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]]

        },
        {
            id: 77,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]]

        },
        {
            id: 78,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]]

        },
        {
            id: 79,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]]

        },
        {
            id: 80,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[223,1441], [269,1431], [329,1435], [329,1341]]

        },
        {
            id: 81,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[81, 74.5], [96, 74.5], [96, 58], [168, 58], [172, 79], [172, 120], [81, 120]]

        },
        {
            id: 82,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: false,
            type: "hall",
            coordinates: [[172, 79], [253, 79], [253, 120], [172, 120]]

        },
        {
            id: 83,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: true,
            type: "hall",
            coordinates: [[253, 79], [259.5,44], [378, 44], [386, 79.7], [386, 120], [253, 120]]

        },
        {
            id: 84,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: true,
            type: "hall",
            coordinates: [[386, 79.7], [399, 79.7], [407, 44], [524.5, 44], [532, 78], [532, 120], [386, 120]]

        },
        {
            id: 85,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: true,
            type: "hall",
            coordinates: [[532, 78], [614.5, 78], [622, 11], [679, 11], [679, 117], [698, 117],
                [664.5, 143.5], [655.5, 131], [602, 173], [610.2, 184.2], [587, 202], [561, 202],
                [561, 187], [572, 187], [572, 127], [560, 120], [532, 120]]

        },
        {
            id: 86,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: true,
            type: "hall",
            coordinates: [[679, 64], [702, 64], [702, 45], [752, 45], [752, 67], [870, 67], [873, 82], [702, 82], [702, 95], [679, 95]]

        },
        {
            id: 87,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: true,
            type: "hall",
            coordinates: [[344, 120], [382, 120], [382, 143], [368, 143], [368, 187], [249, 187], [249, 179], [344, 179]]

        },
        {
            id: 88,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: true,
            type: "hall",
            coordinates: [[382, 133], [489, 133], [489, 166], [561, 166], [561, 172], [480, 172], [480, 143], [382, 143]]

        },
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
