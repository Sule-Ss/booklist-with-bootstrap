let title = document.getElementById("title");
let author = document.getElementById("author");
let date = document.getElementById("date");
let button = document.getElementById("button");
let bookList = document.getElementById("book-list");
let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let plus = 0;
title.focus();
const createTask = (title, author, date) => {
  return `
        <tr>
        <th scope="row">${plus}</th>
          <td class="text-capitalize">${title}</td>
          <td class="text-capitalize">${author}</td>
          <td class="text-capitalize">${date}</td>
          <td class="text-capitalize btn del-btn btn-outline-info">x</td>
        </tr>`;
};
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input[0].value !== "" && input[1].value !== "" && input[2].value !== "") {
    plus += 1;
    bookList.innerHTML += createTask(title.value, author.value, date.value);
    form.reset();
  } else {
    alert("please fill in the empty boxes");
    form.reset();
    title.focus();
  }
});

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
