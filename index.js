window.onload = function () {
    
    const appendTens = document.getElementById("tens");
    const appendSeconds = document.getElementById("seconds");
    const buttonStart = document.getElementById('button-start');
    const buttonStop = document.getElementById('button-stop');
    const buttonReset = document.getElementById('button-reset');
    let seconds = 0; 
    let tens = 0; 
    let intervalID;
  
    buttonStart.onclick = function() {
      clearInterval(intervalID);
      intervalID = setInterval(startTimer, 10);
    }
  
    buttonStop.onclick = function() {
       clearInterval(intervalID);
    }
  
    buttonReset.onclick = function() {
      clearInterval(intervalID);
      tens = 0;
      seconds = 0;
      
      appendTens.innerHTML = "00";
      appendSeconds.innerHTML = "00";
    }
  
    function startTimer () {
      tens++;
  
      if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
      } else {
        appendTens.innerHTML = tens;
      }
      
      if (tens > 99) {
        seconds++;
        
        if (seconds <= 9) {
          appendSeconds.innerHTML = "0" + seconds;
        } else {
          appendSeconds.innerHTML = seconds;
        }
        tens = 0;
        appendTens.innerHTML = "00";
      }
    }
  }
  