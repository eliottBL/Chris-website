let audio = document.getElementById("myAudio"); 
let onPlay = false;
let player = document.getElementById('player');
let vol = 0;

player.addEventListener("click",PlayPauseAudio, IsPlaying);





function PlayPauseAudio() { 
  if (onPlay === false){
    audio.volume = 0
    audio.play();
    FadeIn(audio.volume);
    onPlay = true; 
  } else {
    audio.pause(); 
    onPlay = false
  }
} 

function IsPlaying(){
  if(onPlay===false){
    onPlay=true;
  } else {
    onPlay=false;
  }
}



function FadeIn(vol){
  console.log(vol)
  setTimeout(function(){
      if (vol<0.9){
        vol = vol + 0.1;
        FadeIn(vol);
      }
    }, 1000);
}

function FadeOut(vol){
  console.log(vol)
  setTimeout(function(){
      if (vol>0){
        vol = vol - 0.1;
        FadeIn(vol);
      }
    }, 1000);
}




