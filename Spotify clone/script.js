console.log("Hey Wlecome to Spotify clone Web");

let songIndex = 0;
let audioElement = new Audio ('songs/11.mp3');
let myclickPlay = document.getElementById('myclickPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let songItems =  Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Kalank- Title Track", filepath: "songs/11.mp3", coverpath: "covers/1.jpg"},
    {songName: "Kalank- Title Track", filepath: "songs/10.mp3", coverpath: "covers/10.jpg"},
    {songName: "Kalank- Title Track", filepath: "songs/9.mp3", coverpath: "covers/9.jpg"},
    {songName: "Kalank- Title Track", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"},
    {songName: "Kalank- Title Track", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songName: "Kalank- Title Track", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songName: "Kalank- Title Track", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songName: "Kalank- Title Track", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songName: "Kalank- Title Track", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songName: "Kalank- Title Track", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songName: "Kalank- Title Track", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});


//audioElement.play();

//handling play and pause
myclickPlay.addEventListener('click',() => { 
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        myclickPlay.classList.remove('fa-circle-play');
        myclickPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        } else {
            audioElement.pause();
            myclickPlay.classList.remove('fa-circle-pause');
            myclickPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
    } 

})

// listening to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})
