document.addEventListener('DOMContentLoaded', function() {
    var movieGrid = document.getElementById('content');
  
    // Cargar el archivo JSON
    fetch('peliculas.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var movies = data.peliculas;
  
        // Renderizar las películas en la página
        movies.forEach(function(movie) {
          var movieItem = document.createElement('div');
          movieItem.className = 'movie-item';
  
          var movieImage = document.createElement('img');
          movieImage.src = movie.imagen;
  
          var movieOverlay = document.createElement('div');
          movieOverlay.className = 'movie-overlay';
  
          var movieTitle = document.createElement('h3');
          movieTitle.textContent = movie.titulo;
  
          var watchLink = document.createElement('a');
          watchLink.className = 'btn-watch';
          watchLink.href = movie.enlace;
          watchLink.textContent = 'Ver ahora';
  
          movieOverlay.appendChild(movieTitle);
          movieOverlay.appendChild(watchLink);
  
          movieItem.appendChild(movieImage);
          movieItem.appendChild(movieOverlay);
  
          movieGrid.appendChild(movieItem);
        });
      })
      .catch(function(error) {
        console.log('Error al cargar el archivo JSON:', error);
      });
  });
   