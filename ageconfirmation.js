function age() {
  let yearDate = document.getElementById("birthyear").value;

  let Age = 2026 - yearDate;

  let confirmation = document.getElementById("confirmation");

  let confirmation2 = document.getElementById("confirmation2");

  if (yearDate === "") {
    confirmation.textContent = "Please insert your date of birth";

    confirmation2.textContent = "......";
  } else if (Age < 18) {
    confirmation.textContent = Age;

    confirmation2.textContent = "Access Denied";
  } else {
    confirmation.textContent = Age;

    confirmation2.textContent = "Access Granted";
  }
}
