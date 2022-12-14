const btn = document.getElementById("button");
const regLob = document.getElementById("reg-lobby");
const scaryLob = document.getElementById("scary-lobby");
const music = document.getElementById("music");

btn.addEventListener("click", jumpscare);
music.volume = 0.1;

function jumpscare() {
    lob1.style.display = 'none';
    scaryLob.style.display = 'flex';
    music.play();
}