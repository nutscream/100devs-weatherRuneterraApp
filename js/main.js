// const form = document.querySelector(".firstSection form");
const input = document.querySelector(".firstSection input");
const msg = document.querySelector(".firstSection .msg");
const list = document.querySelector(".apiSection .cities");
// const button = document.querySelector('button')

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const apiKey = "4d8fb5b93d4af21d66a2948710284366"
  let choice = document.querySelector('input').value.toLowerCase()
  msg.textContent = "";
  let runeterraRegion = choice.toUpperCase()

  switch(choice){
        
        case "freljord":
            choice = "nuuk"
            break
        case "demacia":
            choice = "new york"
            break
        case "bilgewater":
            choice = "havana"
            break
        case "noxus":
            choice = "moscow"
            break
        case "zaun":
            choice = "beijing"
            break
        case "ionia":
            choice = "tokyo"
            break
        case "shadow isles":
            choice = "sydney"
            break
        case "ixtal":
            choice = "hanoi"
            break
        case "shurima":
            choice = "alexandria"
            break
        case "targon":
            choice = "tehran"
            break
        case "piltover & zaun":
            choice = "paris"
            break
        case "piltover":
            choice = "london"
            break
        case "piltover and zaun":
            choice = "paris"
            break
        default:
            msg.textContent = "Please search for a valid region 😩";
            return
  }
  document.querySelector(".cities").innerHTML = ''
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        
        const { main, name, sys, weather } = data;
        
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          
          <span>${runeterraRegion}</span>
          
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
      })
      .catch(err => {
          console.log(`error ${err}`)
          msg.textContent = "Please search for a valid region 😩";
      });

      msg.textContent = "";
      input.focus();

}



function freljord(){
    event.preventDefault()
    document.querySelector(".cities").innerHTML = ''
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    msg.textContent = "";
    let choice = "nuuk"
    let runeterraRegion = "FRELJORD"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
  
          
          const { main, name, sys, weather } = data;
          const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            
            <span>${runeterraRegion}</span>
            
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
        })
        .catch(err => {
            console.log(`error ${err}`)
            
        });
  
        input.focus();

  }

  function demacia(){
    event.preventDefault()
    document.querySelector(".cities").innerHTML = ''
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    msg.textContent = "";
    let choice = "new york"
    let runeterraRegion = "DEMACIA"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
  
          
          const { main, name, sys, weather } = data;
          const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            
            <span>${runeterraRegion}</span>
            
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
        })
        .catch(err => {
            console.log(`error ${err}`)
            
        });
  
        input.focus();

  }

  function bilgewater(){
    event.preventDefault()
    document.querySelector(".cities").innerHTML = ''
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    msg.textContent = "";
    let choice = "havana"
    let runeterraRegion = "BILGEWATER"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
  
          
          const { main, name, sys, weather } = data;
          const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            
            <span>${runeterraRegion}</span>
            
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
        })
        .catch(err => {
            console.log(`error ${err}`)
            
        });
  
        input.focus();

  }

  function noxus(){
    event.preventDefault()
    document.querySelector(".cities").innerHTML = ''
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    msg.textContent = "";
    let choice = "moscow"
    let runeterraRegion = "NOXUS"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
  
          
          const { main, name, sys, weather } = data;
          const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            
            <span>${runeterraRegion}</span>
            
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
        })
        .catch(err => {
            console.log(`error ${err}`)
            
        });
  
        input.focus();

  }

  function ionia(){
    event.preventDefault()
    document.querySelector(".cities").innerHTML = ''
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    msg.textContent = "";
    let choice = "tokyo"
    let runeterraRegion = "IONIA"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
  
          
          const { main, name, sys, weather } = data;
          const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            
            <span>${runeterraRegion}</span>
            
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
        })
        .catch(err => {
            console.log(`error ${err}`)
            
        });
  
        input.focus();

  }

  function shadowIsles(){
    event.preventDefault()
    document.querySelector(".cities").innerHTML = ''
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    msg.textContent = "";
    let choice = "sydney"
    let runeterraRegion = "SHADOW ISLES"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
  
          
          const { main, name, sys, weather } = data;
          const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            
            <span>${runeterraRegion}</span>
            
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
        })
        .catch(err => {
            console.log(`error ${err}`)
            
        });
  
        input.focus();

  }

  function ixtal(){
    event.preventDefault()
    document.querySelector(".cities").innerHTML = ''
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    msg.textContent = "";
    let choice = "hanoi"
    let runeterraRegion = "IXTAL"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
  
          
          const { main, name, sys, weather } = data;
          const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            
            <span>${runeterraRegion}</span>
            
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
        })
        .catch(err => {
            console.log(`error ${err}`)
            
        });
  
        input.focus();

  }

  function piltoZaun(){
    event.preventDefault()
    document.querySelector(".cities").innerHTML = ''
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    msg.textContent = "";
    let choice = "paris"
    let runeterraRegion = "PILTOVER & ZAUN"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
  
          
          const { main, name, sys, weather } = data;
          const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            
            <span>${runeterraRegion}</span>
            
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
        })
        .catch(err => {
            console.log(`error ${err}`)
            
        });
  
        input.focus();

  }

  function targon(){
    event.preventDefault()
    document.querySelector(".cities").innerHTML = ''
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    msg.textContent = "";
    let choice = "tehran"
    let runeterraRegion = "TARGON"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
  
          
          const { main, name, sys, weather } = data;
          const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            
            <span>${runeterraRegion}</span>
            
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
        })
        .catch(err => {
            console.log(`error ${err}`)
            
        });
  
        input.focus();

  }

  function shurima(){
    event.preventDefault()
    document.querySelector(".cities").innerHTML = ''
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    msg.textContent = "";
    let choice = "alexandria"
    let runeterraRegion = "SHURIMA"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
  
          
          const { main, name, sys, weather } = data;
          const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            
            <span>${runeterraRegion}</span>
            
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
        })
        .catch(err => {
            console.log(`error ${err}`)
            
        });
  
        input.focus();

  }

