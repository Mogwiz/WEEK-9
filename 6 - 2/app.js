const generateBG = (color, delay) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      document.body.style.backgroundColor = color;
      const random = Math.floor(Math.random() * 99 + 1)
      if (random < 80){
        resolve();
      } else {
        reject("There is an error !");
      }
    }, delay);
  })
}

const rainbow = async () => {
  try {
    await generateBG("blue", 1000);
    await generateBG("yellow", 1000);
    await generateBG("red", 1000);
    await generateBG("cyan", 1000);
    await generateBG("violet", 1000);
    await generateBG("green", 1000);
    await generateBG("purple", 1000);
    rainbow();
  } catch(err) {
    document.body.style.backgroundColor = "white";
    console.log(err);
  }
};

rainbow();

