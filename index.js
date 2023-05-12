let realNumber0 = 0
let realNumber1 = 0
document.getElementById("zero-home").textContent = realNumber0
document.getElementById("zero-guest").textContent = realNumber1


let number = document.getElementById("zero-home")
let number1 = document.getElementById("zero-guest")


function HomeButton1() {
    let result = realNumber0 + 1
    realNumber0 += 1
    number.textContent = result
}

function HomeButton2() {
    let result = realNumber0 + 2 
    realNumber0 += 2
    number.textContent = result
}

function HomeButton3() {
    let result = realNumber0 + 3
    realNumber0 += 3
    number.textContent = result
}

// Guest Section

function GuestButton1() {
    let result = realNumber1 + 1
    realNumber1 += 1
    number1.textContent = result
}

function GuestButton2() {
    let result = realNumber1 + 2 
    realNumber1 += 2
    number1.textContent = result
}

function GuestButton3() {
    let result = realNumber1 + 3
    realNumber1 += 3
    number1.textContent = result
}
