const generateBG = (color, delay) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  })
}

const rainbow = async () => {
  const blue = await generateBG("blue", 1000);
  const yellow = await generateBG("yellow", 1000);
  const red = await generateBG("red", 1000);
  const cyan = await generateBG("cyan", 1000);
  const violet = await generateBG("violet", 1000);
  const green = await generateBG("green", 1000);
  const purple = await generateBG("purple", 1000);
  rainbow();
}

rainbow();

