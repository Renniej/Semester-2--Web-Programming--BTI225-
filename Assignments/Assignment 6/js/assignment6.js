// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1

window.onload = function(){

	makeRequest(1);

}


function CreateData(Text_Data, type){
	
	var Data = document.createElement("TD");

	if (type == "Text"){
		
		var Text = document.createTextNode(Text_Data);
		Data.appendChild(Text);

	}
	else if (type == "Image"){
		
		var Image = document.createElement("IMG");
		Image.src = Text_Data;

		Data.appendChild(Image);
	}


	return Data;


}



function makeRequest(pageNum) {




    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	//
	// "https://reqres.in/api/users?page=1" // for page 1
	// "https://reqres.in/api/users?page=2" // for page 2
	// etc...
	
	var url;

	switch(pageNum) {
		case 1:
			url =  "https://reqres.in/api/users?page=1";
			break;
		case 2:
			url =  "https://reqres.in/api/users?page=2";
			break;
		case 3:
			url =  "https://reqres.in/api/users?page=3";
			break;
		case 4:
			url =  "https://reqres.in/api/users?page=4";
			break;
	} 

	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete






	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct


			var table = document.getElementById("data");
			table.innerHTML = '';

		// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"

			for (var i =0; i <jsData.per_page; ++i){  //per_page represents length D:

				//Get row data ready
				var User_ID = CreateData(jsData.data[i].id, "Text");
				var F_Name  = CreateData(jsData.data[i].first_name, "Text");
				var L_Name = CreateData(jsData.data[i].last_name, "Text");
				var Avatar = CreateData(jsData.data[i].avatar, "Image");


				//create row object with data
				var Row = document.createElement("TR");
				Row.appendChild(User_ID);
				Row.appendChild(F_Name);
				Row.appendChild(L_Name);
				Row.appendChild(Avatar);

				//add row object to table
				table.appendChild(Row);
				
			}

	
			


			
			// TODO: remove the class "active" from all elements with the class "pgbtn"
			
			Remove_Active_Buttons = document.getElementsByClassName("active");

		if (Remove_Active_Buttons){
			for (var i =0; i < Remove_Active_Buttons.length; ++i){
				Remove_Active_Buttons[i].classList.remove("active");
			}
		}

			
			
			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
		
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
			
			document.getElementById("pgbtn" + jsData.page).classList.add("active");

			
			
			
			

		} else {
			console.log('There was a problem with the request.');
		}
	}
}	