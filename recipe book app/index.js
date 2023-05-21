const API_KEY = "www.themealdb.com/api/json/v1/1/random.php";
const recipeListEl = document.getElementById("recipe-list")

function displayRecipes(recipes){
    recipeListEl=innerHTML = ""
    recipes.foreach((recipe) => {
        const recipeItemEl = document.createElement("Li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "Recipe Image";

        recipeItemEl.appendChild(recipeImageEl);

        recipeListEl.appendChild(recipeItemEl);

    })

}



async function getRecipes(){
const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php&apiKey=${API_KEY}`)

    const data = await response.json()

    return data.recipes
}



async function init(){
    const recipes = await getRecipes()
    displayRecipes(recipes)
}
init()