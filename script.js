
const button1 = document.querySelector("#submit");
const button2 = document.querySelector("#reset");
let result = document.querySelector("#result");
let frm1 = document.getElementById("frm1").value;
let str;


function reset() {
  document.getElementById("frm1").value = "";
}



function buttonClick() {
  str='';
  console.log("%s\n", frm1);
  for (let i = frm1.length - 1; i >= 0; i--) {
    str += frm1[i];
  }
  console.log("%s", str);
  if (frm1 == str) {
    result.textContent = "The string is a palindrome.";
  } else {
    result.textContent = "The string is not a palindrome";
  }
}

button1.addEventListener("click", buttonClick);

button2.addEventListener("click", reset);
