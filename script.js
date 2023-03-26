let body = document.getElementById("body");
let elm = document.createElement("div")
elm.id = "cls"
let time = document.createElement("span")
time.id = "time"
let locations = document.createElement("span")
time.id = "loc"
let m = Math

let mm = document.getElementById("mm");
let message = document.createElement("span");
message.id = "msg"
message.innerText = "Recording info.. "
setInterval(() => {
    elm.innerText = ((m.floor(m.random() * 100000000000000000000 + 999999999999)));
    time.innerText = new Date

    elm.appendChild(time)
    elm.appendChild(locations)
    locations.innerText = "   Near Gopalganj Bihar";
    elm.appendChild(message)
}, 200);
alert("Sorry ! Website is under development. Come back later ⏰⏰⏰")

document.addEventListener("click", () => {
    mm.style.display = "none"
    body.appendChild(elm);
    setTimeout(() => {
        message.innerText = "Data recorded "
    }, 2000);
    setTimeout(() => {
        message.innerText = "Sent "
    }, 4000);

    // setInterval(() => {
    //     alert("This site is stealing your data")
    // }, 20000);
})
