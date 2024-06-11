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
            }
    })
}

form.addEventListener("submit", search);