searchFormBtn.addEventListener("click", () => {
  location.hash = '#search='
})
trendingBtn.addEventListener("click", () => {
  location.hash = '#trends'
})
arrowBtn.addEventListener("click", () => {
  location.hash = '#home'
})
window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

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

  headerSection.classList.remove("header-contaainer--long")
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

  headerSection.classList.remove("header-contaainer--long")
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

  headerCategoryTitle.innerHTML = categoryName

  getMoviesByCategory(categoryId)

}


function moviesPage(){

  headerSection.classList.add("header-contaainer--long")
  // headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.add('header-arrow--white');
  headerCategoryTitle.classList.add('inactive');
  headerTitle.classList.add('inactive');
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviesSection.classList.add('inactive');
  genericSection.classList.add('inactive')
  moviesDetailSection.classList.remove('inactive')

  console.log('Movies')
}
function searchPage(){

  headerSection.classList.remove("header-contaainer--long")
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerCategoryTitle.classList.add('inactive');
  headerTitle.classList.remove('inactive');
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')
  console.log('Search')
}
function trendsPage(){

  headerSection.classList.remove("header-contaainer--long")
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerCategoryTitle.classList.add('inactive');
  headerTitle.classList.remove('inactive');
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  console.log('TRENDS')
}
