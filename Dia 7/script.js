document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-btn").addEventListener("click", function() {
      var heroId = document.getElementById("hero-id").value;
      if(heroId !== ''){
        fetch('https://superheroapi.com/api.php/487f7b22f68312d2c1bbc93b1aea445b/' + heroId)
          .then(response => response.json())
          .then(data => {
            var resultHtml = `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <p class="card-text">Intelligence: ${data.powerstats.intelligence}</p>
                  <p class="card-text">Strength: ${data.powerstats.strength}</p>
                  <p class="card-text">Speed: ${data.powerstats.speed}</p>
                  <p class="card-text">Durability: ${data.powerstats.durability}</p>
                  <p class="card-text">Power: ${data.powerstats.power}</p>
                  <p class="card-text">Combat: ${data.powerstats.combat}</p>
                </div>
              </div>
            `;
            document.getElementById("result").innerHTML = resultHtml;
          })
          .catch(error => {
            document.getElementById("result").innerHTML = '<div class="alert alert-danger" role="alert">Superhero not found!</div>';
          });
      } else {
        document.getElementById("result").innerHTML = '<div class="alert alert-warning" role="alert">Please enter a Superhero ID</div>';
      }
    });
  });
  