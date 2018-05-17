  var linkFeedback = document.querySelector(".address .btn");
  var popup = document.querySelector(".form-feedback");
  var darkness = document. querySelector(".feedback-darkness");
  var close = document.querySelector(".form-feedback .close-cross-btn");
  var form = popup.querySelector("form");
  var submit = popup.querySelector(".btn");
  var nameFeedback = popup.querySelector("[name=name]");
  var emailFeedback = popup.querySelector("[name=e-mail]");
  var textFeedback = popup.querySelector("[name=textbox]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("form-feedback-show");
    darkness.classList.add("feedback-darkness-show");
    nameFeedback.focus();
  });

  if(storage) {
    emailFeedback.value = storage;
    emailFeedback.focus();
  } else {
    nameFeedback.focus();
  }

  linkFeedback.addEventListener("click", function (evt) {
    if (evt.keyCode === 13) {
      evt.preventDefault();
    } if (nameFeedback.value) {
      emailFeedback.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("form-feedback-show");
    popup.classList.remove("form-feedback-error");
    darkness.classList.remove("feedback-darkness-show");
  });

  darkness.addEventListener("click", function (evt) {
    popup.classList.remove("form-feedback-show");
    darkness.classList.remove("feedback-darkness-show");
  });

  submit.addEventListener("click", function (evt) {
    if (!emailFeedback.value || !textFeedback.value) {
      evt.preventDefault();
      popup.classList.remove("form-feedback-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("form-feedback-error");
      console.log("Напишите e-mail для ответа и сам вопрос");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("email", emailFeedback.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("form-feedback-show")) {
          evt.preventDefault();
          popup.classList.remove("form-feedback-show");
          popup.classList.remove("form-feedback-error");
          darkness.classList.remove("feedback-darkness-show");
      }
    }
  });
