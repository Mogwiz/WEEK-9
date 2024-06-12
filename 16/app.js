const mainTitle = document.getElementById("main");

const titleColor = (color) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        mainTitle.style.color = color;
            resolve();
        }, 5000);
    });
}

const rainbow = async () => {
    await titleColor("white");
    await titleColor("black");
    rainbow();
}

rainbow();

const form = document.getElementById("form");
const msg = document.getElementById("msg");

const search = (e) =>{
    e.preventDefault();
    let inputValue = document.getElementById("search").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(response => response.json())
    .then(data =>{
        const mealList = document.getElementById("mealList")
        mealList.innerHTML = ""
        if(data.meals == null){
            msg.innerText = `No result found for "${inputValue}"`
            } else {
                msg.innerText = `These are the results for "${inputValue}"`
                console.log(data.meals)
                data.meals.forEach(meal => {
                    const list = document.createElement("div");
                    list.classList.add("item");
                    const cards = `
                    <div class="card">
                        <img src="${meal.strMealThumb}" class="card-img">
                        <div class="card-body">
                            <p class="card-text">${meal.strMeal}</p>
                        </div>
                    </div>
                    `
                    list.innerHTML = cards;
                    mealList.appendChild(list);
                    
                    list.addEventListener("click", (e) =>{
                        const modal = document.getElementById("modal");
                        const model = `
                        <img src="${meal.strMealThumb}" alt="">
                                <h2>${meal.strMeal}</h2>
                                <ul id="ingredients">
                                    <li>${meal.strMeasure1} ${meal.strIngredient1}</li>
                                    <li>${meal.strMeasure2} ${meal.strIngredient2}</li>
                                    <li>${meal.strMeasure3} ${meal.strIngredient3}</li>
                                    <li>${meal.strMeasure4} ${meal.strIngredient4}</li>
                                    <li>${meal.strMeasure5} ${meal.strIngredient5}</li>
                                    <li>${meal.strMeasure6} ${meal.strIngredient6}</li>
                                    <li>${meal.strMeasure7} ${meal.strIngredient7}</li>
                                    <li>${meal.strMeasure8} ${meal.strIngredient8}</li>
                                    <li>${meal.strMeasure9} ${meal.strIngredient9}</li>
                                    <li>${meal.strMeasure10} ${meal.strIngredient10}</li>
                                    <li>${meal.strMeasure11} ${meal.strIngredient11}</li>
                                    <li>${meal.strMeasure12} ${meal.strIngredient12}</li>
                                </ul>
                                <p>${meal.strInstructions}</p>
                        `
                        modal.innerHTML = model;
                        modal.style.visibility = "visible";
                        const transparent = document.getElementById("cover");
                        transparent.style.visibility = "visible";
                        transparent.addEventListener("click", () =>{
                            modal.style.visibility = "hidden";
                            transparent.style.visibility = "hidden";
                        })
                    });
                    });
            };
    });
};

form.addEventListener("submit", search);