const text =
"Today The World Got More Beautiful Because It's Her Birthday 🌸❤️";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,50);
    }
}

typeWriter();

const photos = [
"assets/I1.jfif",
"assets/I2.jfif",
"assets/I3.jfif",
"assets/I4.jfif",
"assets/I1.jfif",
"assets/I2.jfif",
"assets/I4.jfif"
];

let current = 0;

document.getElementById("startBtn")
.addEventListener("click",()=>{

document.getElementById("welcome").style.display="none";

document.getElementById("countdown").classList.remove("hidden");

let count = 3;

const interval = setInterval(()=>{

document.getElementById("countText").innerHTML = count;

count--;

if(count < 0){

clearInterval(interval);

document.getElementById("countdown").style.display="none";

document.getElementById("gallery").classList.remove("hidden");

document.getElementById("music").play();

}

},1000);

});

document.getElementById("nextBtn")
.addEventListener("click",()=>{

current++;

if(current < photos.length){

document.getElementById("photo").src =
photos[current];

}
else{

document.getElementById("gallery").style.display="none";

document.getElementById("letter")
.classList.remove("hidden");

confetti({
particleCount:300,
spread:180
});

}

});
setInterval(()=>{
    confetti({
        particleCount:5,
        spread:50,
        origin:{y:0}
    });
},2000);

document.getElementById("backBtn")
.addEventListener("click",()=>{

if(current > 0){

current--;

document.getElementById("photo").src =
photos[current];

}

});

const memoryCard =
document.getElementById("memoryCard");

const photo =
document.getElementById("photo");

memoryCard.addEventListener("click",()=>{

    memoryCard.style.display="none";

    photo.style.display="block";

    photo.classList.add("fade-in");

});

document.getElementById("nextBtn")
.addEventListener("click",()=>{

    current++;

    if(current < photos.length){

        document.getElementById("photo")
        .style.display="none";

        document.getElementById("memoryCard")
        .style.display="block";

        document.getElementById("photo")
        .src = photos[current];

    }else{

        document.getElementById("gallery")
        .style.display="none";

        document.getElementById("letter")
        .classList.remove("hidden");

        confetti({
            particleCount:300,
            spread:180
        });

    }

});