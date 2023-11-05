

function getNumbers(opetarion) {
    document.getElementById("resultField").innerText = "Result:"

    num1 = document.getElementById("inputField03").value
    num2 = document.getElementById("inputField04").value

    calculate(num1, num2, opetarion)
}

function calculate(num1, num2, opetarion){
    let result

    if(num1 == "" || num2 == ""){
        result = "Input valid numbers, both fields must be filled"
        showResult(result)
        return
    }

    switch(opetarion){
        case '+':
            result = add(num1, num2)
            break
        case '-':
            result = sub(num1, num2)
            break
        case '/':
            result = div(num1, num2)
            break
        case '*':
            result = mul(num1, num2)
            break
    }

    showResult(result)
}

function add(num1, num2){
    return parseFloat(num1) + parseFloat(num2)
}

function sub(num1, num2){
    return parseFloat(num1) - parseFloat(num2)
}

function div(num1, num2){
    if(num2 == 0) return "error"

    return parseFloat(num1) / parseFloat(num2)
}

function mul(num1, num2){
    return parseFloat(num1) * parseFloat(num2)
}

function showResult(result) {
    document.getElementById("resultField").innerText += ' ' + result

    document.getElementById("inputField03").value = ''
    document.getElementById("inputField04").value = ''
}