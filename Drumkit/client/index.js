// function whic play the audio
function playSound(e)
{
    // audio equal key (querySelector find first equality)
    const audio = this.document.querySelector(`audio[data-sound_key="${e.key}"]`);
    // sound_key eqyal key
    const sound_key = this.document.querySelector(`.sound_key[data-sound_key="${e.key}"]`);

    if(!audio)  return;
    // fast repeating enable
    audio.currentTime = 0;
    audio.play();
    //add class to class sound_key
    sound_key.classList.add('playing');
}

// function which removes class pl back ti class sound_key
function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
// finding all keys and for each keys adding eventlistener
const keys = document.querySelectorAll('.sound_key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)