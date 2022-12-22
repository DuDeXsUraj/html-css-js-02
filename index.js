
console.log('welcome to spotify')

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

//audioElement.play();
let Masterplay = document.getElementById('Masterplay');
let progressbar = document.getElementById('progress')
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItem = Array.from(document.getElementsByClassName("songItems"));
let songs = [
{ songName: "Let me love you - justin bieber" , filePath:"songs/1.mp3",coverPath:"covers/1.jpg" },
{ songName: "hymn for the weekend" , filePath:"songs/2.mp3",coverPath:"covers/2.jpg" },
{ songName: "Maula mere maula" , filePath:"songs/3.mp3",coverPath: "covers/3.jpg" },
{ songName: "todh - price narula" , filePath:"songs/4.mp3",coverPath: "covers/4.jpg" },
{ songName: "Mortals" , filePath:"songs/5.mp3",coverPath: "covers/5.jpg" },
]
songItem.forEach((element, i )=> {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

Masterplay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        Masterplay.classList.remove('fa-play-circle')
        Masterplay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        Masterplay.classList.remove('fa-pause-circle')
        Masterplay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }

})
//listen events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
// updating seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value*audioElement.duration/100;
    
})
const makeAllPlays = ()=>{
 Array.from(document.getElementsByClassName('songPlay')).forEach(element  => {
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")

    })
};

Array.from(document.getElementsByClassName('songPlay')).forEach(element  => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mastersongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        Masterplay.classList.remove("fa-play-circle");
        Masterplay.classList.add("fa-pause-circle");
        
    })
    });

    document.getElementById('next').addEventListener('click',()=>{
        if( songIndex>=4){
            songIndex = 0;
        }
        else{
            songIndex+=1
        }
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mastersongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        Masterplay.classList.remove("fa-play-circle");
        Masterplay.classList.add("fa-pause-circle");
    })
    
    document.getElementById('previous').addEventListener('click',()=>{
        if( songIndex<=0){
            songIndex = 0;
        }
        else{
            songIndex-=1
        }
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mastersongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        Masterplay.classList.remove("fa-play-circle");
        Masterplay.classList.add("fa-pause-circle");
    })
    