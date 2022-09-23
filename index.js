const fetchinfo = fetch("https://randomuser.me/api/?results=20")
  .then((response) => response.json())
  .then((data) => {
    window.localStorage.setItem("user", JSON.stringify(data));
  });
const userProfile = JSON.parse(localStorage.getItem("user"));
console.log(userProfile);

const msgsender = document.getElementById("para");
const formValidation = () => {
  let mailId = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (mailId == null || password == null) {
    return false;
  } else if (password < 6) {
    return true;
  }
};
