const rainbow = (color) => {
  return new Promise((resolve, reject) =>{
    document.body.style.backgroundColor = color;
    setTimeout(() =>{
      resolve(color);
    }, 1000)
  })
}

rainbow()
  .then (() =>{
    return rainbow("blue");
  })
  .then (() =>{
    return rainbow("yellow");
  })
  .then (() =>{
    return rainbow("red");
  })
  .then (() =>{
    return rainbow("cyan");
  })
  .then (() =>{
    return rainbow("violet");
  })
  .then (() =>{
    return rainbow("green");
  })
  .then (() =>{
    return rainbow("purple");
  })