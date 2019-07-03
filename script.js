// var ul = document.getElementById("ulLi");

function addList(){
    
    // var inputList = document.getElementById("todoList").value;
    // var t = document.createTextNode(inputList);
    // var li = document.createElement("li");
    // var btn = document.createElement("button");
    // var btnx = document.createTextNode("x");
    // btn.setAttribute("onclick", "remove()");
    // btn.appendChild(btnx);
    // li.appendChild(t);
    // li.appendChild(btn);   
    // ul.appendChild(li);

    // localStorage["List"] = ul.innerHTML;
    // document.getElementById("todolist").value = "";
    let li = document.createElement("li");
    let inputList = document.getElementById("todoList").value;
    let t = document.createTextNode(inputList);
    li.appendChild(t);
    if (inputList === '') {
        alert("You must write something!");
    } 
    else {
        document.getElementById("ulLi").appendChild(li);
    }
    document.getElementById("todoList").value = "";  
    

    let checkarray = !!localStorage.getItem("todoList")? JSON.parse(localStorage.getItem("todoList")) : [];
    checkarray.push(inputList);
    let str = localStorage.setItem("todoList", JSON.stringify(checkarray));



    let parse = localStorage.getItem("todoList");
    let obj = JSON.parse(parse);

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    li.appendChild(span);
    closeBtn(close);
    
    
}

const closeBtn = function(close){
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
    }

}
//hide item on close
let close = document.getElementsByClassName ("close");
let i;
closebtn("close");

function reload(){
   let localValue = localStorage.getItem("todoList");
   let i;
   for(i = 0 ; i < JSON.parse(localStorage.getItem("todoList")).length; i++){
       document.getElementById('ulLi').innerHTML = JSON.parse(localStorage.getItem("todoList"));
   }

    
}


// function remove(){
//     var eliminate = this.event.currentTarget.parentNode;
//     alert("you are removing");
//     ul.removeChild(eliminate);

// }

// if (localStorage["list"]) {
//     ul.innerHloca;TML = localStorage["list"];
// }