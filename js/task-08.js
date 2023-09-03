const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (password === "" || email === "") {
    alert("Please fill in all the fields!");
  } else {
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
    form.reset();
  }
};

form.addEventListener("submit", handleSubmit);
