// Your code here
const dodger = document.getElementById("dodger");
    dodger.style.backgroundColor = "#FF69B4";
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

function moveDodgerLeft(){
    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});

function moveDodgerRight(){
;    if (left < 400){
        dodger.style.left = `${left + 1}px`;
    }
}
document.addEventListener("keydown", function(e){
    if(e.key ==="ArrowRight"){
        moveDodgerRight();
    }
})