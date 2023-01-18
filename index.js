const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");



buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
        display.placeholder = '0';
    } else if (item.id == "+/-") {
      display.placeholder = -display.placeholder;
    } else if (item.id == "backspace") {
        let string = display.placeholder.toString();
        display.placeholder = string.substr(0, string.length -1); 
    } else if (display.placeholder != "" && item.id == "equal") {
      display.placeholder = eval(display.placeholder);
    } else if (display.placeholder == "" && item.id == "equal") {
      display.placeholder = "Empty!";
      setTimeout(() => (display.placeholder = ""), 2000);
    } else {
        display.placeholder = display.placeholder[0] == 0 ? item.id : (display.placeholder += item.id);
    }
  };
});

