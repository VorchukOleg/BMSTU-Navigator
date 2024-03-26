// var formfield = document.getElementById('formfield');

// document.addEventListener('DOMContentLoaded', function() {
//         var inputs = document.querySelectorAll('.text');
//         inputs.forEach(function(input, index) {
//           var label = document.createElement('label');
//           label.textContent = 'Point' + (index + 1);
//           input.parentNode.insertBefore(label, input);
//         });
//       });
function add(){
  var newPointX = document.createElement('input');
  // var newPointY = document.createElement('input');
  // var label = document.createElement('label');
  // label.setAttribute('text', 'text');
  newPointX.setAttribute('type','text');
  // newPointY.setAttribute('type','text');
  newPointX.setAttribute('name','text');
  // newPointY.setAttribute('name','text2');
  newPointX.setAttribute('class','text');
  // newPointY.setAttribute('class','text');
  newPointX.setAttribute('size','50');
  // newPointY.setAttribute('size','50');
  newPointX.setAttribute('placeholder','Optional Field');
  // newPointY.setAttribute('placeholder','Optional Field');
  formfield.appendChild(newPointX);
  // formfield.appendChild(newPointY);
  // formfield.appendChild(label);
}

function remove(){
  var input_tags = formfield.getElementsByTagName('input');
  if(input_tags.length > 2) {
    formfield.removeChild(input_tags[(input_tags.length) - 1]);
    // formfield.removeChild(input_tags[(input_tags.length) - 2]);
  }
}

function displayImage(inputElement) {
    const file = inputElement.files[0];
    const imageURL = URL.createObjectURL(file);
    const preview = document.getElementById('preview');
    const cursor = document.getElementById('cursor');

    preview.src = imageURL;
    inputElement.value = null;
    preview.onload = () => URL.revokeObjectURL(imageURL);

    preview.onmouseover = function(event) {
        cursor.style.display = 'block';
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
        document.getElementById('coordinatesInput').value = `${event.clientX}, ${event.clientY}`;
    };

    preview.onmouseout = function() {
        cursor.style.display = 'none';
    };

    preview.onmousemove = function(event) {
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

// document.getElementById('addPoint').addEventListener('click', function() {
//     const xCoordinate = document.getElementById('xCoordinate').value;
//     const yCoordinate = document.getElementById('yCoordinate').value;
//
//     if (xCoordinate && yCoordinate) {
//         const pointElement = document.createElement('div');
//         pointElement.className = 'point';
//         pointElement.textContent = `Точка: (${xCoordinate}, ${yCoordinate})`;
//
//         document.getElementById('pointsContainer').appendChild(pointElement);
//
//         // Clear input fields for the next point
//         document.getElementById('xCoordinate').value = '';
//         document.getElementById('yCoordinate').value = '';
//     } else {
//         alert('Пожалуйста, введите координаты X и Y.');
//     }
// });


// document.getElementById('addButton').addEventListener('click', function(event) {
//   event.preventDefault();
//
//   var inputContainer = document.getElementById('inputContainer');
//   var newInputWrapper = document.createElement('div');
//   newInputWrapper.classList.add('inputWrapper');
//
//   var newInput = document.createElement('input');
//   newInput.type = 'text';
//   newInput.id = 'inputField' + (inputContainer.children.length + 1);
//   newInputWrapper.appendChild(newInput);
//
//   var newButton = document.createElement('button');
//   newButton.textContent = 'Remove';
//   newButton.classList.add('removeButton');
//   newButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     event.target.parentNode.remove();
//   });
//   newInputWrapper.appendChild(newButton);
//
//   inputContainer.appendChild(newInputWrapper);
// });