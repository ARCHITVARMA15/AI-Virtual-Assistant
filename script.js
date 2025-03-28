let btn = document.querySelector("#btn1")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")


function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase())

}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none";
    voice.style.display = "block";

})

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";
    if (message.includes("hello") || message.includes("hey") || message.includes("hi")) {
        speak("Hello!What Can I help you With")
    } else if (message.includes("what are you")) {
        speak("I am virtual Assistance for your Help")
    } else if (message.includes("open youtube")) {
        speak("Opening Youtube")
        window.open("https://www.youtube.com/")
    }
    else if (message.includes("open google")) {
        speak("Opening Google")
        window.open("https://www.google.com/")
    }
    else if (message.includes("open facebook")) {
        speak("Opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if (message.includes("open instagram")) {
        speak("Opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if (message.includes("open whatsapp")) {
        speak("Opening Whatsapp")
        window.open("whatsapp://")
    } 
    else if (message.includes("open calculator")) {
        speak("Opening calculator")
        window.open("calculator://")
    }

    else if (message.includes("time")) {
       let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time);
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date);
     }
    
    else {
       let final_Text= "this is what i found regarding" +message.replace("aswen", "") || message.replace("ashwin", "")
        speak(final_Text)
        window.open(`https://www.google.com/search?q=${message.replace("aswen", "") || message.replace("ashwin", "")},"_blank"`)
    }
}