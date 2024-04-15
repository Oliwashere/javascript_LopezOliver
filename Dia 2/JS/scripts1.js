document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('crud-form');
    const dataContainer = document.getElementById('data-container');
    let data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
  
    // Función para mostrar los datos
    function renderData() {
      dataContainer.innerHTML = '';
      data.forEach(function(item, index) {
        const row = `
          <div class="data-row">
            <span>${item.firstName} ${item.middleName ? item.middleName + ' ' : ''}${item.lastName} ${item.secondLastName}, ${item.address}, Acudiente: ${item.guardianName}, Celular: ${item.cellPhone}, Fijo: ${item.landline}, Estado: ${item.estado}, Riesgo: ${item.riesgo}</span>
            <button onclick="editData(${index})">Editar</button>
            <button onclick="deleteData(${index})">Eliminar</button>
          </div>
        `;
        dataContainer.innerHTML += row;
      });
    }
  
    // Función para agregar datos
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const firstName = document.getElementById('first-name').value;
      const middleName = document.getElementById('middle-name').value;
      const lastName = document.getElementById('last-name').value;
      const secondLastName = document.getElementById('second-last-name').value;
      const address = document.getElementById('address').value;
      const guardianName = document.getElementById('guardian-name').value;
      const cellPhone = document.getElementById('cell-phone').value;
      const landline = document.getElementById('landline').value;
      const estado = 'inscrito'; // Nuevo campo con valor predeterminado
      const riesgo = 'bajo'; // Nuevo campo con valor predeterminado
      data.push({ firstName, middleName, lastName, secondLastName, address, guardianName, cellPhone, landline, estado, riesgo });
      localStorage.setItem('data', JSON.stringify(data));
      renderData();
      form.reset();
    });
  
    // Función para editar datos
    window.editData = function(index) {
      const newData = prompt('Ingrese los nuevos datos separados por coma (por ejemplo: Juan, Carlos, Pérez, Gómez, Dirección, Acudiente, 1234567890, 1234567, Estado, Riesgo):');
      const [
        firstName,
        middleName,
        lastName,
        secondLastName,
        address,
        guardianName,
        cellPhone,
        landline,
        estado,
        riesgo
      ] = newData.split(',').map(item => item.trim());
      data[index] = { firstName, middleName, lastName, secondLastName, address, guardianName, cellPhone, landline, estado, riesgo };
      localStorage.setItem('data', JSON.stringify(data));
      renderData();
    };
  
    // Función para eliminar datos
    window.deleteData = function(index) {
      const confirmation = confirm('¿Estás seguro de que quieres eliminar este dato?');
      if (confirmation) {
        data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data));
        renderData();
      }
    };
  
    // Renderizar los datos al cargar la página
    renderData();
  });
  