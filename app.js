const inputElement = document.getElementById("inpt");
const addBtn = document.getElementById("add");
const listParent = document.querySelector("ol");
inputElement.addEventListener("mousemove", () => {
  inputElement.style.borderColor = "red";
  inputElement.addEventListener("focus", () => {
    inputElement.style.outline = "red";
  });
});

inputElement.addEventListener("mouseout", () => {
  inputElement.style.borderColor = "";
});

//when enter button is press, addBtn should also work
inputElement.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

addBtn.addEventListener("click", () => {
  // let paraContent = inputElement.value;
  let newList = document.createElement("li");
  // let para = document.createTextNode(paraContent);
  newList.textContent = `${inputElement.value}`;
  // newList.appendChild(para);
  listParent.appendChild(newList);
  // THE above code snippet, add new list element and make child of existing ol element
  newList.style.marginTop = "10px";
  newList.style.border = "solid blur 2px";
  newList.style.backgroundColor = "white";
  newList.style.width = "91%";
  newList.style.height = "50px";
  newList.style.position = "relative";

  inputElement.value = "";

  // time task
  let entryPara = document.createElement("p");

  const now = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    //   second: "2-digit",
  };
  const formattedDate = now.toLocaleDateString("en-US", options);
  entryPara.textContent = `Entered at:${formattedDate}`;
  entryPara.style.position = "absolute";
  entryPara.style.bottom = "1px";
  newList.appendChild(entryPara);
  console.log("hello");

  // done and delete button task
  const optionDiv = document.createElement("div");
  const delBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  //apply css on all the new created buttons
  optionDiv.style.width = "30%";
  optionDiv.style.height = "4vh";
  optionDiv.style.display = "flex";
  optionDiv.style.justifyContent = "space-around";
  optionDiv.style.position = "absolute";
  optionDiv.style.bottom = "0";
  optionDiv.style.right = "2px";
  // optionDiv.style.border = "1px solid black";
  delBtn.textContent = "Delete";
  delBtn.style.color = "white";
  delBtn.style.backgroundColor = "red";
  delBtn.style.width = "40%";
  delBtn.style.cursor = "pointer";
  delBtn.style.border = "none";
  doneBtn.textContent = "Done";
  doneBtn.style.color = "white";
  doneBtn.style.backgroundColor = "green";
  doneBtn.style.width = "40%";
  doneBtn.style.cursor = "pointer";
  doneBtn.style.border = "none";
  // add the botton as an child of newList
  optionDiv.appendChild(doneBtn);
  optionDiv.appendChild(delBtn);
  adjustTextSize();
  window.addEventListener("resize", adjustTextSize);

  //
  function adjustTextSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 365) {
      delBtn.style.fontSize = "8px";
      entryPara.style.fontSize = "8px";
    } else if (screenWidth < 480) {
      doneBtn.style.fontSize = "10px";
      delBtn.style.fontSize = "10px";
      entryPara.style.fontSize = "9px";
    } else if (screenWidth < 580) {
      entryPara.style.fontSize = "10px";
      delBtn.style.fontSize = "10px";
      doneBtn.style.fontSize = "8px";
    } else if (screenWidth < 675) {
      doneBtn.style.fontSize = "12px";
      delBtn.style.fontSize = "12px";
    } else if (screenWidth < 810) {
      doneBtn.style.width = "45%";
      delBtn.style.width = "45%";
      entryPara.style.fontSize = "12px";
    } else {
      doneBtn.style.fontSize = "14px";
      delBtn.style.fontSize = "14px";
      optionDiv.style.width = "30%";
      entryPara.style.fontSize = "16px";
      doneBtn.style.width = "40%";
      delBtn.style.width = "40%";
    }
  }
  newList.appendChild(optionDiv);

  // delBtn task
  delBtn.addEventListener("click", () => {
    newList.remove();
  });

  // doneBtn task
  doneBtn.addEventListener("click", () => {
    if (doneBtn.textContent == "Done") {
      // input text erase
      newList.style.color = "grey";
      newList.style.textDecoration = "line-through";

      // time erase task
      entryPara.style.color = "grey";
      entryPara.style.textDecoration = "line-through";

      // delBtn and doneBtn color change
      doneBtn.style.backgroundColor = "grey";
      delBtn.style.backgroundColor = "grey";

      // undo btn task
      doneBtn.textContent = "Undo";
    } else {
      // input text unerase
      newList.style.color = "black";
      newList.style.textDecoration = "none";

      // time unerase task
      entryPara.style.color = "black";
      entryPara.style.textDecoration = "none";

      // done btn task
      doneBtn.textContent = "Done";
      doneBtn.style.backgroundColor = "green";
      delBtn.style.backgroundColor = "red";
    }
  });
});

// addbtn size task
btnSize();
window.addEventListener("resize", btnSize);

function btnSize() {
  const addBtnWid = window.innerWidth;
  if (addBtnWid < 500) {
    addBtn.style.width = "15%";
  } else if (addBtnWid < 675) {
    addBtn.style.width = "13%";
  } else {
    addBtn.style.width = "10%";
  }
}
