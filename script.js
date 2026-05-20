let input = document.querySelector("#inputfield");

let button = document.querySelector("#submit");

let result = document.querySelector("#output");

/* --------------- Function for toDo app --------------- */

function todoApp() {
  button.addEventListener("click", () => {
    let inputResult = input.value;

    /* =============== Validation for empty string =============== */

    if(inputResult.trim() === ""){
      alert('Empty field cannot be added');
      return;
    }

    let createList = document.createElement("li");
    createList.innerHTML = inputResult;

    let delButton = document.createElement("button");
    delButton.innerHTML = "Remove Task";

    delButton.setAttribute("id", "removeButton");

    let pushValue = createList.appendChild(delButton);

    let finalResult = result.appendChild(createList);

    input.value = "";

    delButton.addEventListener("click", (e) => {
      e.preventDefault();

      createList.remove();
    });
  });
}
 
todoApp();
