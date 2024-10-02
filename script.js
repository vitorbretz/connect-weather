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

       
       
       
    } else {
        
    }
});

function showWarning(msg){
    document.querySelector(".aviso").innerHTML = msg;
}