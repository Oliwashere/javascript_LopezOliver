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

    //Agregar
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const heroname = document.getElementById('hero-name').value;
      const actorname = document.getElementById('actor-name').value;
      const actorage = document.getElementById('actor-age').value;
      const location = document.getElementById('location').value;
      const poster = document.getElementById('poster').value;
      const date = document.getElementById('date').value;
      const producer = document.getElementById('producer').value;
      data.push({ heroname, actorname, actorage, location, poster, date, producer });
      localStorage.setItem('data', JSON.stringify(data));
      renderData();
      form.reset();
    });
  
    //Editar
    window.editData = function(index) {
      const newData = prompt('Ingrese los nuevos datos separados por coma (por ejemplo: Nombre Personaje, Nombre Actor, Edad Actor, Ubicación, Poster, Fecha, Productora):');
      const [
        heroname,
        actorname,
        actorage,
        location,
        poster,
        date,
        producer
      ] = newData.split(',').map(item => item.trim());
      data[index] = { heroname, actorname, actorage, location, poster, date, producer };
      localStorage.setItem('data', JSON.stringify(data));
      renderData();
    };
  
    //Eliminar
    window.deleteData = function(index) {
      const confirmation = confirm('¿Estás seguro de que quieres eliminar este Héroe?');
      if (confirmation) {
        data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data));
        renderData();
      }
    };
  
    renderData();
});
  