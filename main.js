var d = document;
const fillKeypad = () => {
  [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    "/",
    "*",
    "=",
  ].forEach((x) => {
    let div = d.createElement("div");
    div.id = x;
    div.innerText = x;
    div.onclick = (_) => btnClicked.call(null, x);
    d.querySelector(".keypad").appendChild(div);
  });
};
let a=0,b=0,result=0,operator='', isSecondArg=false;
const input=d.querySelector(".inputs"),
      output=d.querySelector(".outputs");
const clear=()=>{
  a=b=0;
  operator='';
  isSecondArg=false;
  result=0;
}
const out=(val)=>{
  return val?output.innerHTML=val:output.innerHTML;
}
const inp=(val)=>{
  return val?input.innerHTML=val:input.innerHTML;
}
const printResult=()=>{
  result=0;
  switch (operator){
    case '+':
      result= a+b;
      case '-':
        result= a-b;
        case '/':
          result= a/b;
          case '*':
            result= a*b;
  }
  console.log(a,b,operator,result)
  // out(result)
}
const btnClicked=(val)=>{
  let num=parseFloat(val);
  if(isNaN(num)){
    val=="C"?clear():(operator=val,isSecondArg=true);
  }
  else{
    input.innerHTML=input.innerHTML+val;
    console.log(input.innerHTML)
    if(isSecondArg){
      b=parseFloat(input.innerHTML);
    }
    else{
      a=parseFloat(input.innerHTML);
    }
    console.log(`a ${a}, b ${b} result ${result} isArgb ${isSecondArg}`)
    printResult();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  fillKeypad();
});
