function change() {
  const a = document.querySelector("#one").value;
  const b = document.querySelector("#two").value;
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  let result = num1 + num2;
  const re = document.querySelector(".result");
  re.innerHTML = result;
}

const h1 = document.querySelector("h1");

h1.style.backgroundColor = "red";
h1.style.color = "blue";

h1.style.padding = "2rem";


h1.attribute 