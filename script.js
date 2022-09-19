
function play_sound(e) {
    // console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(key);
    if(!audio) return; //stop the function from running all together
    key.classList.add('playing')
    audio.currentTime = 0; //rewind to  the start
    audio.play();
    
}

function remove_transition(e) {
    //  console.log(e);
    if(e.propertyName !== 'transform') return; // skip it if it is not a transform
    // console.log(e.propertyName);
    // console.log(this);
    this.classList.remove('playing')

}

const keys = document.querySelectorAll('.key');


keys.forEach(key => key.addEventListener('transitionend', remove_transition))

window.addEventListener('keydown', play_sound)



