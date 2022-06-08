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
  headerCategoryTitle.classList.remove('inactive');
  headerTitle.classList.add('inactive');
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.remove('incative');
  categoriesPreviewSection.classList.remove('incative');
  genericSection.classList.add('incative')
  movieDetailSection.classList.add('incative')

  getTrendingMoviesPreview();
  getCategoriesPreview();
}


function categoriesPage(){

  headerSection.classList.remove("header-contaainer--long")
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerCategoryTitle.classList.add('inactive');
  headerTitle.classList.remove('inactive');
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('incative');
  categoriesPreviesSection.classList.add('incative');
  genericSection.classList.remove('incative')
  moviesDetailSection.classList.add('incative')

  console.log('Categories')
}
function moviesPage(){

  headerSection.classList.add("header-contaainer--long")
  // headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.add('header-arrow--white');
  headerCategoryTitle.classList.add('inactive');
  headerTitle.classList.add('inactive');
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('incative');
  categoriesPreviesSection.classList.add('incative');
  genericSection.classList.add('incative')
  moviesDetailSection.classList.remove('incative')

  console.log('Movies')
}
function searchPage(){

  headerSection.classList.remove("header-contaainer--long")
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerCategoryTitle.classList.remove('inactive');
  headerTitle.classList.add('inactive');
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.add('incative');
  categoriesPreviewSection.classList.add('incative');
  genericSection.classList.remove('incative')
  movieDetailSection.classList.add('incative')
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

  trendingPreviewSection.classList.add('incative');
  categoriesPreviewSection.classList.add('incative');
  genericSection.classList.remove('incative')
  movieDetailSection.classList.add('incative')

  console.log('TRENDS')
}
