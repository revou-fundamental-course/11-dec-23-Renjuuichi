let name = prompt("Who are you!?", "");
document.getElementById("name") .innerHTML = name


//slider

let currentIndex = 0
const images = document.querySelectorAll(".slider-image")
const totalImages = images.length

function changeImage() {
    images[currentIndex].style.display = "none"
    currentIndex = (currentIndex +1) % totalImages
    images[currentIndex].style.display = "block"
}

setInterval(changeImage, 2000)






  function validateForm() {
    var name = document.forms["message-form"]["full-name"].value;
    var date = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;
var now = new Date();

    if (name == "" || date == "" || gender == "" || messages == "") {
      alert("Input can't be empty!");
      return false;
    }

    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = date;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
    document.getElementById("sender-time").innerText = now;
    return false;
  }



  