let btn_all=document.querySelector("#all");
let btn_targaryen=document.querySelector("#targaryen");  
let btn_lannister=document.querySelector("#lannister");  
let btn_stark=document.querySelector("#stark");  
let btn_greyjoy=document.querySelector("#greyjoy");  
let btn_tully=document.querySelector("#tully");  
let btn_arryn=document.querySelector("#arryn");  
let btn_baratheon=document.querySelector("#baratheon");  
let btn_tyrell=document.querySelector("#tyrell");  
let btn_martell=document.querySelector("#martell");  

let buscar = () => {
    let name=document.querySelector("#search-input").value;
    let filter = characters.filter((element) =>{
        return element.firstName.toLowerCase().includes(name);
    });
    render(filter);
    console.log(name)
}

let searchCategory = (house) => {
    let house_filter=characters.filter((character) => {
        return character.family == house;
    });
    render(house_filter)
}

document.querySelector("#search-btn").addEventListener("click", buscar)
document.querySelector("#search-input").addEventListener("keydown", buscar)

btn_targaryen.addEventListener("click", function () {searchCategory("House Targaryen")} )
btn_lannister.addEventListener("click", function () {searchCategory("House Lannister")} )
btn_stark.addEventListener("click", function () {searchCategory("House Stark")} )
btn_greyjoy.addEventListener("click", function () {searchCategory("House Greyjoy")} )
btn_tully.addEventListener("click", function () {searchCategory("House Tully")} )
btn_arryn.addEventListener("click", function () {searchCategory("House Arryn")} )
btn_baratheon.addEventListener("click", function () {searchCategory("House Baratheon")} )
btn_tyrell.addEventListener("click", function () {searchCategory("House Tyrell")} )
btn_martell.addEventListener("click", function () {searchCategory("House Martell")} )
btn_all.addEventListener("click", function () {render(characters)} )

