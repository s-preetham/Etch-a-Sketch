let mouseState = false;
function rowsfunc() {
    delrow();
    num = document.getElementById('num');
    
    rows = Number(num.value);
    if (rows <=100) {
        for (let j=0;j<rows;j++) {
            for (let i=0;i<rows;i++){
                addRow();
            }
        }
        
        //console.log(document.querySelectorAll('.indi'));
        document.querySelectorAll('.indi').forEach(item => {
            item.addEventListener('mouseover', draw);
      })
        const rwidth = (512/rows)+"px";
        const rheight = (512/rows)+"px";
        //console.log(item.style.width);
        //console.log(item.style.height);
        document.querySelectorAll('.indi').forEach(item => {
            item.style.width = rwidth;
            item.style.height = rheight;
            
        })
    }
}
window.addEventListener("mousedown", () => (mouseState = true));
window.addEventListener("mouseup", () => (mouseState = false));


function draw(e) {
    if (mouseState) {
        selColor = document.getElementById('color-pick');
        bgcolor = selColor.value;
        e.target.style.backgroundColor = bgcolor;
      }
}
function drawRGB(e) {
    if (mouseState) {
        let red = Math.floor(Math.random(0)*255);
        let green = Math.floor(Math.random(0)*255);
        let blue = Math.floor(Math.random(0)*255);
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
      }
}

function rgbRandom() {
    document.querySelectorAll('.indi').forEach(item => {
        
        item.addEventListener('mouseover', drawRGB);
});
}
function proBlack() {
    
    document.querySelectorAll('.indi').forEach(item => {
        let n = 0;
        item.addEventListener('mouseover', event => {
            
            red = 255-(25*n);
            green = 255-(25*n);
            blue = 255-(25*n);
            item.style.backgroundColor = `rgb(${red},${green},${blue})`;
            n+=1;
    })
    
});
}

function clearCanv() {
    document.querySelectorAll('.indi').forEach(item => {
        item.style.backgroundColor = "white";
});
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


