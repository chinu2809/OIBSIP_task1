let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == 'ANS') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'CE') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'DEL') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'v') {
      string = Math.sqrt(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'x2') {
      string = Math.pow(string, 2);
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})
