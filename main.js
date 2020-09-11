var d=document;
const fillKeypad=()=>{
    ['1','2','3','C','4','5','6','+','7','8','9','-','/','*','='].forEach(x=>{
        let div=d.createElement("div");
        div.id=x;
        div.innerText=x;
        div.onclick=_=>btnClicked.call(null,x);
        d.querySelector(".keypad").appendChild(div);
    })
}
let a=0,b=0,operator,result=0;
const btnClicked=(val)=>{
    result=0;
    let num=parseInt(val);
    if(isNaN(num)){
        switch (val){
            case '+':
                result= a+b;
            case '-':
                result=a-b;
            case '/':
                result=a/b;
            case '*':
                result =a*b;
        }
    }
    else{
        a=b;
        b=num;
        
    }
    
}
const add =()=>{
    console.log('adding')
    console.log(a,b);
    result=a+b;
    console.log("result",result)
    b=result;
};
const substract=()=>result=a-b;
const divide=()=>result=a/b;
const multiply=()=>result=a*b;
const equal=()=>{
    JSON.parse(operator+`(1,2)`);
}
document.addEventListener('DOMContentLoaded',()=>{
    fillKeypad();
})