/*let btn_generate = document.querySelector(".btn_generate");

btn_generate.addEventListener("click", getCats);



function getCats() {
    let catsDiv = document.querySelector(".catPics")
    catsDiv.innerHTML = ''


    fetch('https://api.thecatapi.com/v1/images/search?api_key=live_Y8AIqRsILMaCpE1pCO6seI7drCSNOLOz3AB2TpALsyCbRWIZmGtvfhgHvgLzpBWr')
    .then(response => response.json())
    .then((data) => {
        let catsImg = data[0].url

        let catsEle = document.createElement("img")
        catsEle.setAttribute('src', `${catsImg}`)
        catsEle.classList.add("pictures")
        
        let catsDiv = document.querySelector(".catPics")
        catsDiv.appendChild(catsEle)
    })
    .catch(err => console.log(err))
}*/

function getLocalCats() {
  // Array of local image paths
  let localCats = [
    "pictures/theo1.jpg",
    "pictures/theo2.jpg",
    "pictures/theo3.jpg",
    "pictures/theo4.jpg",
    "pictures/theo5.jpg",
    "pictures/theo6.jpg",
  ];

  let catsDiv = document.querySelector(".catPics");

  // Pick a random local image
  let randomIndex = Math.floor(Math.random() * localCats.length);
  let src = localCats[randomIndex];

  let img = document.createElement("img");
  img.setAttribute("src", src);
  img.classList.add("pictures");
  catsDiv.appendChild(img);
}

function getApiCat() {
  fetch(
    "https://api.thecatapi.com/v1/images/search?api_key=live_Y8AIqRsILMaCpE1pCO6seI7drCSNOLOz3AB2TpALsyCbRWIZmGtvfhgHvgLzpBWr",
  )
    .then((response) => response.json())
    .then((data) => {
      let catsImg = data[0].url;

      let catsEle = document.createElement("img");
      catsEle.setAttribute("src", `${catsImg}`);
      catsEle.classList.add("pictures");

      let catsDiv = document.querySelector(".catPics");
      catsDiv.appendChild(catsEle);
    })
    .catch((err) => console.log(err));
}

function getCats() {
  let catsDiv = document.querySelector(".catPics");
  catsDiv.innerHTML = "";

  // Randomly decide whether to show a local cat image or an API cat image
  if (Math.random() < 0.5) {
    getLocalCats();
  } else {
    getApiCat();
  }
}

let btn_generate = document.querySelector(".btn_generate");
btn_generate.addEventListener("click", getCats);
