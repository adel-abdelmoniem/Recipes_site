let links = document.querySelectorAll(".nav-link");
let recipes = [];


GetRecipes("pizza");



for (i = 0; i<links.length; i++) {

    links[i].addEventListener("click", function (e) {
        let currentMeal=e.target.text;
        GetRecipes(currentMeal);

    })

}


function GetRecipes(meal) {
    let httpRequest = new XMLHttpRequest;
    httpRequest.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    httpRequest.send();

    httpRequest.addEventListener("readystatechange", function () {

        if (httpRequest.readyState == 4) {
            recipes = JSON.parse(httpRequest.response).recipes;
            DisplayRecipes();
        }

    })
}

function DisplayRecipes() {
    let recipesContainer = "";
    for (i = 0; i < recipes.length; i++) {
        recipesContainer +=
            `
        <div class=" col-md-3" >

        <div class=" my-4">

          <img src="${recipes[i].image_url}" class="img_recipes w-100" >

          <h5 class=" mt-2">${recipes[i].title}</h5>
          
          <button class=" btn btn-info">
          <a class=" text-white" href="${recipes[i].source_url} " target="
          _blank">Source</a>
          </button>

          <button class=" btn btn-warning">
          <a class=" text-white" href="detalis.html?rid=${recipes[i].recipe_id}">Detalis</a>
          </button>
        </div>
      </div>
        
      `
    }
    document.getElementById("recipesRow").innerHTML = recipesContainer;
}

