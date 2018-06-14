
//TESTING GITHUB UPDATE


/******************************************
*   grader
*
*   Returns grade value in string(A, B, C ,D....)
******************************************/

var grader = function(perc){

var grade;


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

return grade;

}



/******************************************
*   showMultiples(num, numMultiples)
*
*   return multiples of num up to numMultiples 
******************************************/


function showMultiples(num, numMultiples){


    equation[numMultiples];
    
    console.log("\n")

 
for (i = 0 ; i > numMultiples; ++i  ){

    product= num * (i+1)
   equation[i] = "\n" num + " x " + (i+1) + "=" + product + "\n" 
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


    if(num1 == NaN|| num2 == NaN){

        largest = NaN;
    }
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

    finaltemp;

    if (convert == "FC"){

       finaltemp = (temperature -32) * 5/9;

    }

    else if(conver =="CF"){
        finaltemp = temperature * 9/5 + 32;
    }

    else{
        finaltemp = NaN;
    }

return Math.round(finaltemp * 10)/10;

}

/******************************************
*   evenNumbers(minNumber, maxNumber)
*
*   Show all even numbers between a range of 2 values
******************************************/


var evenNumbers = function(minNumber, maxNumber){

    EvenNumbers = "";

    tempNum;

    if (minNumber%2  != 0){
        minNumber++;
    }

    EvenNumbers += minNumber;

    for(i = minNumber; tempNum < maxNumber; ++i){
        tempNum += 2;
        EvenNumbers += "," + tempNum
    }

    return EvenNumbers;

}




/******************************************
*   PassingAverage()
*
*   Calculate average of grades
******************************************/


 passingAverage = function(){

    var sum;
    var Pass;

    for (i = 0; i < arguments.length; ++i){
        sum += arguments[i];
    }

    if (sum/arguments.length > 49){
        Pass = true;
    }
    else {
        Pass = false;
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
/*
Exception: SyntaxError: invalid increment/decrement operand
@Scratchpad/1:139
*/
/*
Exception: ReferenceError: D is not defined
grader@Scratchpad/1:20:5
@Scratchpad/1:221:38
*/
/*
Exception: ReferenceError: isNAN is not defined
largerNum@Scratchpad/1:75:1
@Scratchpad/1:237:47
*/
/*
Exception: ReferenceError: finaltemp is not defined
tempConvert@Scratchpad/1:100:5
@Scratchpad/1:245:48
*/
/*
Exception: SyntaxError: unexpected token: identifier
@Scratchpad/1:59
*/
/*
Exception: SyntaxError: unexpected token: identifier
@Scratchpad/1:59
*/