var drums = document.querySelectorAll("button");
var sounds = {"w":"tom-1", "a":"tom-2", "s":"tom-3", "d":"tom-4", "j":"crash", "k":"kick-bass", "l":"snare"};

for(var i = 0; i < drums.length; i++){
    drums[i].addEventListener("click", function () {
        var audio = new Audio("sounds/"+sounds[this.innerHTML]+".mp3");
        audio.play();
    });
}