function pingPong(number) {
  var numberArray = [];
  if (number <= 200) {
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
  } else {
    alert("please enter a number between 1 and 1000");
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#output").html(pingPong($("#input").val()));
  });
});






// var pingPong = function(number) {
//   var numberArray = [];
//   if (number <= 1000) {
//     for (i = 1; i <= number; i++) {
//       if (i % 15 === 0) {
//         // numberArray.push("<li class='ping-pong'>Ping Pong</li>");
//         numberArray.push("<li class='ping-pong'>Ping Pong</li>");
//       } else if (i % 5 === 0) {
//         // numberArray.push("<li class='pong'>Pong</li>");
//         numberArray.push("<li class='pong'>Pong</li>");
//       } else if (i % 3 === 0) {
//         // numberArray.push("<li class='ping'>Ping</li>");
//         numberArray.push("<li class='ping'>Ping</li>");
//       } else {
//         // numberArray.push("<li>" + i + "</li>")
//         numberArray.push("<li>" + i + "</li>")
//       }
//     }
//     return numberArray;
//   } else {
//     alert("please enter a number between 1 and 1000");
//   }
// }
//
// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     // refactored this simpler code into a single piece
//     // var input = $("#input").val();
//     // var output = pingPong(input);
//     // $("#output").html(output);
//     $("#output").html(pingPong($("#input").val()));
//   });
// });
