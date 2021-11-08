const dpHistory = document.querySelector(".display__history");
const dpMain = document.querySelector(".display__main");
const dpTemp = document.querySelector(".display__temp");
const NumBtn = document.querySelectorAll(".number");
const operateBtn = document.querySelectorAll(".operation");
const equlBtn = document.querySelector(".equal");
const clearAll = document.querySelector(".clearAll");
const clearPast = document.querySelector(".clearPast");

let havedot = false;

let dpHisNum = '';
let dpMainNum = '';

let lastOperation ='';
let result = null;

NumBtn.forEach( number =>{
    number.addEventListener('click', (e)=>{
        // prevant double dot in number.
        if(e.target.innerText === '.' && !havedot) {
            havedot = true;
        } else if(e.target.innerText === '.' && havedot){
            return;
        }
        //add number & repalce screen's "0"
        dpMainNum += e.target.innerText;
        dpMain.innerText = dpMainNum;
    })
})

operateBtn.forEach( operator =>{
    operator.addEventListener('click', (e)=>{
        if(dpMainNum === '') return;

        havedot = false;

        const operatorName = e.target.innerText;

        if (dpMainNum && dpHisNum && lastOperation){
            mathOperation();
        } else {
            result = parseFloat(dpMainNum);
        }
        lastOperation = operatorName;
        clearNum(operatorName);
        
    })
});

function clearNum(name = ''){
    //add history 
    dpHisNum += dpMainNum + ' '+ name + ' ';
    //print added history
    dpHistory.innerText = dpHisNum;
    //mainscreen became 0
    dpMainNum = '';
    dpTemp.innerText = result;
}

function mathOperation(){
    switch(lastOperation){
        case '*':
            result = parseFloat(result) * parseFloat(dpMainNum);
            break;
        case '/':
            result = parseFloat(result) / parseFloat(dpMainNum);
            break;
        case '%':
            result = parseFloat(result) % parseFloat(dpMainNum);
            break;
        case '+':
            result = parseFloat(result) + parseFloat(dpMainNum);
            break;
        case '-':
            result = parseFloat(result) - parseFloat(dpMainNum);
            break;
    }
}

equlBtn.addEventListener('click', ()=>{
    if (!dpMainNum|| !dpHisNum) return;
    havedot = false;
    mathOperation();
    clearNum();
    dpMain.innerText = result;
    dpMainNum = result;
    dpTemp.innerText = '0';
    dpHisNum = '';
})

clearPast.addEventListener('click', () =>{
    dpMainNum = '';
    dpMain.innerText= '0';

})

clearAll.addEventListener('click', () =>{
    dpMainNum = '';
    dpHisNum ='';
    result = '';
    dpHistory.innerText = '0';
    dpMain.innerText = '0';
    dpTemp.innerText = '0';
})