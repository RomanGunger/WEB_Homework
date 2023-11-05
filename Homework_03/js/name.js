
let userName

function askName() {

    userName = document.getElementById("inputField05").value

    getMessage();
}

function getMessage() {
    document.getElementById("result1").innerText = "Hello " + userName

    document.getElementById("inputField05").value = ''
}
