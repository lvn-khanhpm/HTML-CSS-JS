// Sliders
function hideAllSlider() {
  let sliders = document.querySelectorAll(".slider");
  let sliderCount = sliders.length;

  for (let i = 0; i < sliderCount; i++) {
    sliders[i].style.display = "none";
  }
}

function showSlider(index) {
  let slider = document.querySelectorAll(".slider")[index];

  if (slider) {
    slider.style.display = "block";
  } else {
    console.log("Slider not found");
  }
}

hideAllSlider();

showSlider(0);
