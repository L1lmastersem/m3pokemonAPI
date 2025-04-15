
const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250 + 1);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        pokemonImage.src = realData.sprites.front_default;
    });

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;

catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
        if(catchNumber === 0){
            pokemonText.innerText = "Pokemon Fled!"
        }
        else{
            pokemonText.innerText = "Pokemon Caught!"
        }
        pokemonGamePlayed = true;
    }
}
const filmText = document.getElementById("js--film-text");

let film = fetch("https://api.tvmaze.com/search/shows?q=flint%20the%20time%20detective")
.then(function(filmresponse){
    return filmresponse.json();
})
.then(function(filmrealData){
    filmText.innerHTML = filmrealData[0].show.summary;
});


const nameText = document.getElementById("js--name");
const inputField = document.getElementById("js--input");
inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        let name =inputField.value;

        let age = fetch("https://api.agify.io/?name=" + name)
        .then(function(ageresponse){
        return ageresponse.json();
        })
        .then(function(realageData){
            inputField.style.display = "none";
            nameText.innerText = realageData.age;
        });
    }
}