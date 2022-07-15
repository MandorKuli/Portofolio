var inputLabel = document.getElementById('inputLabel');
     
function pushBtn(obj) {
    var pushed = obj.innerHTML;
    
    if (inputLabel.innerHTML.charAt(inputLabel.innerHTML.length - 1) !== obj.innerHTML && /[+-/*]/gi.test(inputLabel.innerHTML.charAt(inputLabel.innerHTML.length - 1)) && /[+-/*]/gi.test(obj.innerHTML)) {
        inputLabel.innerHTML = inputLabel.innerHTML.slice(0, -1);
    } else if (inputLabel.innerHTML.charAt(inputLabel.innerHTML.length - 1) == obj.innerHTML && /[+-/*]/gi.test(obj.innerHTML)) {
        return false;
    }
    let separate = inputLabel.innerHTML.split(/[\+\-\/\*]/);
    console.log(separate)
    if (separate[separate.length - 1].includes(".") && obj.innerHTML == ".") {
        return false;
    }

    if (pushed == '=') {
        // Calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
         
    } else if (pushed == 'AC') {
        // All Clear
        inputLabel.innerHTML = '0';
         
    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;
        } else {
            inputLabel.innerHTML += pushed;   
        }
    }
}
