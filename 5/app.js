const rainbow = (color) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      document.body.style.backgroundColor = color;
      resolve();
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