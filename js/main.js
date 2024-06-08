const splash = document.getElementById("splash")

// if (!window.sessionStorage.getItem("isExecuted")) {
//     splash.style.visibility = "visible"
//     setTimeout(() => {
//         splash.style.visibility = "hidden"
//     }, 3000)
//     window.sessionStorage.setItem("isExecuted", true);
// }


const greeting = document.getElementById("greeting")

let greetings = [
    {
        img: "img/greeting-hiddev.svg"
    },
    {
        img: "img/greeting-wahid.svg"
    }
]

let count = greetings.length
let index = 0

setInterval(() => {
    change(index)
    index += 1
    if(index >= count) {
        index = 0
    }
}, 5000);

function change(index) {
    greeting.src = greetings[index]["img"]
}

const skill = document.getElementById("skill-row");
setInterval(() => {
    skill.style.flexDirection = "row-reverse";
    setTimeout(() => {
        skill.style.flexDirection = "row";
    }, 5000)
}, 10000)

const popup = document.getElementById("popup")
const certificate = document.getElementById("certificate")

function showCertificate(img) {
    if(popup.style.visibility == "visible") {
        popup.style.visibility = "hidden"
    } else {
        certificate.src = img
        popup.style.visibility = "visible"
    }
}
