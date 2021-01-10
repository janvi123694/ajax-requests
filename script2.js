
function fetchRandomDogImg(){

// 1. MAKE A XML HTTP REQUEST

 var xhrRequest = new XMLHttpRequest();  // created the obj

 xhrRequest.onload = function(){  // when the object has been loaded ; once u get the request

   console.log(xhrRequest.response); // xhrRequest.response() yields json data (String)

   var responseJSON  = JSON.parse(xhrRequest.response); //JSON.parse() -> conversion of string to JSON obj  JSON.stringify() -> json obj->string

   var imgUrl = responseJSON.message; // we want to extract message prop from JSON obj
   $("#dog-img").attr('src',imgUrl); 

  
 };

 xhrRequest.open('GET','https://dog.ceo/api/breeds/image/random',true) // 1. open->initialise obj 2.args -> (method,link,boolean val) 

 /* 1.3rd para denotes a boolean val.  2.want req to be async or not 3. T-> async F->sync  4. default -> async therefore dont have to mention unless u want it as sync

  ASYNC -> code wont wait for response; SYNC-> wait for the  response. preferred during tasks like signing in 
  */
  

 //2. SEND THE REQUEST TO THE SERVER
  xhrRequest.send();
 }

$('#fetch-dog-img-btn').click(fetchRandomDogImg); // on click 
