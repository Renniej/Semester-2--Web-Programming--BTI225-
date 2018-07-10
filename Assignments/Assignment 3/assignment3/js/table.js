// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

window.onload = function (){ 

    var parent = document.getElementById("tables")
    
    var table = document.createElement("TABLE");
    
    table.setAttribute("border", "1");


    for (var i = 0; i < 4; ++i){
    
  
    var header = document.createElement("TH");
       var text = "";

        switch(i){

            case 0: text = document.createTextNode("First Name");
            break;

            case 1:text = document.createTextNode("Last Name");
            break;

            case 2:var text = document.createTextNode("Age");
            break;

            case 3:var text = document.createTextNode("Email");
            break;
        }

        header.appendChild(text);
        table.appendChild(header);  

    }


    for (var i = 0; i < users.length; i++){
        

        var tr = document.createElement("TR");

        for (var j = 0; j < 4; ++j){
            
            var td = document.createElement("TD");
          var  text = "";

            switch(j){

                case 0: 
                text = document.createTextNode(users[i].first_name);
                td.appendChild(text);
                break;
    
                case 1:
                text = document.createTextNode(users[i].last_name);
                td.appendChild(text);
                break;
    
                case 2:
                text = document.createTextNode(users[i].age);
                td.appendChild(text);
                break;
    
                case 3: //
                 td.innerHTML = "<a href=mailto:" + users[i].email + ">" + users[i].email +  "</a>.";
                break;
            }

        
            

            tr.appendChild(td);

            table.appendChild(tr);

        }



    }



 



parent.appendChild(table);



}