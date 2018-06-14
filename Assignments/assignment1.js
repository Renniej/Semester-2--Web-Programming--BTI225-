
/******************************************
*   grader
*
*   Returns grade value in string(A, B, C ,D....)
******************************************/

var grader = function(perc){

var grade;

    

//self-explaintory
    
if (isFinite(perc)){    
    
  if (perc < 50 ){

      grade  = "F";

  }

  else if (perc < 60){
    grade = "D";
  }
  
  else if (perc < 70){
    grade = "C";
  }

  else if (perc < 80){
    grade = "B";
  }

  else if (perc > 80){
    grade = "A";
  }  

 

   }
    else{
        grade = "Invalid percentage";
    }
    
    return grade;
}



/******************************************
*   showMultiples(num, numMultiples)
*
*   return multiples of num up to numMultiples 
******************************************/


function showMultiples(num, numMultiples){


    equation = ""; // Note: String to represent output method

    
 if (isFinite(num) && isFinite(numMultiples)){   
    console.log("\n") //required by instructions


    for (i = 0 ; i < numMultiples; ++i  ){  //calculate product then add full solution to string

        product= num * (i+1); //calculates
       equation += ("\n" +  num + " x " + (i+1) + "=" + product + "\n" ); //adds full solution to string for evenutal console output
    }

     
 }
  else{
      equation = "INVALID PARAMETERS"
  }
    
   return equation; 
    

}



/******************************************
*   largerNum(num1, num2)
*
*   return largest number 
******************************************/

var largerNum = function(num1, num2){

largest = 0;


    if( !isFinite(num1) || !isFinite(num2)){ //check if parameters are a number

        largest = "Invalid parameters"; 
    }
    
    //self-explaintory
    else if (num1 < num2){

        largest=  num2;
    }
    else {

        largest = num1;
    }

return largest;

}

/******************************************
*   tempConvert(temperature, convert to)
*
*   convert Fahrenheit-to-Celsius & vice versa
******************************************/

function tempConvert(temperature, convert){

  
//self-explaintory
    
 if( (convert == "FC" || convert == "CF")  &&  isFinite(temperature)     )  {
    if (convert == "FC"){

       finaltemp = (temperature -32) * 5/9;  //F to C conversion formula
       finaltemp = Math.round(finaltemp*10)/10 //round to nearest decimal
    }

    else if(convert =="CF"){
        finaltemp = temperature * 9/5 + 32; //C to F conversion formula
        finaltemp = Math.round(finaltemp*10)/10 //round to nearest decimal
    }


    }     
else{ //if convert variable isnt a valid selection
        finaltemp = "Conversion method not valid";
    }

return finaltemp

}

/******************************************
*   evenNumbers(minNumber, maxNumber)
*
*   Show all even numbers between a range of 2 values
******************************************/


var evenNumbers = function(minNumber, maxNumber){

    

 if (isFinite(minNumber) && isFinite(maxNumber)){
    
    if (minNumber%2  != 0){  //check if minNumber is a even number
        minNumber++; //if not start minNumber at nearest & highest even Number
    }
    
    
    
    EvenNumbers = String(minNumber); //Create string for eventual console output
    
    tempNum = minNumber;  //Set a tempNum variable to handle calculations

    
    
    for(i = minNumber; tempNum < maxNumber; ++i){  //Prepare string for all even numbers
         tempNum += 2;
        EvenNumbers += "," + tempNum
      
    }

   }
 else {
     EvenNumbers = "Invalid parameters";
 }
    
    
    
    return EvenNumbers; //return completed string

}




/******************************************
*   PassingAverage()
*
*   Calculate average of grades
******************************************/


 passingAverage = function(){

    var sum = 0;
    var Pass

    for (i = 0; i < arguments.length; ++i){  //add up all grades
        
        if (!isFinite(arguments[i])){
            Pass = "INVALID PARAMETERS"
            break;
        }
        
        sum += arguments[i];
        
        
    }
if (Pass == undefined){
    if (sum/arguments.length > 49){
        
        Pass = true;
    }
    else {
        Pass = false;
    }
}
     else{
         Pass = "INVALID PARAMETERS"
     }
     

return Pass;

}


/******************************************
*   counter
*
*   A new function that returns a single number – one (1).  
However, every time this function is invoked (called) in the future, 
this function will return a number that is one greater than the previous 
time it was invoked (called).  
******************************************/


function counter(){

   c = 0;

    return function count() {

     c++;
     return c;

      

    }
}





/********************************
 *          TEST DATA           *
 *  write all of your functions *
 *      ABOVE this comment      *
 *                              *
 *  NOTE: the code below simply *
 *  invokes each function to    *
 *  show the result - it does   *
 *  not state whether the       *
 *  output is correct or not    *
 ********************************/

// Function 1 (grader)   

console.log('grader(53) returns: ' + grader(53));
console.log('grader(72) returns: ' + grader(72));
console.log('grader(91) returns: ' + grader(91));

console.log("\n");

// Function 2 (showMultiples)

console.log('showMultiples(2,8) returns: ' + showMultiples(2,8));
console.log('showMultiples(3,2) returns: ' + showMultiples(3,2));
console.log('showMultiples(5,4) returns: ' + showMultiples(5,4));

console.log("\n");

// Function 3 (largerNum)
  
console.log('largerNum(2095,106) returns: ' + largerNum(2095,106));
console.log('largerNum("23",14) returns: ' + largerNum("23",14));
console.log('largerNum(108,"a") returns: ' + largerNum(108,"a"));

console.log("\n");

// Function 4 (tempConvert)

console.log('tempConvert(22,"CF") returns: ' + tempConvert(22,"CF"));
console.log('tempConvert(76,"FC") returns: ' + tempConvert(76,"FC"));
console.log('tempConvert(16,"CF") returns: ' + tempConvert(16,"CF"));

console.log("\n");

// Function 5 (evenNumbers)

console.log('evenNumbers(4,13) returns: ' + evenNumbers(4,13));
console.log('evenNumbers(3,10) returns: ' + evenNumbers(3,10));
console.log('evenNumbers(8,21) returns: ' + evenNumbers(8,21));

console.log("\n");

// Function 6 (passingAverage)

console.log('passingAverage(75,42,98) returns: ' + passingAverage(75,42,98));
console.log('passingAverage(34,93,77,89,49) returns: ' + passingAverage(34,93,77,89,49));
console.log('passingAverage(33,61) returns: ' + passingAverage(33,61));

console.log("\n");

// Functinon 7 (counter)

var count = counter();

console.log('counter() returns: ' + count);
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());



