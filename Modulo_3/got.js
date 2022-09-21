let characters=[];

let render = (allCharacters) =>{

    document.querySelector("#main-container").innerHTML=""

    for(let i in allCharacters){

        let main_container=document.getElementById("main-container")
        let card=document.createElement("div")
        card.classList.add("card")
        card.setAttribute("style", "width: 13rem;")

        card.innerHTML=
        `<img src="${allCharacters[i].imageUrl}" class="card-img-top">
        <div class="card-body">
            <h2 class="card-text">${allCharacters[i].firstName} ${allCharacters[i].lastName}</h2>
        </div>
        `
        main_container.append(card)
    }
}

fetch("https://thronesapi.com/api/v2/Characters")
.then((response) => response.json())
.then((data) =>{
    characters=data;
    render(characters);
});