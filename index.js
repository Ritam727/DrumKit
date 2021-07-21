var drums = document.querySelectorAll("button");
var keys = ["w", "a", "s", "d", "j", "k", "l"];
var sounds = {"w":"tom-1", "a":"tom-2", "s":"tom-3", "d":"tom-4", "j":"crash", "k":"kick-bass", "l":"snare"};

for(var i = 0; i < drums.length; i++){
    drums[i].addEventListener("click", function () {
        var audio = new Audio("sounds/"+sounds[this.innerHTML]+".mp3");
        audio.play();
        animate(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    var k = event.key.toLowerCase();
    if(check(k)){
        var audio = new Audio("sounds/"+sounds[k]+".mp3");
        audio.play();
        animate(k);
    }
})

function check(s) {
    for(var i = 0; i < keys.length; i++){
        if(s == keys[i]){
            return true;
        }
    }
    return false;
}

function animate(s) {
    document.getElementsByClassName(s)[0].style.opacity = 0.5;
    setTimeout(function () {
        document.getElementsByClassName(s)[0].style.opacity = 1.0;
    }, 100);
}