// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];



window.onload = function(){
ListFruits();
CreateDirectory();
};

function CreateDirectory (child){ //child parameter tells us if we are modifying a child directory

//Was made in a way so even a directory type can have a directory type without this function breaking/producing invalid results

    var curFolder = "";
    var NewDirectory = document.createElement("UL");

   if (child){ //if we dealing with a child folder then set curFolder to child.files
       curFolder = child.files;

   }
   else {//if we are not dealing with a child then we are at root(specifed directory array above)
       curFolder = directory; 
       
   };

    for (var i = 0; i < curFolder.length; ++i){

        
      
        
        if (curFolder[i].type == "file"){

                
            var file = document.createElement("LI"); //create new list element
            var text = document.createTextNode(curFolder[i].name);

            file.appendChild(text);
           
        
            NewDirectory.appendChild(file);

        }   
        else if (curFolder[i].type == "directory"){
             
            child_Folder = CreateDirectory(curFolder[i]); //Create a new directory object 

            NewDirectory.appendChild(child_Folder);  // Add new directory object to current directory object


        }

       


    }

 
    if (child){ 
 
        //creates list item for parent dictating what directory it is
        folder_name = document.createElement("LI");
        var text = document.createTextNode(child.name); 
      
        folder_name.appendChild(text);
        folder_name.appendChild(NewDirectory);

        return folder_name;
    }

    else{ //if we are at root then print out tree
        
        (document.getElementById("videogames")).appendChild(NewDirectory);
    }

}



function ListFruits(){

    
    var Parent = document.getElementById("videogames");
    

    var Fruit_List = document.createElement("OL"); //Create new ordered list object

    
    for (var i = 0; i < fruits.length; ++i){//Create a new ordered list object for each fruit

        var List_Item = document.createElement("LI");
        var text = document.createTextNode(fruits[i]); 

        List_Item.appendChild(text);
        Fruit_List.appendChild(List_Item); //Add new fruit list item to ordered List(Fruit_List)
    }

    
    Parent.appendChild(Fruit_List);


}


