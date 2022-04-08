var speechRecognition = window.webkitSpeechRecognition
var recognition = new speechRecognition()

function start() {
    
    recognition.start()
}

recognition.onresult = function (event) {
    console.log(event)

    var Content = event.results[0][0].transcript
    console.log(Content)
}