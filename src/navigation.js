window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator(){
  console.log({location})

  if(location.hash.startsWith('#trends')){
    trendsPage()
  }else if(location.hash.startsWith('#search=')){
    searchPage()
  }else if(location.hash.startsWith('#movies=')){
    moviesPage()
  }else if(location.hash.startsWith("#categories=")){
    categoriesPage()
  }else{
    homePage()
  }

  location.hash
}


function homePage(){
  console.log('Home')

  getTrendingMoviesPreview();
  getCategoriesPreview();

}
function categoriesPage(){
  console.log('Categories')
}
function moviesPage(){
  console.log('Movies')
}
function searchPage(){
  console.log('Search')
}
function trendsPage(){
  console.log('TRENDS')
}
