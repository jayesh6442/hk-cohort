function change() {
  const a = document.createElement("h1");
  a.innerText = "we are created via dom";
  document.body.appendChild(a);
}

const b = document.querySelectorAll(".one");
console.log(b);

console.log(b.length);
