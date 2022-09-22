const fetchinfo = fetch("https://randomuser.me/api/?results=20")
  .then((response) => response.json())
  .then((data) => {
    window.localStorage.setItem("user", JSON.stringify(data));
  });
console.log(JSON.parse(localStorage.getItem("user")));
console.log(Object.keys(localStorage));
console.log(Object.keys(localStorage).length);

//Form validation..
const msgSender = document.getElementById("para");
const mail = document.myForm.email.value;
const password = document.myForm.password.value;
const formValidation = () => {
  if (mail == null && password == null) {
    msgSender.innerHTML = "Enter a valid email ID";
    return false;
  }
};
