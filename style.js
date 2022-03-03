let title = document.getElementById("title");
let author = document.getElementById("author");
let date = document.getElementById("date");
let button = document.getElementById("button");
let bookList = document.getElementById("book-list");
let form = document.querySelector("form");
let input = document.querySelectorAll("input");

title.focus();

const createTask = (title, author, date) => {
    
  return `
        <tr>
          <td class="text-capitalize">${title}</td>
          <td class="text-capitalize">${author}</td>
          <td class="text-capitalize">${date}</td>
          <td class="text-capitalize btn del-btn btn-outline-info rounded-circle mt-1">x</td>
        </tr>`;
};
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input[0].value !== "" && input[1].value !== "" && input[2].value !== "") {
    bookList.innerHTML += createTask(title.value,author.value, date.value);

    objCreate();
    
    form.reset();

  } else {
    alert("please fill in the empty boxes");
    form.reset();
    title.focus();
  }
});

let obj = [];
function objCreate(){
  // eğer önceden kaydımız varsa onu çekiyoruz yoksa boş bir tane oluşturuyoruz:
  obj = JSON.parse(localStorage.getItem("library"))||[];
  //OBJ ye yeni veri atama:
  obj = [{title:title.value, author: author.value, date : date.value}];

  // local storageye kaydetme
  localStorage.setItem("library", JSON.stringify(obj))
}
function create2(){

  // localstorageden geri çekme
  obj = JSON.parse(localStorage.getItem("library"));
  console.log(obj);
  obj.forEach(item => {
    // console.log(item.title);
    bookList.innerHTML += createTask(item.title, item.author, item.date);
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

document.addEventListener("DOMContentLoaded", create2);