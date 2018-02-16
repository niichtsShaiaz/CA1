document.getElementById("buttons").onclick = getNumber;
var display = document.getElementById("display");
var tmp = 0;
var lastop;

function calcAdd(e) {
    var buttonValue = this.innerText;
    var num = document.getElementsByClassName("t1").innerHTML;
    console.log(num);
    // display.innerText += btn;
}

function getNumber(event)
{
    var btn = event.target.innerHTML;
    if (btn === "+") {
        tmp = display.innerText;
        lastop = "+";
        display.innerText = "";
        console.log(tmp);
    }
    if (btn === "-") {
        tmp = display.innerText;
        lastop = "-";
        display.innerText = "";
        console.log(tmp);
    }

    if (btn === "*") {
        tmp = display.innerText;
        lastop = "*";
        display.innerText = "";
        console.log(tmp);
    }
    if (btn === "/") {
        tmp = display.innerText;
        lastop = "/";
        display.innerText = "";
        console.log(tmp);
    }

    if (btn === "=") {
        switch (lastop) {
            case "+":
                res = parseFloat(tmp) + parseFloat(display.innerText);
                break;

            case "-":
                res = parseFloat(tmp) - parseFloat(display.innerText);
                break;

            case "*":
                res = parseFloat(tmp) * parseFloat(display.innerText);
                break;

            case "/":
                res = parseFloat(tmp) / parseFloat(display.innerText);
                break;
        }
        display.innerText = res;
    }
    
    if (btn === "9")
        display.innerText += btn;

    if (btn === "8")
        display.innerText += btn;

    if (btn === "7")
        display.innerText += btn;

    if (btn === "6")
        display.innerText += btn;

    if (btn === "5")
        display.innerText += btn;

    if (btn === "4")
        display.innerText += btn;

    if (btn === "3")
        display.innerText += btn;

    if (btn === "2")
        display.innerText += btn;

    if (btn === "1")
        display.innerText += btn;

    if (btn === "0")
        display.innerText += btn;
    if (btn === ".")
        display.innerText += btn;

}