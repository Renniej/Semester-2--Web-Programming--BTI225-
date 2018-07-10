// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://github.com/allanrandall/BTI225W17/raw/master/Track03.mp3", type: "audio/mpeg"},
        {src: "https://github.com/allanrandall/BTI225W17/raw/master/Track03.ogg", type: "audio/ogg"}
    ]
};


window.onload = function(){

    var html_ID = document.getElementById("audio_sec");
    var audio_element =  document.createElement("AUDIO");
    var source = audio.source;


    audio_element.controls = true;

    for (var i = 0; i < source.length; ++i){

        src_element = document.createElement("SOURCE");
        src_element.src = source[i].src;
        src_element.type = source[i].type;

        audio_element.appendChild(src_element);


    }

    html_ID.appendChild(audio_element);


}

