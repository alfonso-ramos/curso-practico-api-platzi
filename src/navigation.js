searchFormBtn.addEventListener("click", () => {
  location.hash = '#search=' + searchFormInput.value
})
trendingBtn.addEventListener("click", () => {
  location.hash = '#trends'
})

arrowBtn.addEventListener("click", () => {
  location.hash = window.history.back();
})
window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

window.scrollTo({top:0})

function navigator(){
  console.log({location})

  location.hash.startsWith('#trends') ?
    trendsPage() :
  location.hash.startsWith('#search=') ?
    searchPage() :
  location.hash.startsWith('#movie=') ?
    moviesPage() :
  location.hash.startsWith("#category=") ?
    categoriesPage() :
    homePage()

  location.hash
}

function homePage(){
  console.log('Home')

  headerSection.classList.remove("header-container--long")
  headerSection.style.background = '';
  arrowBtn.classList.add('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerCategoryTitle.classList.add('inactive');
  headerTitle.classList.remove('inactive');
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.remove('inactive');
  categoriesPreviewSection.classList.remove('inactive');
  genericSection.classList.add('inactive')
  movieDetailSection.classList.add('inactive')

  getTrendingMoviesPreview();
  getCategoriesPreview();
}

function categoriesPage(){
  console.log('Categories')

  headerSection.classList.remove("header-container--long")
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerCategoryTitle.classList.remove('inactive');
  headerTitle.classList.add('inactive');
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  const [page, categoryInfo] = location.hash.split('=');
  const [categoryId, categoryName] = categoryInfo.split('-');
  const newName = decodeURI(categoryName)
  headerCategoryTitle.innerHTML = newName

  getMoviesByCategory(categoryId)
}

function moviesPage(){
  console.log('Movies')

  headerSection.classList.add("header-container--long")
  //headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.add('header-arrow--white');
  headerCategoryTitle.classList.add('inactive');
  headerTitle.classList.add('inactive');
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.add('inactive')
  movieDetailSection.classList.remove('inactive')

  const [_, movieId] = location.hash.split("=")
  getMovieById(movieId)
}

function searchPage(){
  console.log('Search')

  headerSection.classList.remove("header-container--long")
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerCategoryTitle.classList.add('inactive');
  headerTitle.classList.add('inactive');
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')
  
  const [_, searchByUser] = location.hash.split('=')
  getMoviesBySearch(searchByUser)
}

function trendsPage(){

  console.log('TRENDS')

  headerSection.classList.remove("header-container--long")
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerCategoryTitle.classList.remove('inactive');
  headerCategoryTitle.innerHTML = 'Tendencias'
  headerTitle.classList.add('inactive');
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  getTrendingMovies()
}
