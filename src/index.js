document.addEventListener("DOMContentLoaded", () => {

  // your code here
  let listItems = [] 

  let currentForm = document.querySelector("#create-task-form")

  //Createa a New Task Submit Button
  currentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    ascBtn = document.getElementById('sort-asc')
    descBtn = document.getElementById('sort-dsc')

    // Define Selector
    let selectList = document.createElement("SELECT");
    let priority = ["High", "Medium", "Low"]
    for (let i = 0; i < priority.length; i++) {
      let option = document.createElement("option");
      option.value = priority[i];
      option.text = priority[i];
      selectList.appendChild(option);
    }
    selectList.value = "Low";

    // Define Delete Button
    let deleteButton = document.createElement("BUTTON");
    deleteButton.innerText = "Delete";

    // Define List Item
    let inputText = document.querySelector("#new-task-description").value;
    let listItem = document.createElement("P");
    listItem.innerText = `- ${inputText} `;
    listItem.id = 1;
    listItem.style.color = "green"
    listItem.style.background 
    listItems.push(listItem)

    //define Duration //dropdown?
    let duration = document.querySelector("#duration").value;
    let durationDisplay = document.createElement("P");
    durationDisplay.innerText = `${duration} minutes`
  

    // Append Selector/Delete Button/Duration to List Item
    listItem.append(selectList)
    listItem.append(deleteButton)
    listItem.append(durationDisplay)

    // DOM
    document.getElementById('list').append(listItem);
    document.querySelector("#new-task-description").value = "";
    deleteButton.addEventListener("click", (e) => {
      listItem.remove();
    })
    selectList.addEventListener("change", function() {
      if (selectList.value == "High") {
        listItem.style.color = "red"
        listItem.id = 3
      } else if (selectList.value == "Medium") {
        listItem.style.color = "yellow"
        listItem.id = 2
      } else if (selectList.value == "Low") {
        listItem.style.color = "green"
        listItem.id = 1
      }
    })

      //Sorting bAscending Order
      //sort listItems by id
      ascBtn.addEventListener("click", function() {
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].id == 1) {
          document.getElementById('tasks').append(listItems[i]);
        } 
      } 
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].id == 2) {
          document.getElementById('tasks').append(listItems[i]);
        }  
      }
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].id == 3) {
          document.getElementById('tasks').append(listItems[i]);
        } 
      } 
      })

      //Sort Descending Order
      descBtn.addEventListener("click", function() {
        for (let i = 0; i < listItems.length; i++) {
          if (listItems[i].id == 3) {
            document.getElementById('tasks').append(listItems[i]);
          } 
        } 
        for (let i = 0; i < listItems.length; i++) {
          if (listItems[i].id == 2) {
            document.getElementById('tasks').append(listItems[i]);
          }  
        }
        for (let i = 0; i < listItems.length; i++) {
          if (listItems[i].id == 1) {
            document.getElementById('tasks').append(listItems[i]);
          } 
        }
      })
  })
})
  

 