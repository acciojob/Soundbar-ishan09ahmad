const sounds=["applause","boo","gasp","tada","victory","wrong"];

const buttonsDiv=document.querySelector("#buttons");

const audioElements = {};

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.innerText = sound;
  btn.classList.add("btn");

  const audio = new Audio(`sounds/${sound}.mp3`);
  audioElements[sound] = audio;

  btn.addEventListener("click", () => {
    stopAllSounds();
    audio.play();
  });

  buttonsDiv.appendChild(btn);
});

	
const stopBtn = document.createElement("button");
stopBtn.innerText = "Stop";
stopBtn.classList.add("stop");

stopBtn.addEventListener("click", stopAllSounds);

buttonsDiv.append(stopBtn);

function stopAllSounds() {
  for (let sound in audioElements) {
    audioElements[sound].pause();
    audioElements[sound].currentTime = 0;
  }
}




