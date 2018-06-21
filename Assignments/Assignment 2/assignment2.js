/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/



var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];



// Below used for date method(attribute) functions
month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
day = ["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] // 0 = Sunday




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

CustomerDB = {


    customers : [],

    
    addCustomer : function(New_customer){

        customers = this.customers;

        customers.push(New_customer); //Add new customer object to customers array

        if (customers[customers.length - 1].add_date == null  || customers[customers.length - 1].add_date == "undefined" ){ //check if object does not have a valid date

            customers[customers.length - 1].add_date = new Date(); //Adds data object containing current date & time
        }
        
    },

    outputCustomer(Arr_Index){ //Made this to avoid code duplication in outputCustomerByID & OutputAllCustomers functions

         //Made variable(s) for better readability (So when I view code again I can actually tell what it's printing and why)
         Name = "\nCustomer "  + customers[Arr_Index].customer_id + ": " + customers[Arr_Index].first_name + " " + customers[Arr_Index].last_name + " (" + customers[Arr_Index].email + ")\n";
                
         Home_Address = this.getAddressById(customers[Arr_Index].address_id);
        
         console.log(Name + Home_Address + "\n" + customers[Arr_Index].add_date );
         
         /*
         Customer 26: Dave Bennett (dbennett@gmail.com)
         Home Address: 3945 John St., Ajax, ON L7M4T9
         Joined: Wed Feb 01 2017 22:13:22 GMT-0500 (EST)
        */
    },

    outputCustomerByID : function(cust_id){

        customers = this.customers; 

        for ( i = 0; i < customers.length; ++i){

            if (customers[i].customer_id == cust_id) { //if parameter matches customer_id then print customer details
               
                this.outputCustomer(i);
               
            }


        }


    },

    outputAllCustomers : function(){

        customers = this.customers
        
        if (customers.length > 0){

            console.log("All Customers:")

            for (i = 0; i < customers.length; ++i){ 
                this.outputCustomer(i);
            }
            
        }
        else{
            console.log("CUSTOMER ARRAY IS EMPTY");
        }

    },

    outputCustomerByStore : function(str_id){

        Store_Name = this.getStoreById(str_id);

        console.log("\nCustomers in Store: " + Store_Name);
        
        for ( i = 0; i < customers.length; ++i){

            if (customers[i].store_id == str_id) { //if parameter matches customer_id then print customer details
    
                this.outputCustomer(i);
               
            }


        }
    },


    address : [],

    getAddressById : function(id){

        return "getAddressById not coded";

    },

    stores : [],

    getStoreById : function(id){

        return "GetStoreById not yet coded";
    },




    insertData : function(Data) { //insertData from AllData into approperiate arrays

        for (i = 0; i < Data.length; ++i) { //Scan entire allData Array of Objects
            switch (Data[i].type) { //Check each object for it's type & insert to correct DB accordingly

                case "customer":
                    console.log("TYPE: CUSTOMER")
                    this.addCustomer(Data[i].data)
                    break;

                case "address":
                    console.log("TYPE: ADDRESS")
                    break;

                case "store":
                    console.log("TYPE: STORE")
                    break;

            }

        }

    }



}



    CustomerDB.insertData(allData);
    CustomerDB.outputCustomerByStore(297);

/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/

/*

// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

*/
