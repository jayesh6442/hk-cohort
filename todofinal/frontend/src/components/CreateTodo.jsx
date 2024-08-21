/* eslint-disable no-unused-vars */
import { useState } from "react";
import Input from "./Input";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <Input
        name="title"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Input
        name="description"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("https://localhost:3000/create-todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
          }).then(async (res) => {
            const json = await res.json();
            alert("todo added");
          });
        }}
      >
        Add todo
      </button>
    </div>
  );
}

export default CreateTodo;
