let param = new URLSearchParams(window.location.search);
let recipeId = param.get("rid");
let recipesDetalis = [];
let ingredients = [];
let imgRecipe = document.getElementById("imgRecipe");

GetRecipesDetalis();

function GetRecipesDetalis() {
    let httpRequest = new XMLHttpRequest;
    httpRequest.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
    httpRequest.send();

    httpRequest.addEventListener("readystatechange", function () {

        if (httpRequest.readyState == 4) {
            recipesDetalis = JSON.parse(httpRequest.response).recipe;
            imgRecipe.src = recipesDetalis.image_url;
            ingredients = recipesDetalis.ingredients;
            displayRecipeDetalis();

        }

    })
}


function displayRecipeDetalis() {
    let recipeContainer = ``;

    for (i = 0; i < ingredients.length; i++) 
    {
        recipeContainer+=
        `
        <li class="py-2">${ingredients[i]}</li>

        `
    }

    document.getElementById("showRecipeDetalis").innerHTML=recipeContainer;

}
