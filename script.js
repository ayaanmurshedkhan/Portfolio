
function scrollToTop() {
  window.scrollTo({
    top:0,
    behavior: "smooth"
  });
}

function submitRecommendation() {
  var recommendationText = document.getElementById("recommendation-text").value;

  if(recommendationText.trim() === "") {
    alert("Please enter a recommendation.");
  } else {
    document.getElementById('popup').style.display = "flex";
  }
}

function closepopup() {
  document.getElementById('popup').style.display = "none";
}