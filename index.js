h1 = document.getElementById("h1");
number = document.getElementById("number");
counth1 = document.getElementById("count");

if (h1.innerHTML == "1") {
  h1.innerHTML = "Delete";
} else if (h1.innerHTML == "0") {
  h1.innerHTML = "undefined";
} else if (h1.innerHTML == "") {
  h1.innerHTML = "undefined";
} else {
  h1.innerHTML = "Delete All";
}

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      change()
  }
});

function change() {
  h1.innerHTML = number.value;
  counth1.innerHTML = number.value;

  if (h1.innerHTML == "1") {
    h1.innerHTML = "Delete";
  } else if (h1.innerHTML == "0") {
    h1.innerHTML = "undefined";
  } else if (h1.innerHTML == "") {
    h1.innerHTML = "undefined";
    counth1.innerHTML = "none";
    counth1.style.color = "#8b0000";
  } else {
    h1.innerHTML = "Delete All";
  }
}