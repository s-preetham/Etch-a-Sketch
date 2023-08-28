function askUser() {
    delrow();
    rows = prompt("How many squares on each side?",16);
    for (let j=0;j<rows;j++) {
        for (let i=0;i<rows;i++){
            addRow();
        }
    }
    console.log(document.querySelectorAll('.indi'));
    document.querySelectorAll('.indi').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = "red";
    })
  })
}

function addRow() {
    var e1 = document.createElement("div");
    e1.className = "indi";
    var cont = document.getElementById("container")
    cont.appendChild(e1);
}
function delrow() {
    let e = document.getElementById('container');
    while(e.firstChild) {
        e.removeChild(e.firstChild);
    }
}


