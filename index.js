// Decrement Button Functionality

var counter = localStorage.getItem("CounterNumber");

document.querySelector("#dec").addEventListener("click", decFn);

document.querySelector("h1").innerText = localStorage.getItem("CounterNumber");

function decFn(){
  //  console.log("Dec Clicked")

    counter--;

    document.querySelector("h1").innerText = counter;
    localStorage.setItem("CounterNumber", counter);

   // console.log(counter)
}

document.querySelector("#inc").addEventListener("click", incFn);

function incFn(){

    counter++;

    document.querySelector("h1").innerText = counter;
    localStorage.setItem("CounterNumber", counter);
}