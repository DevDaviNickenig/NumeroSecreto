const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(event) {
  chute = event.results[0][0].transcript
  exibeChuteNaTela(chute)
  verificaSeOChutePossuiValorValido(chute)
  // console.log(event.results[0][0].transcript)
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
  <div>Você disse:</div>
  <span class="box">${chute}</span>
  
  `
}

recognition.addEventListener('end', () => recognition.start())

// function getLocalStream() {
//   navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then((stream) => {
//     window.localStream = stream; // A
//     window.localAudio.srcObject = stream; // B
//     window.localAudio.autoplay = true; // C
//   }).catch((err) => {
//     console.error(`you got an error: ${err}`)
//   });
// }


// getLocalStream();