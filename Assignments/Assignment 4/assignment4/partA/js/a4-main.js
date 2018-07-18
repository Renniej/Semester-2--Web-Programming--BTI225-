var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)



window.onload = function() {
    loadTableWithFilters();
}

function loadTableWithFilters(){

    var parent = document.getElementById("main-table-body");
   

    parent.innerHTML = ""; //clear previous rendered data


    for (var i = 0; i < petData.length; ++i){ //Go through the petData database

        
        if ( filterType == "" &&  petData[i].age >= filterAgeMin  && petData[i].age <= filterAgeMax ){ //If there is no filter on type then only look at age

            var row = CreatePetRow(petData[i]);
            parent.appendChild(row);

        }

        else if (petData[i].type == filterType  &&  petData[i].age >= filterAgeMin  && petData[i].age <= filterAgeMax){ //else filter through to mkae sure age & type match
          
            var row = CreatePetRow(petData[i]);
            parent.appendChild(row);
        
        }
    
    
    
    }

}


function CreatePetRow(pet){

    //console.log("CreatePetRow(" + pet.name + ") Called");

    var row = document.createElement("TR");

    var Image_data = document.createElement("TD");
    var img = document.createElement("IMG");


    var Meta_data = document.createElement("TD");
    var Name = document.createElement("H4");
    var Desc = document.createElement("P");
    var Age = document.createElement("SPAN");
    

    //Create Image object
        img.src = pet.image.src;
        img.alt = pet.image.alt;
        img.width = pet.image.width;
        img.height = pet.image.height;

        Image_data.appendChild(img); //Add to image_data object


    //Create Image Meta-Data object
    var Name_Text = document.createTextNode(pet.name);
        Name.appendChild(Name_Text);  //Name = Bella

        Desc.innerHTML = pet.description;

    var Age_Text = document.createTextNode("Age: " + pet.age + " years old."); // Age: 0.5 years old.
        Age.appendChild(Age_Text);

    Meta_data.appendChild(Name);
    Meta_data.appendChild(Desc);
    Meta_data.appendChild(Age);


    //Finalize row object by merging Image and pet Meta_Data with it

    row.appendChild(Image_data);
    row.appendChild(Meta_data);

    //return row object to wherever it was called

    return row;


}

//I found myself copying and pasting a lot of code so i just did this instead
//also this works better as you can look at more specific things such as
// cats that are between 1-3yrs old
function filter(type, min, max){  //Changes filter settings 
 

    console.log (type + min + max);
    if (type){
        filterType = type;
        console.log("FilterType: " + filterType);
    }

    if (min != undefined && max != undefined ){
        
        filterAgeMin = min;
        filterAgeMax = max;
        console.log("FilterMin: " + filterAgeMin + " FilterMax: " + filterAgeMax);
    }

    loadTableWithFilters();

}

function filterReset(){
    filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
    filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
    filterAgeMax = Number.MAX_VALUE; 
    loadTableWithFilters();

    console.log("FILTER RESET CALLED")
}