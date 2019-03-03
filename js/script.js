var button = document.querySelector(".button-write-us");
var popup = document.querySelector(".contact-us");
var close = popup.querySelector(".modal-close");
var name = popup.querySelector("[name=name]");
var form = popup.querySelector(".contact-us-form");
var mail = popup.querySelector("[name=e-mail]");
var textarea = popup.querySelector("[name=textarea]");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    name.value = storage;
    mail.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!mail.value || !name.value || !textarea) {
    evt.preventDefault();
    popup.offsetWidth = popup.offsetWidth;
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("mail", mail.value);
    }
  }
});

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
  storage = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
