const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
  },
});

//Crea un contenedor mostrando una lista de peliculas

const lazyLoader = new IntersectionObserver((entries) => {
  entries.forEach( entry => {
    if (entry.isIntersecting) {
      const url = entry.target.getAttribute('data-image')
      entry.target.setAttribute('src', url)
    }
  })
})

function createMovies(movies, container, lazyLoad = false){
  container.innerHTML = ''

  movies.forEach(movie =>{
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    movieContainer.addEventListener('click', () =>{
      location.hash = "#movie=" + movie.id
    })

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      lazyLoad ? "data-image" : "src",
      "https://image.tmdb.org/t/p/w300" + movie.poster_path
    );

    if(lazyLoad){
      lazyLoader.observe(movieImg)
    }

    movieContainer.appendChild(movieImg);
    container.appendChild(movieContainer);
  })
}

// Crea un contenedor en el cual se muestra una lista de categorias que separan a nuestras peliculas
function createCategories(categories, container){
  container.innerHTML = ''

  categories.forEach((category) => {

    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", "id" + category.id);
    categoryTitle.addEventListener('click', () => {
      location.hash = `#category=${category.id}-${category.name}`
    })
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    container.appendChild(categoryContainer);
  });
}

// Llamados a la API

//Muestra un preview de peliculas que estan en tendencia
async function getTrendingMoviesPreview() {
  const { data } = await api("/trending/movie/day");
  const movies = data.results;

  trendingMoviesPreviewList.innerHTML = ''

  createMovies(movies, trendingMoviesPreviewList, true)
}

// Muestra la lista de categorias
async function getCategoriesPreview() {
  const { data } = await api("/genre/movie/list");

  const categories = data.genres;

  createCategories(categories, categoriesPreviewList)
}

//Muestra las peliculas separadas por categorias
async function getMoviesByCategory(id){
  const { data } = await api("discover/movie", {
    params: {
      with_genres: id
    }
  });
  const movies = data.results;

  genericSection.innerHTML = "";

  createMovies(movies, genericSection, true)
}

//Muestra las peliculas que el usuario ponga en el buscador
async function getMoviesBySearch(query){
  const { data } = await api("search/movie", {
    params: {
      query: query
    }
  });
  const movies = data.results;

  genericSection.innerHTML = "";

  createMovies(movies, genericSection, true)
}

async function getTrendingMovies() {
  const { data } = await api("/trending/movie/day");
  const movies = data.results;

  genericSection.innerHTML = ''

  createMovies(movies, genericSection, true)
}

async function getMovieById(id) {
  const { data: movie } = await api("/movie/" + id);

  const movieImg = "https://image.tmdb.org/t/p/w500" + movie.poster_path
  headerSection.style.background = `
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 19.27%,
      rgba(0, 0, 0, 0) 29.17%
    ),
    url(${movieImg})
    `

  movieDetailTitle.textContent = movie.title
  movieDetailDescription.textContent = movie.overview
  movieDetailScore.textContent = movie.vote_average

  createCategories(movie.genres, movieDetailCategoriesList)

  getRelatedMoviesById(id)
}

async function getRelatedMoviesById(id){
  const { data } = await api(`/movie/${id}/similar`);

  const relatedMovies = data.results
  createMovies(relatedMovies, relatedMoviesContainer, true)
}
