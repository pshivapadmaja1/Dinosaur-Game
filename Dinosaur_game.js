var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");   
        setTimeout(function(){
            character.classList.remove("animate");
        },500);
    }
}

document.addEventListener("keydown",function(){
    jump();
})

var isAlive = setInterval(function(){
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(blockLeft>=0 && blockLeft<=30 && characterTop>=400){
        alert("Game over");
        block.style.animation = "none";
        block.style.display = "none";
    }
},10);