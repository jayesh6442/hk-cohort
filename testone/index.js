// const a = document.querySelector("#name");
// const { stringify } = require("querystring");
// a.innerHTML = `<h1>sarvaiya</h1>`
async function getData() {
  const a = await fetch("https://fakerapi.it/api/v1/persons");
  const finalData = await a.json();
}
getData();



















