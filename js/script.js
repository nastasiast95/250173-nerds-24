var button = document.querySelector(".button-write-us");
var popup = document.querySelector(".contact-us");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector(".contact-us-form");
var mail = popup.querySelector("[name=e-mail]");
var textarea = popup.querySelector("[name=textarea]");

var storageLogin = localStorage.getItem("login");
var storageEmail = localStorage.getItem("mail");

var isStorageSupport = true;
try {
  storage = localStorage.getItem("login");
  storage = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}


button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage && isStorageSupport) {
    login.value = storageLogin;
    mail.value = storageEmail;
    textarea.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!mail.value || !login.value || !textarea) {
    popup.offsetWidth = popup.offsetWidth;
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("mail", mail.value);
    }
  }
});

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