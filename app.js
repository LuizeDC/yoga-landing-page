function bookClass() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  alert(
    "Thank you, " +
      name +
      "! You'll receive an e-mail with more information. Namaste 💜 🧘 "
  );
}

let bookClassButton = document.querySelector("button");
bookClassButton.addEventListener("click", bookClass);
