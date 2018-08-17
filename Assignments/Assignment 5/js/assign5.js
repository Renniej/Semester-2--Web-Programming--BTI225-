loaded = false;

window.onload = function() {
    loaded = true;
  };


function Submit() {
    

    if (loaded){

    bool = true;



    Check_Name("First_Name");
    Check_Name("Last_Name");
    Check_Password("Password");
   Check_Phone()
   Check_Edu()

    }


    return bool;
 }



 function Check_Edu(){

    var checkboxes = document.getElementsByName("Edu_Status");
  
    var Error_Found = true;


    Delete_Error_HTML(checkboxes[2]);

    for (var i =0; i < checkboxes.length; ++i ){

        if (checkboxes[i].checked){
            Error_Found = false;
            break;
        }


    }


    if (Error_Found){
        Create_Error_HTML("Must select one of these menu options", checkboxes[2]);

    }

    return !Error; //true if Error is not found


 }

function Check_Phone(){
    var Error_Found = false; //Indicator for if error is found
    var Err_Msg = ""; //Stores Error Message;
 
    var Field_Phone =  document.getElementById("Phone_Number"); //Grab First_Name Object
    
    Delete_Error_HTML(Field_Phone);

    if (Field_Phone.value == ""){ //Check if input is empty
        Error_Found = true;
 

        Err_Msg = "Phone number field can not be empty.";
        console.log(Err_Msg);
    }
    else if (!Field_Phone.value.match(/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/)){
        Error_Found = true;
        Err_Msg = "Must be in the format of 999-999-9999 ('9' here means digit only)";
        console.log(Err_Msg);
    }   
    else if(Field_Phone.value[0] == 0 && Field_Phone.value[1] == 0 && Field_Phone.value[2] == 0   ){
        Error_Found = true;
        Err_Msg = "The area code (first 3 numbers in 999) can't be all zeros (0)'s ";
        console.log(Err_Msg);
    }
    else if(Field_Phone.value == "000-000-0000"){
        Error_Found = true;
        Err_Msg = "The actual phone number can't be all zeros (0)'s ";
        console.log(Err_Msg)
    }



    if (Error_Found){
        Create_Error_HTML(Err_Msg, Field_Phone);

    }

    return !Error; //true if Error is not found

}

 function Check_Password(field){  
 
    var Error_Found = false; //Indicator for if error is found
    var Err_Msg = ""; //Stores Error Message;
 
    var Field_Password =  document.getElementById("Password"); //Grab First_Name Object

    var Field_Re_Pass = document.getElementById("Re_Password");

    Delete_Error_HTML(Field_Password);

    
    

    if (!Field_Password.value.match(/[A-Z]/) ){
        Error_Found = true;
        Err_Msg = "Password must contain  upper  characters.";
    }
    else if ( !Field_Password.value.match(/[a-z]/)){
        Error_Found = true;
        Err_Msg = "Password must contain  lower case characters.";

    }
    else if (!Field_Password.value.match(/\d+/g)){
        Error_Found = true;
        Err_Msg = "Password must contain at least 1 number.";
    }
    else if (Field_Password.value.length < 8){
        Error_Found = true;
        Err_Msg = "Password must be at least 8 characters long.";
    }
    else if(  Field_Password.value != "" && Field_Re_Pass.value != ""  ){

        if (Field_Password.value != Field_Re_Pass.value){
            Error_Found = true;
            Err_Msg = "Passwords do not match.";
        }
    }
        


    if (Error_Found){
        Create_Error_HTML(Err_Msg, Field_Password);

    }

    return !Error; //true if Error is not found
 }




function Create_Error_HTML(Err_Msg, field){ //Creates HTML object representing Error message
    var Error_Object = document.createElement("LABEL");
    Error_Object.className = "Err_Msg";
    Error_Object.textContent = Err_Msg;
    console.log("Error_Object created with msg: " + Err_Msg);



    field.parentElement.appendChild(Error_Object);
    return Error_Object;
}

function Delete_Error_HTML(field){//Check if an errorObject already exist and delete it

    var Error_Object=field.parentElement.getElementsByClassName("Err_Msg")[0]; //Grabs current error object
    
    if (Error_Object){
        field.parentElement.removeChild(Error_Object);
    }
}

 function Check_Name(field){

    var Error_Found = false; //Indicator for if error is found
    var Err_Msg = ""; //Stores Error Message;

    var Field_Name = document.getElementById(field); //Grab First_Name Object

    var Accpetable_Chars = /^[a-zA-Z '-]+$/; //regex value found on stackoverflow (I understand the concept, learnt it in UNIX)
   

    if (loaded){ //check if window is loaded before continuing 


    Delete_Error_HTML(Field_Name);





    //Check for valid input
    if (Field_Name.value == ""){ //Check if input is empty
        Error_Found = true;
        var tmp_field = field;

        Err_Msg = tmp_field.replace("_", " ") + " field can not be empty.";
        console.log(Err_Msg);
    }

    else if (!Field_Name.value.match(Accpetable_Chars)){ //check if input only contains acceptable characters
        Error_Found = true;
        Err_Msg = "Invalid Characters: Only alphabetical, hypens, apostrophes are allowed.";
        console.log(Err_Msg);
    }

    else if(!Field_Name.value.match(/[a-zA-Z]+$/)){ //check if input has at least one alphabetical letter
        Error_Found = true;
        Err_Msg = "Must have at least 1 alphabetic character (a-z)(A-Z).";
        console.log(Err_Msg);
    }

    


    
    if (Error_Found){//If Error then create an error message
        
       Create_Error_HTML(Err_Msg, Field_Name);
        
    }

    
    
    
    
    }

    return !Error; //true if Error is not found

 }