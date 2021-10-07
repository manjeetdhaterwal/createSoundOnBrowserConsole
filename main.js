const speak = (msg) => {
const sp = new SpeechSynthesisUtterance(msg);
[sp.voice] = speechSynthesis.speak(sp);
}; 
speak('hey there! '+'I am using Hike');
