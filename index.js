const fetchinfo = fetch("https://randomuser.me/api/?results=20")
  .then((response) => response.json())
  .then((data) => {
    //Local storage
    localStorage.setItem("user", JSON.stringify(data.results));
    const userProfile = JSON.parse(localStorage.getItem("user"));
    console.log(userProfile);
  });

//Checking the element is present or not
const prof = JSON.parse(localStorage.getItem("user"));
console.log(prof[1].email);
console.log(prof[1].login.password);

//Form validation

var mail = document.getElementById("email").value;
var passWord = document.getElementById("pass").value;

const formValidation = () => {
  var email = [];
  var pass = [];
  userProfile.forEach((data) => {
    email.push(data.login.email);
    pass.push(data.login.password);
  });
  // console.log(email);
  // console.log(pass);
  var ele = username.indexof(userName);
  console.log(ele);
  if (ele > 0) {
    if (mail == email[ele] && passWord == pass[ele]) {
      window.open("index.html");
    } else {
      document.getElementById("para").innerHTML = "Invalid ID";
    }
  }
};
