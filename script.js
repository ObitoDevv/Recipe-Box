const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsList = document.querySelector('#results');

const searchButton = document.getElementById('searchButton');
const loginButton= document.getElementById('loginButton');


searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchRecipes();
})


async function searchRecipes() {
    
    try{
        const searchValue = searchInput.value.trim();
        displayLoader();
        const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=bb3e9914&app_key=a859af78fb6df58ee6135ccd50703db2&from=0&to=10`);
        let data = await response.json();
        console.log(response)
        displayRecipes(data.hits);
    }
    catch(e){
        console.log("Error");
        displayError();
    }
    
}

function displayLoader() {
    let loader = `<span class="loader"></span>`;
    resultsList.innerHTML = loader;
}

function displayError() {
    let html = '';
        html += `
        <div>
            <p> Enter a vaild input. </p>
        </div> 
        `
    resultsList.innerHTML = html;
}
function displayRecipes(recipes) {
    let html = '';
    recipes.forEach((recipe) => {
        html += `
        <div>
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <h3>${recipe.recipe.label}</h3>
            <ul>
                ${recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
        </div> 
        `
    })
    resultsList.innerHTML = html;
}
