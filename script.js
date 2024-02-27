var songArray = [
    {name:"Pursuit Of Happiness" ,song:"assets/songs/s1.mp3" ,image:"assets/poh.jpeg"},
    {name:"Dancing In The MoonLight" ,song:"assets/songs/s2.mp3" ,image:"assets/ditm.jpeg"},
    {name:"Drift Away" ,song:"assets/songs/s3.mp3" ,image:"assets/da.jpeg"},
    {name:"All Stars" ,song:"assets/songs/Ram Siya Ram.mp3" ,image:"assets/as.jpeg"}
];
var audio = new Audio();
var selectedSong = 0 ;  
var allSong = document.querySelector(".all-song")
var songPhoto = document.querySelector(".left");
var backward = document.querySelector(".backward");
var play = document.querySelector(".play");
var forward = document.querySelector(".forward");
var turn = 0;
function showSongs(){
    let clutter = "";
    songArray.forEach(function(element,index){
        clutter += `<div class="song-card" id=${index}>
        <div class="part1">
            <img src="${element.image}" alt="${element.name}">
            <p>${element.name}</p>
        </div>
        <h6>3:35</h6>
    </div>`;
    })
    allSong.innerHTML = clutter ;
    audio.src = songArray[selectedSong].song;
    songPhoto.style.backgroundImage = `url(${songArray[selectedSong].image})`;
}
function playSong(){
    allSong.addEventListener("click",function(detail){
        selectedSong = detail.target.id;
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        turn=1;
        showSongs();
        audio.play();
    })
}
function controls(){
    play.addEventListener("click",function(){
        if(turn == 0){
            showSongs();
            audio.play();
            play.innerHTML = `<i class="ri-pause-line"></i>`;
            turn = 1;
        }
        else{
            showSongs();
            audio.pause();
            play.innerHTML = `<i class="ri-play-fill"></i>`;
            turn = 0;
        }
    })
    forward.addEventListener("click",function(){
        if (selectedSong < songArray.length - 1){
            selectedSong++;
            showSongs();
            audio.play();
            play.innerHTML = `<i class="ri-pause-line"></i>`;
        }
        else{
            forward.style.opacity = "0.4";
        }
    })
    backward.addEventListener("click",function(){
        if (selectedSong > 0){
            selectedSong--;
            showSongs();
            audio.play();
            play.innerHTML = `<i class="ri-pause-line"></i>`;
        }
        else{
            backward.style.opacity = "0.4";
        }
    })
}

showSongs();
playSong();
controls();