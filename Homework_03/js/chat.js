
let userName

function askName() {

    userName = document.getElementById("inputField01").value + ": "

    showDivAttid(false, "nameDiv")
    showDivAttid(true, "messagesDiv")
}

function showDivAttid(visible, divName){

    if(visible) {
        document.getElementById(divName).style.display = 'inline';
        return
    }
    document.getElementById(divName).style.display = 'none';
}

function getMessage() {
    var newMessage = document.createElement("li")

    newMessage.innerHTML = userName + document.getElementById("inputField02").value
    document.getElementById("messages").appendChild(newMessage)

    document.getElementById("inputField02").value = ''
}
