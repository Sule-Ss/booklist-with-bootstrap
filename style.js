let title = document.getElementById("title");
let author = document.getElementById("author");
let date = document.getElementById("date");
let button = document.getElementById("button");
let bookList = document.getElementById("book-list");
let form = document.querySelector("form");
let input = document.querySelectorAll("input");

title.focus();

let obj = [];

obj = JSON.parse(localStorage.getItem("taskList")) || [];
console.log(obj);

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input[0].value !== "" && input[1].value !== "" && input[2].value !== "") {

    obj.push({ title: title.value, author: author.value, date: date.value });

    localStorage.setItem("taskList", JSON.stringify(obj));

    bookList.innerHTML = "";
    createTask();
    console.log(obj);
    form.reset();
  } else {
    alert("please fill in the empty boxes");
    form.reset();
    title.focus();
  }
});

function createTask() {
  obj?.map(({ title, author, date }) => {
    return (bookList.innerHTML += `<tr>
      <td class="text-capitalize">${title}</td>
      <td class="text-capitalize">${author}</td>
      <td class="text-capitalize">${date}</td>
      <td class="text-capitalize btn del-btn btn-outline-info rounded-circle mt-1">x</td>
    </tr>`)
  });
}


bookList.addEventListener("click", (e) => {
  if (e.target.classList.contains("del-btn")) {
    e.target.parentElement.remove();
  }
});

title.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === "NumpadEnter") {
    author.focus();
  }
});

author.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === "NumpadEnter") {
    date.focus();
  }
});

document.addEventListener("DOMContentLoaded", createTask);
