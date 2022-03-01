// Function assignment by Sami

// Variables
let aEl = document.getElementById("area1");
let b1El = document.getElementById("base1");
let b2El = document.getElementById("base2");
let hEl = document.getElementById("height");

// Event Listener
aEl.addEventListener("click", calcArea);

// Event Function
function calcArea() {

    // Input 
    let b1 = +b1El.value;
    let b2 = +b2El.value;
    let h = +hEl.value;


    // Output
    document.getElementById("area-output").innerHTML = areaMath(b1, b2, h);

}
// Formula for area
function areaMath(b1, b2, h) {
    return (b1 + b2) / 2 * h
}