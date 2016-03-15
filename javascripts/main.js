
window.onload = function () {
  var buttons = document.getElementsByClassName('button');
  var result = document.getElementById('result');



  for (var i = 0; i < buttons.length; i += 1) {
    if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } else if (buttons[i].innerHTML === "C"){
      buttons[i].addEventListener("click", cleare(i));
    } else {
      buttons[i].addEventListener("click", addValue(i));
    }
  };
  function addValue(i) {
    return function () {
      result.innerHTML  += buttons[i].innerHTML;
    }
  };
  function calculate(i) {
    return function () {
      result.innerHTML = eval(result.innerHTML);
    };
  }
  function cleare(i) {
    return function () {
      result.innerHTML = "";
    }
  }
};

// result.value = ''
