let title = document.getElementById("title");
let author = document.getElementById("author");
let date = document.getElementById("date");
let button = document.getElementById("button");
let bookList = document.getElementById("book-list");
let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let delete = document.querySelector(".delete");

title.focus();

let oldList = JSON.parse(localStorage.getItem("todoItem"));
window.addEventListener("load", () => {
  console.log(oldList);
  console.log(inputList);
  oldList.forEach((element) => {
    CreateItem(element);
  });
});


const createTask = (title, author, date) => {
    
    return `
          <tr>
            <td class="text-capitalize">${title}</td>
            <td class="text-capitalize">${author}</td>
            <td class="text-capitalize">${date}</td>
            <td class="text-capitalize btn del-btn btn-outline-info rounded-circle mt-1 delete">x</td>
          </tr>`;
  };

let inputList = oldList ? oldList : [];
button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input[0].value !== "" && input[1].value !== "" && input[2].value !== "") {
      bookList.innerHTML += createTask(title.value,author.value, date.value);
  
    //   objCreate();
      
      form.reset();
  
    } else {
      alert("please fill in the empty boxes");
      form.reset();
      title.focus();
    }
});


bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")) {
      let deleteItem = e.target.parentElement
      deleteItem.remove();
    }
  });

delete.addEventListener("click", ()=>{

})

