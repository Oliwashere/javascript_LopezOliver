document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('crud-form');
    const dataContainer = document.getElementById('data-container');
    let data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

    //Mostrar
    function renderData() {
      dataContainer.innerHTML = '';
      data.forEach(function(item, index) {
        const row = `
          <div class="data-row">
            <span> Nombre Personaje: ${item.heroname} <br>
             Nombre Actor: ${item.actorname} <br>
             Edad Actor: ${item.actorage} <br>
             Ubicación: ${item.location} <br>
             Poster: ${item.poster} <br>    
             Fecha: ${item.date} <br>
             Productora: ${item.producer}</span>
            <button onclick="editData(${index})">Editar</button>
            <button onclick="deleteData(${index})">Eliminar</button>
          </div>
        `;
        dataContainer.innerHTML += row;
      });
    }
});
  