(function () {
  let form = document.querySelector("#contact-form");
  let emailInput = document.querySelector("#contact-email");
  let telephoneInput = document.querySelector("#contact-tel");

  function validateEmail() {
    let value = emailInput.value;
    let hasAtSign = value.indexOf("@") > -1;
    let hasDot = value.indexOf(".") > -1;
    return value && hasAtSign && hasDot;
  }

  function validateTelephone() {
    let value = telephoneInput.value;
    let regEx =
      /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}/;
    if (value.match(regEx)) {
      return true;
    } else {
      alert("Please enter a valid phone number!");
      return false;
    }
  }

  function validateForm() {
    return validateEmail() && validateTelephone();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); //Do not submit to server
    if (validateForm()) {
      alert("Success!");
    }
  });
})();
