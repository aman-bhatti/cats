let btn_generate = document.querySelector(".btn_generate");

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
}