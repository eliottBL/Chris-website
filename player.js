const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const audioElement = document.getElementById("myAudio");
const track = audioCtx.createMediaElementSource(audioElement);
const fader = document.getElementById("volume");




const playButton = document.getElementById('player');
const gainNode = audioCtx.createGain();

playButton.addEventListener('click', function() {
    audioCtx.resume();
    
    gainNode.gain.value = 0;
    fader.style.display = "flex";

    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
    
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
    }
	
}, false);



const volumeControl = document.querySelector('[data-action="volume"]');
volumeControl.addEventListener('input', function() {
	gainNode.gain.value = this.value;
}, false);

track.connect(gainNode).connect(audioCtx.destination);

