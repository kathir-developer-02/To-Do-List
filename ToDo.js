let heading = document.getElementById("head");
let inpBox = document.getElementById("input-box");
let addBtn = document.getElementById("btn-add");
let inpDiv = document.getElementById("example");
let messDiv = document.getElementById("mm");

let arr = [];

function add(){

  messDiv.style.display = "none";
  
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "new-div text-white");
  inpDiv.append(newDiv);

  let newPara = document.createElement("p");

  let newBtn = document.createElement("button");
  newBtn.setAttribute("class", "btn-close btn-close-white p-3");
  
  newPara = inpBox.value;
  newDiv.append(newPara);
  newDiv.append(newBtn);

  arr.push(inpBox.value)
  
  newBtn.onclick = function() {deleteItem()};
  function deleteItem() {
    newDiv.remove();
    arr.splice(arr.length-1);

    if(arr.length===0){
      messDiv.style.display = "block";
    }

}

}
  