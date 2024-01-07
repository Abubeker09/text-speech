let speech = new SpeechSynthesisUtterance();

let voices = []

let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices()
  speech.voice = voices[0];

  voices.forEach((voice, i)=> (voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.addEventListener('change', ()=>{
  speech.voice = voices[voiceSelect.value];
})

document.querySelector('button').addEventListener('click', () =>{
  let tex = document.querySelector('textarea').value
  if(tex){
    speech.text = tex;
    window.speechSynthesis.speak(speech);
    }else {
      alert("pleas type smthing in the textarea");
      };
})