// The const keyword value would never change
// The string value 'http' would always be assign in the variable http
const http = require('http');
// The string value 'fs' would always be assign in the variable fs
const fs = require ('fs')
// The string value 'url' would always be assign in the variable url
const url = require('url')
// Format the url with the querystring
var querystring = require('querystring')
const figlet = require('figlet')
// The method (createServer()) fires the function and adds the const http (or 'http') and assgins into the const server
const server = http.createServer( function(response, res){
  // The pathname ('/') is added on the text of the url and assigns it to the const page
  const page = url.parse(response.url).pathname;
  var params = querystring.parse(url.parse(response.url).query);
    console.log(page)
    // If the path of the url contains '/' run this conditional
    if(page == '/'){
      // Conditional '/', read the file index.html
      fs.readFile('index2.html', function(err, data){
        // Server response back with Code: level 200
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Server response back with data from the index.html file
        res.write(data);
        // Server ends the response of the index.html file
        res.end()
      });
    }
    // If the pathname contains '/api' in the url, run this condition
    else if(page == '/api'){
      //if 'pokemon' is one of the parameters (querystring), run this condition
      if('pokemon' in params){
        // if the parameter (querystring) is equal to the value 'pikachu', run this condition
        if(params['pokemon'] == 'pikachu'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          var objToJson = {
            name: "Pikachu",
            type: "Electric",
            category: "Mouse"
          }
          // Server ends the response of the object to the main.js file
          res.end(JSON.stringify(objToJson));
        }
        else if(params['pokemon'] == 'bulbasaur'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          var objToJson = {
            name: "Bulbasaur",
            type: "Grass/Poison",
            category: "Seed"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['pokemon'] == 'charmander'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Charmander",
          type: "Fire",
          category: "Lizard"
      }
      res.end(JSON.stringify(objToJson));
    }
      else if(params['pokemon'] == 'squirtle'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Squirtle",
          type: "Water",
          category: "Turtle"
      }
      res.end(JSON.stringify(objToJson));
    }
  } // if condition of pokemon
  } // Else if api condition
  else if(page == '/css/styles.css'){
    fs.readFile('css/styles.css', function(err, data){
      res.write(data);
      res.end();
    });
  }// End of else if condition for css
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }//End of the else if condition for javascript
  else{
    figlet('404!', function(err, data){
      if(err){
        console.log('Something went wrong......')
        return;
      }
      res.write(data);
      res.end()
    });
  }
}); // Create server function
// When the server is live, listens for the port localhost port 8000
server.listen(8000);
