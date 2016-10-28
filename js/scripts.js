function pingPong(number) {
  var numberArray = [];
  if (number <= 200) {
    for (i = 1; i <= number; i++) {
      if (i % 15 === 0) {
        numberArray.push("<li class='ping-pong'><span class='left-fix'>Ping Pong</span></li>");
      } else if (i % 5 === 0) {
        numberArray.push("<li class='pong'><span class='left-fix'>Pong</span></li>");
      } else if (i % 3 === 0) {
        numberArray.push("<li class='ping'><span class='left-fix'>Ping</span></li>");
      } else {
        numberArray.push("<li><span class='left-fix'>" + i + "</span></li>")
      }
    }
    return numberArray;
  } else {
    alert("Please enter a number from 1 to 200");
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#output").html(pingPong($("#input").val()));
  });
});
