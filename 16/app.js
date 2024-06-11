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
