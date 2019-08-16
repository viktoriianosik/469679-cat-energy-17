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

var form = document.querySelector(".forms");
var weightForm = form.querySelector("[name=weight]");
var emailForm = form.querySelector("[name=email]");
var phoneForm = form.querySelector("[name=phone]");
var nameForm = form.querySelector("[name=name]");

form.addEventListener("submit", function (evt) {
  if (!nameForm.value || !mailForm.value || !weightForm.value || !phoneForm.value) {
    evt.preventDefault();
    form.classList.remove("form__input--error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add ("form__input--error");
  }
});
