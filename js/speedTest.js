window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var startOver = document.getElementById('startOver');
    var textToType = document.getElementById("texttotype");
    var Interval ;
    var timerStarted = false;
    var textArray = ["this is easy", "this is a little harder", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere ultricies euismod. Suspendisse potenti. Aliquam ligula massa, lobortis tempor mollis fermentum, rhoncus nec risus."];
    textToType.innerHTML = textArray[Math.floor(Math.random() * textArray.length)];

    document.getElementById("text").onkeyup = function() {
        if(!timerStarted)
        {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
            timerStarted = true;
        }
        checkString();
    }

    startOver.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds
        timerStarted = false;
        textToType.innerHTML = textArray[Math.floor(Math.random() * textArray.length)];
        document.getElementById("text").value = "";
    }

    function startTimer () {
        tens++;

        if(tens < 9){
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9){
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }

    function checkString()
    {
        if(textToType.innerHTML == document.getElementById("text").value)
            clearInterval(Interval);
    }
}