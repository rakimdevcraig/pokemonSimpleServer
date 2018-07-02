// User can choose what pokemon he would like to get for information about
// User can select what type of Pokemon
// User clicks on button to display information
// Information about the pokemon is display in the document(a.k.a DOM)

// User clicks on button
// Event listener
document.getElementById("search").onclick = request;
// When button is click the function request fires
function request(){
  //The value assigned in select is pulled from the (DOM) and stored in the variable Pokemon
  var pokemon = document.getElementsByTagName("select")[0].value;
  console.log(pokemon)
  // Retrieve data from the server from the URL and stores it in the variable req
  var req = new XMLHttpRequest();
  //When the URL includes '/api?pokemon=' this is telling the js it is true
  req.open('GET', '/api?pokemon='+pokemon, true);
  // If the URL is true, run this function
  req.onload = function(){
    console.log("Works")
    // Code: 200 means OKAY, everything is good. Code:300 requires more info to locate endpoint
    if(req.status >= 200 && req.status < 400){
      //Successful endpoint or URL
      // Taking the object req with property name responseText and storing the value thats in property (responseText) to the variable data
      var data = JSON.parse(req.responseText);
      console.log(data)
      // The data for the pokemon information is display in the (DOM)
      document.getElementById("name").innerHTML = data.name
      document.getElementById("type").innerHTML = data.type
      document.getElementById("category").innerHTML = data.category
    }else{
      // If we reach our target server but receive an error, level Code: 300 below 400

    }
  };
  // If URL if not true, run this function
  req.onerror = function(){
    // There was a connection error of some sort, level Code: 400 or above
  }
  // If there are no errors, send the information to the erver
  req.send();
}
