// Sliders
let index = -1;

showSlider();

function hideAllSlider() {
  let sliders = document.querySelectorAll(".slider");
  let sliderCount = sliders.length;

  for (let i = 0; i < sliderCount; i++) {
    sliders[i].style.display = "none";
  }
}

function showSlider() {
  hideAllSlider();

  index++;

  let sliders = document.querySelectorAll(".slider");

  if (index == sliders.length) {
    index = 0;
  }

  let slider = sliders[index];

  if (slider) {
    slider.style.display = "block";
  } else {
    console.log("Slider not found");
  }

  setTimeout(showSlider, 2000);
}