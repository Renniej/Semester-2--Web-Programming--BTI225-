// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://github.com/allanrandall/BTI225W17/raw/master/movie.mp4", type: "video/mp4"},
        {src: "https://github.com/allanrandall/BTI225W17/raw/master/movie.ogg", type: "video/ogg"},
        {src: "https://github.com/allanrandall/BTI225W17/raw/master/movie.webm", type: "video/webm"}
    ]
};


window.onload = function(){


    html_ID = document.getElementById("vid_sec");
    video_element = document.createElement("VIDEO");
    
    source = video.source;

    video_element.controls = video.controls;
    video_element.width = video.width;
    video_element.height = video.height;


    for (var i = 0; i < source.length; ++i){

        src_element = document.createElement("SOURCE");

        src_element.src = source[i].src;
        src_element.type = source[i].type;

        video_element.appendChild(src_element);


    }

    html_ID.appendChild(video_element);



}