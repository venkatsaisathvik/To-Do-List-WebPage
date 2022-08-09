let hide = document.getElementById("parentlist")

let addBtn = document.getElementById("addbtn")
addBtn.addEventListener('click', additem)
var input = document.getElementById("myinput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addbtn").click();
  }
});
let plist = document.getElementById("parentlist")

function additem(e){
    if(plist.children[0].className == "emptymsg text-center"){
        plist.children[0].remove()
    }
    let hide = document.getElementById("parentlist")
    hide.removeAttribute("hidden")
    let curbtn = e.currentTarget;
    let curtext = curbtn.previousElementSibling
    let curvalue = curtext.value   
    let newli = document.createElement('li')
    //newli.classList.add('list-group-item')
    newli.className = "list-group-item d-flex justify-content-between"
    newli.innerHTML = `<h3 class="flex-grow-1">${curvalue}</h3>
        <button id="edit" class="btn btn-danger mx-2" onclick="edititem(this)">Edit</button>
        <button id="rembtn" class="btn btn-outline-primary " type="button" id="button-addon3 "onclick="remitem(this)">Remove</button> </li>`
    plist.appendChild(newli)
    let rem = document.getElementById("Remmsg text-center")
    rem.remove()
}
function remitem(item){
    item.parentElement.remove()
    let plist = document.getElementById("parentlist")
    if(plist.children.length <= 0){
        let empmsg = document.createElement("h3")
        empmsg.textContent = "Enter Your Tasks"
        empmsg.className = "emptymsg text-center"
        plist.appendChild(empmsg)
    }
}
function edititem(curitem){
    if(curitem.textContent == "Done"){
        curitem.textContent = "Edit"
        let curitemname = curitem.previousElementSibling.value
        let curtitle = document.createElement('h3')
        curtitle.className = "flex-grow-1"
        curtitle.textContent = curitemname
        curitem.parentElement.replaceChild(curtitle, curitem.previousElementSibling)
    }
    else{
    curitem.textContent = "Done"
    let curitemname = curitem.previousElementSibling.textContent
    let curinput = document.createElement('input')
    curinput.type = "text"
    curinput.className = "form-control"
    curinput.placeholder = "Edit Here"
    curinput.value = curitemname
    curitem.parentElement.replaceChild(curinput, curitem.previousElementSibling)
    }
}