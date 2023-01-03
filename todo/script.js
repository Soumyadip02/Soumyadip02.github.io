function Update() {

 title = document.getElementById("title").value;
 descp = document.getElementById("descp").value;
   if(title == '' && descp == ''){
       alert("No data to add to list\nPlease enter data to add😘");
     }
   else {
    if (localStorage.getItem("Items") == null) {
        ItemsArray = [];
        ItemsArray.push([title, descp]);
        localStorage.setItem("Items", JSON.stringify(ItemsArray));
    }
    else {
        ItemsArraystr = localStorage.getItem("Items")
        ItemsArray = JSON.parse(ItemsArraystr);
        ItemsArray.push([title, descp]);
        localStorage.setItem("Items", JSON.stringify(ItemsArray));
    };
    allUpdate();
    //code to clear the text fields
    if (title != "" || descp != "") {
        document.getElementById("title").value = "";
        descp = document.getElementById("descp").value = "";
    }

}
}
function allUpdate() {
    if (localStorage.getItem("Items") == null) {
        ItemsArray = [];
        localStorage.setItem("Items", JSON.stringify(ItemsArray));
    }
    else {
        ItemsArraystr = localStorage.getItem("Items")
        ItemsArray = JSON.parse(ItemsArraystr);
        localStorage.setItem("Items", JSON.stringify(ItemsArray));
    }
   let tablebody = document.getElementById("tablebody");
   let str = "";
    ItemsArray.forEach((element, index) => {
        str += `
<tr>
  <td align="center" class="index">${index + 1}</td>
  <td>${element[0]}</td>
  <td>${element[1]}</td>
  <td align="center"><button class="btn"onclick="Del(${index})">Delete</button></td>
</tr>`;
    });
    tablebody.innerHTML = str;
}
addto = document.getElementById("addto");
addto.addEventListener("click", Update);
allUpdate();

function Del(Itemsindex) {
    ItemsArraystr = localStorage.getItem("Items")
    ItemsArray = JSON.parse(ItemsArraystr);
    ItemsArray.splice(Itemsindex, 1)
    localStorage.setItem("Items", JSON.stringify(ItemsArray));
    allUpdate();
}
function ClearList() {
    if (confirm("It will clear your Todo list data.\nStill want to clear the data?")) {
        localStorage.clear();
        allUpdate();
    }
}
