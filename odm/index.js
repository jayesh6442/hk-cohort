function change() {
  const a = document.querySelector("#one").value;
  const b = document.querySelector("#two").value;
  const d = document.querySelector("#result");
  let result = parseInt(a) + parseInt(b);
  d.innerHTML = result;
}
