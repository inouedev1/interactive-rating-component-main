function toggleActive(button) {
    var buttons = document.querySelectorAll("#rating button");
    buttons.forEach(function(btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  }
  function getSelectedRating() {
    var buttons = document.querySelectorAll("#rating button");
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].classList.contains("active")) {
        return buttons[i].textContent;
      }
    }
    return null;
  }
  function submitRating() {
    var selectedRating = getSelectedRating();
  
    if (selectedRating === null) {
      alert("Please select a rating before submitting.");
    } else {
      showThankYou(selectedRating);
    }
  }
  function showThankYou(selectedRating) {
    var ratingBox = document.getElementById("box1");
    ratingBox.style.display = "none";
    var thankYouDiv = document.getElementById("thank");
    thankYouDiv.style.display = "block";
    var thankYouMessage = document.querySelector("#thank .rating");
    thankYouMessage.textContent = "You selected " + selectedRating + " out of 5";
    thankYouMessage.style.color = "hsl(25, 97%, 53%)";
  }