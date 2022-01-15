var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var text_box = document.getElementById("textbox");

function take_selfie(){
    text_box.innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    text_box.innerHTML = content;
    console.log(content);

    if (content == "take my selfie"){
        console.log("taking selfie");
        speak();
    }
};

function speak(){
    var synth = window.speechSynthesis;
    var speak_data = "Taking selfie in 5 seconds";
    var speak_this = new SpeechSynthesisUtterance(speak_data);

    synth.speak(speak_this);
    Webcam.attach(camera);
    setTimeout(function (){
    take_selfie();
    save();
    },5000);
}

var camera = document.getElementById("webcam");
Webcam.set({
    width: 360,
    hight: 250,
    image_format: 'png',
    png_qualty: 90
});
   
function take_selfie(){
    Webcam.snap(
        function (data_uri){
            document.getElementById("output").innerHTML = "<img id='selfie' src='"+ data_uri +"'/>";
        }
    );
}

function save(){
    link = document.getElementById("link");
    img = document.getElementById("selfie").src;
    link.href = img;
    link.click();
}

