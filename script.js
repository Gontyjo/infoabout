let username = document.getElementById("nome")
let bio = document.getElementById("bio")
let image = document.getElementById("image")

var requestURL = 'https://gontyjo.github.io/infoabout-api/api.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {

username.innerHTML = request.response[0].userinfo.nome
bio.innerHTML = request.response[0].userinfo.bio
image.src = request.response[0].userinfo.image
}

function openFunction(value){

    var numberValue = parseInt(value.id)   
    console.log(numberValue)
    
    switch(numberValue){
        case 1: window.open(request.response[0].userinfo.usermedias.instagram)
            break
        case 2: window.open(request.response[0].userinfo.usermedias.twitter)
            break   
        case 3: window.open(request.response[0].userinfo.usermedias.facebook)
            break
        case 4: window.open(request.response[0].userinfo.usermedias.github)
            break
        case 5: window.open(request.response[0].userinfo.usermedias.linkedin)
            break
        default: window.open(request.response[0].userinfo.usermedias.linkr)
    }
    }