// Data for the "HTML Images" Page

var images = [
    {caption: "Red Slate Mountain", alt: "Mountain", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Red_Slate_Mountain_1.jpg/320px-Red_Slate_Mountain_1.jpg"},
    {caption: "St. Petersburg River", alt: "River", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Saint-petersburg-river-march-24-2016.jpg/320px-Saint-petersburg-river-march-24-2016.jpg"},
    {caption: "Lybian Desert", alt: "Desert", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Libyan_Desert_-_2006.jpg/320px-Libyan_Desert_-_2006.jpg"},
    {caption: "Azerbaijan Forest", alt: "Forest", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Azerbaijan_forest_3.JPG/320px-Azerbaijan_forest_3.JPG"},
    {caption: "Indonesian Jungle", alt: "Jungle", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Indonesian_jungle3%2C_Zoo_Prague.jpg/320px-Indonesian_jungle3%2C_Zoo_Prague.jpg"}
];


// If i do window.onload = DisplayImages(); then html_ID gets defined as null 
// but if i do it the way below it find the id.  Why is this??????


window.onload = function  (){

    
   var html_ID = document.getElementById("HTML_Images");
   // console.log(html_ID);  //Used to check that html_ID exist

    for (var i = 0; i < images.length; ++i){ //Create objects

        

        figure = document.createElement("FIGURE");
        img = document.createElement("IMG");
        caption = document.createElement("H4");
        hyperlink = document.createElement("A");


        caption.appendChild(document.createTextNode(images[i].caption)); 

        img.setAttribute("src", images[i].url);
        img.setAttribute("alt", images[i].alt);

        hyperlink.setAttribute("href", images[i].url); 

        
        hyperlink.appendChild(img); //img object gains a hyper link

        figure.appendChild(hyperlink); // img+hyperlink at put into figure container
        figure.appendChild(caption);


        html_ID.appendChild(figure);

 

        

    }


}