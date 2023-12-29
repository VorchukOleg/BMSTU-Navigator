// Получение доступных vertexpoints и добавление их в окна выбора
axios.get('/api/vertexpoints')
    .then(function(response) {
        const vertexpoints = response.data;

        // Окно выбора точки отправления
        const startPointSelect = document.getElementById('start-point');
        vertexpoints.forEach(function(point) {
            const option = document.createElement('option');
            option.value = point.codename;
            option.textContent = point.codename;
            startPointSelect.appendChild(option);
        });

        // Окно выбора точки назначения
        const endPointSelect = document.getElementById('end-point');
        vertexpoints.forEach(function(point) {
            const option = document.createElement('option');
            option.value = point.codename;
            option.textContent = point.codename;
            endPointSelect.appendChild(option);
        });
    })
    .catch(function(error) {
        console.log(error);
    });

// Обработчик отправки запроса на построение маршрута
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function() {
    const startPoint = document.getElementById('start-point').value;
    const endPoint = document.getElementById('end-point').value;

    // Отправка запроса на бэкэнд для построения маршрута
    axios.post('/api/build_route', {start_point: startPoint, end_point: endPoint})
        .then(function(response) {
            const route = response.data.shortest_path;
            const routeLength = response.data.shortest_length;

            // Отображение маршрута и его длины
            const routeList = document.getElementById('route-list');
            const routeLengthElem = document.getElementById('route-length');

            // Очистка предыдущих результатов
            routeList.innerHTML = '';
            routeLengthElem.textContent = '';

            // Вывод маршрута
            route.forEach(function(point) {
                const listItem = document.createElement('li');
                listItem.textContent = point;
                routeList.appendChild(listItem);
            });

            // Вывод длины маршрута
            routeLengthElem.textContent = routeLength.toFixed(2);
        })
        .catch(function(error) {
            console.log(error);
        });
});
