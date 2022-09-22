const fetchinfo = fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then((data) => console.log(data));
