const fetchinfo = fetch("https://randomuser.me/api/?results=20")
  .then((response) => response.json())
  .then((data) => {
    window.localStorage.setItem("user", JSON.stringify(data));
  });
console.log(JSON.parse(localStorage.getItem("user")));
console.log(Object.keys(localStorage));
console.log(Object.keys(localStorage).length);
