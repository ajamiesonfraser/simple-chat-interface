//A.J. Fraser's Chat User Interface
console.log("script loaded")

function mySubmit() {
  var message = document.getElementById("texttosend").value;
  console.log('This is Message: '+ message);
  document.getElementById("chatlog").appendChild(document.createTextNode(message));
  document.getElementById("chatlog").appendChild(document.createElement("br"));
  document.getElementById("texttosend").value = "";
}
// this is a test for my git