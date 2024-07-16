const url="https://pokeapi.co/api/v2/pokemon/";

const searchSpace=document.getElementById('searchSpace');

const searchButton=document.getElementById('searchButton');

const imageGenerated=document.getElementById('imageGenerated');

const nameP=document.getElementById('nameP');

const baseExperience=document.getElementById('baseExperience');

const heightP=document.getElementById('heightP');

let value1,value2;

function solve(){
    const query= searchSpace.value;
    // searchSpace.value="";
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`).then((value1)=>value1.json()).then((value2)=>{console.log(value2)});

    // imageGenerated.src=value2.sprites['front_defalut'];
    // imageGenerated.style.display="block";

    nameP.value=value2.name;

}
solve();