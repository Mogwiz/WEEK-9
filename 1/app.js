const body = document.getElementById("colored");

const rainbow = (() =>{
  setTimeout(() =>{
    body.style.backgroundColor = "blue";
    setTimeout(() =>{
      body.style.backgroundColor = "yellow";
      setTimeout(() =>{
        body.style.backgroundColor = "red";
        setTimeout(() =>{
          body.style.backgroundColor = "cyan";
          setTimeout(() =>{
            body.style.backgroundColor = "violet";
            setTimeout(() =>{
              body.style.backgroundColor = "green";
              setTimeout(() =>{
                body.style.backgroundColor = "purple";
                rainbow();
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
})

rainbow();