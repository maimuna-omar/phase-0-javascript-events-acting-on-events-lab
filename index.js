//Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
 function moveDodgerRight() {
function moveDodgerRight() {
   const dodger = document.getElementById('dodger');
   const currentLeft = parseInt(dodger.style.left.replace('px', ''));
   const newLeft = Math.min(currentLeft + 10, window.innerWidth - 40);
   dodger.style.left = `${newLeft}px`;
 }


