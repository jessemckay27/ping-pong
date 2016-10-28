function pingPong(number) {


  var numberArray = [];
  for (i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      numberArray.push("<li class='ping-pong'>Ping Pong</li>");
    } else if (i % 5 === 0) {
      numberArray.push("<li class='pong'>Pong</li>");
    } else if (i % 3 === 0) {
      numberArray.push("<li class='ping'>Ping</li>");
    } else {
      numberArray.push("<li>" + i + "</li>")
    }
  }
  return numberArray;
}




$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#output").append(pingPong($("#input").val()));
  });
});







// function pingPong(number) {
//   var numberArray = [];
//   for (i = 1; i <= number; i++) {
//     if (i % 15 === 0) {
//       numberArray.push("<li class='ping-pong'>Ping Pong</li>");
//     } else if (i % 5 === 0) {
//       numberArray.push("<li class='pong'>Pong</li>");
//     } else if (i % 3 === 0) {
//       numberArray.push("<li class='ping'>Ping</li>");
//     } else {
//       numberArray.push("<li>" + i + "</li>")
//     }
//   }
//   return numberArray;
// }
//
// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     $("#output").append(pingPong($("#input").val()));
//   });
// });
