let globalid = 1;
function addTodo() {
  const title = document.querySelector("#title").value;
  const desription = document.querySelector("#description").value;
  // const original = document.querySelector(".container").innerHTML;

  // document.querySelector(".container").innerHTML =
  //   original +
  //   `<div>
  //   <div>${title}</div>
  //   <div>${desription}</div>
  //   <button>mark as done</button>
  // </div>`;
  createDiv(title, desription, globalid++);
}

function markasdone(todoid) {
  const div = document.getElementById(todoid);
  // console.log(div);
  div.children[2].innerHTML = " done  ";
}
function createDiv(title, description, id) {
  const outerDiv = document.createElement("div");

  const titleDiv = document.createElement("div");
  const descriptionDiv = document.createElement("div");
  const mark = document.createElement("button");
  mark.innerHTML = "mark as done";
  titleDiv.innerHTML = title;
  descriptionDiv.innerHTML = description;
  outerDiv.setAttribute("id", id);
  outerDiv.appendChild(titleDiv);
  outerDiv.appendChild(descriptionDiv);
  outerDiv.appendChild(mark);
  mark.setAttribute("onclick", `markasdone(${id})`);
  document.body.appendChild(outerDiv);
}
