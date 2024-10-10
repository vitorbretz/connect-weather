document.querySelector(".hbutton").addEventListener("click", () =>{
    document.querySelector("main").classList.toggle("animar");      
})
document.querySelector('.buttonBurger').addEventListener('click', () => {
	document.querySelector('.buttonBurger').classList.toggle('close');
})
//
let menu = document.getElementById("menu-Mobile")
let btnMenu = document.getElementById("btn-mobile")


menu.addEventListener("click", animarMenu)

function animarMenu(){
    menu.classList.toggle("open-menu")
    btn.classList.toggle("active")
}
// resultado do main




document.querySelector(".busca").addEventListener("submit",async (event)=>{
    event.preventDefault();

    let input = document.querySelector("#searchInput").value;
    if (input !== "") {
       showWarning("Carregando...") 
        ;
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=83806d3024ea75f8db92ca3fc8c99841&units=metric&lang=pt_br`;

       let results = await fetch(url);
       let json = await results.json();

       if (json.cod === 200) {
        showInfo({
            name: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            windAngle: json.wind.deg,
            sensation: json.main.feels_like,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min

        });
       }else {
        showWarning("Não encontramos esta localização.")
       }
       
       
    } else {
        
    }
});

function showWarning(msg){
    document.querySelector(".aviso").innerHTML = msg;
}

function showInfo(json){
    showWarning("");
    document.querySelector("main").style.display = "block";

    document.querySelector(".titleR").innerHTML = `${json.name}, ${json.country}`;
    document.querySelector(".temp").innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector(".wind").innerHTML = `${json.windSpeed} <span>km/h</span>`;

    document.querySelector(".info img").setAttribute("src", `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)

    document.querySelector(".WindPoint").style.transform = `rotate(${json.windAngle-90}deg)`;

    document.querySelector(".sensation").innerHTML = `${json.sensation} <sup>º</sup>`;

    document.querySelector(".maxR").innerHTML = `${json.tempMax} <sup>º</sup>`;
    document.querySelector(".minR").innerHTML = `${json.tempMin} <sup>º</sup>`;

}
document.querySelector(".inicial").addEventListener("click",()=>{
    history.back();
});

