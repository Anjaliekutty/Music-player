let currentMusic=0;

const music=document.querySelector('#audio')

const seekBar=document.querySelector('.seekbar')
const songName=document.querySelector('.music-name')
const artistName=document.querySelector('.artist-name')
const disc=document.querySelector('.disc')
const currentTime=document.querySelector('.currentime')
const musicDuration=document.querySelector('.song-duration')
const plyBtn=document.querySelector('.ply-Btn')
const forwardBtn=document.querySelector('.forward-btn')
const backwardBtn=document.querySelector('.backward-btn')

plyBtn.addEventListener('click',()=>{
    if(plyBtn.className.includes('pause')){
        music.play();
    }else{
        music.play();
    }
    plyBtn.classList.toggle('puse');
    disc.classList.toggle('play');
})

const setMusic=(i)=>{
    seekBar.value=0;
    let song=song[i]
    currentMusic=i;
    music.src=song.path;

    songName.innerHTML=song.name
    artistName.innerHTML=song.artist
    disc.style.backgroundImg=`url('${song.cover}')`;


    currentTime.innerHTML='00:00';
    setTimeout(()=>{
        seekBar.max=music.duration;
        musicDuration.innerHTML=formatTime(music.duration)
        
    } ,300);
    
}
setMusic(0);

const formatTime=(time)=>{
    let min= Math.floor(time / 60);
    if(min<10){
        min=`0${min}`;
    }
    let sec=Math.floor(time % 60);
    if(sec<10){
        sec=`0${sec}`;
    }
    return `${min}: ${sec}`;
}