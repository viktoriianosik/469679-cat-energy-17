var navigation = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation-toggle");

navigation.classList.remove("navigation--nojs");

navigation.addEventListener("click", function() {
  if (navigation.classList.contains("navigation--closed")) {
    navigation.classList.remove("navigation--closed");
    navigation.classList.add("navigation--opened");
  } else {
    navigation.classList.add("navigation--closed");
    navigation.classList.remove("navigation--opened");
  }
})
