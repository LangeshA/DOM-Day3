//title
let h1=document.createElement('h1');
h1.setAttribute('id','title')
h1.classList.add('d-flex','flex-column','justify-conent-center','align-items-center','mt-2')
h1.innerHTML='Calculator'
document.body.append(h1)
//description
let p=document.createElement('p');
p.setAttribute('id','description')
p.classList.add('d-flex','flex-column','justify-conent-center','align-items-center','mt-2')
p.innerHTML='Web developer task on arithmetic operations using DOM'
document.body.append(p)
//Div-maincontainer
let maincontainer=document.createElement('div');
maincontainer.classList.add('container', 'mt-2', 'mb-5', 'p-4', 'maincontainer')
document.body.append(maincontainer)


//Div-1st row
let firstrow=document.createElement('div');
firstrow.classList.add('row')
maincontainer.append(firstrow)
//div-1st row 1st column
let firstrowfirstcolumn=document.createElement('div');
firstrowfirstcolumn.classList.add('col-12', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
firstrow.append(firstrowfirstcolumn)
//input
let inputtag=document.createElement('input');
inputtag.setAttribute('type','text')
inputtag.setAttribute('id','result')
inputtag.setAttribute('readonly','')
firstrowfirstcolumn.append(inputtag)


//Div-2ed row
let secondrow=document.createElement('div');
secondrow.classList.add('row')
maincontainer.append(secondrow)
//div-2ed row 1st column
let secondrowfirstcolumn=document.createElement('div');
secondrowfirstcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
secondrow.append(secondrowfirstcolumn)
//button c
let buttonc=document.createElement('button');
buttonc.setAttribute('id','clear')
buttonc.innerHTML='c'
secondrowfirstcolumn.append(buttonc)
//div-2ed row 2ed column
let secondrowsecondcolumn=document.createElement('div');
secondrowsecondcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
secondrow.append(secondrowsecondcolumn)
//button &larr;
let buttonlarr=document.createElement('button');
buttonlarr.setAttribute('id','clearonenumber')
buttonlarr.innerHTML='&larr;'
secondrowsecondcolumn.append(buttonlarr)
//div-2ed row 3rd column
let secondrowthirdcolumn=document.createElement('div');
secondrowthirdcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
secondrow.append(secondrowthirdcolumn)
//button dot
let buttondot=document.createElement('button');
buttondot.setAttribute('id','dot')
buttondot.innerHTML='.'
secondrowthirdcolumn.append(buttondot)
//div-2ed row 4th column
let secondrowfourthcolumn=document.createElement('div');
secondrowfourthcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
secondrow.append(secondrowfourthcolumn)
//button &larr;
let buttonmul=document.createElement('button');
buttonmul.setAttribute('id','mul')
buttonmul.innerHTML='x'
secondrowfourthcolumn.append(buttonmul)


//Div-3rd row
let thirdrow=document.createElement('div');
thirdrow.classList.add('row')
maincontainer.append(thirdrow)
//Div-3rd row1st column
let thirdrowfirstcolumn=document.createElement('div');
thirdrowfirstcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
thirdrow.append(thirdrowfirstcolumn)
//button 7
let button7=document.createElement('button');
button7.setAttribute('id','7')
button7.innerHTML='7'
thirdrowfirstcolumn.append(button7)
//Div-3rd row 2ed column
let thirdrowsecondcolumn=document.createElement('div');
thirdrowsecondcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
thirdrow.append(thirdrowsecondcolumn)
//button 8;
let button8=document.createElement('button');
button8.setAttribute('id','8')
button8.innerHTML='8'
thirdrowsecondcolumn.append(button8)
//Div-3rd row 3rd column
let thirdrowthirdcolumn=document.createElement('div');
thirdrowthirdcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
thirdrow.append(thirdrowthirdcolumn)
//button 9;
let button9=document.createElement('button');
button9.setAttribute('id','9')
button9.innerHTML='9'
thirdrowthirdcolumn.append(button9)
//Div-3rd rowrow 4th column
let thirdrowfourthcolumn=document.createElement('div');
thirdrowfourthcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
thirdrow.append(thirdrowfourthcolumn)
//button &larr;
let buttondivide=document.createElement('button');
buttondivide.setAttribute('id','divide')
buttondivide.innerHTML='/'
thirdrowfourthcolumn.append(buttondivide)


//Div-4th row
let fourthrow=document.createElement('div');
fourthrow.classList.add('row')
maincontainer.append(fourthrow)
//Div-4th row 1st column
let fourthrowfirstcolumn=document.createElement('div');
fourthrowfirstcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fourthrow.append(fourthrowfirstcolumn)
//button 4
let button4=document.createElement('button');
button4.setAttribute('id','4')
button4.innerHTML='4'
fourthrowfirstcolumn.append(button4)
//Div-4th row 2ed column
let fourthrowsecondcolumn=document.createElement('div');
fourthrowsecondcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fourthrow.append(fourthrowsecondcolumn)
//button 5;
let button5=document.createElement('button');
button5.setAttribute('id','5')
button5.innerHTML='5'
fourthrowsecondcolumn.append(button5)
//Div-4th row  3rd column
let fourthrowthirdcolumn=document.createElement('div');
fourthrowthirdcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fourthrow.append(fourthrowthirdcolumn)
//button 6;
let button6=document.createElement('button');
button6.setAttribute('id','6')
button6.innerHTML='6'
fourthrowthirdcolumn.append(button6)
//Div-4th row 4th column
let fourthrowfourthcolumn=document.createElement('div');
fourthrowfourthcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fourthrow.append(fourthrowfourthcolumn)
//button &larr;
let buttonsubtract=document.createElement('button');
buttonsubtract.setAttribute('id','subtract')
buttonsubtract.innerHTML='-'
fourthrowfourthcolumn.append(buttonsubtract)


//Div-5th row
let fifthrow=document.createElement('div');
fifthrow.classList.add('row')
maincontainer.append(fifthrow)
//Div-5th row 1st column
let fifthrowfirstcolumn=document.createElement('div');
fifthrowfirstcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fifthrow.append(fifthrowfirstcolumn)
//button 1
let button1=document.createElement('button');
button1.setAttribute('id','1')
button1.innerHTML='1'
fifthrowfirstcolumn.append(button1)
//Div-5th row 2ed column
let fifthrowsecondcolumn=document.createElement('div');
fifthrowsecondcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fifthrow.append(fifthrowsecondcolumn)
//button 2;
let button2=document.createElement('button');
button2.setAttribute('id','2')
button2.innerHTML='2'
 fifthrowsecondcolumn.append(button2)
//Div-5th row  3rd column
let fifthrowthirdcolumn=document.createElement('div');
fifthrowthirdcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fifthrow.append(fifthrowthirdcolumn)
//button 3;
let button3=document.createElement('button');
button3.setAttribute('id','3')
button3.innerHTML='3'
fifthrowthirdcolumn.append(button3)
//Div-5th row 4th column
let fifthrowfourthcolumn=document.createElement('div');
fifthrowfourthcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fifthrow.append(fifthrowfourthcolumn)
//button +;
let buttonadd=document.createElement('button');
buttonadd.setAttribute('id','add')
buttonadd.innerHTML='+'
fifthrowfourthcolumn.append(buttonadd)



//Div-6th row
let sixthrow=document.createElement('div');
sixthrow.classList.add('row')
maincontainer.append(sixthrow)
//Div-6th row 1st column
let sixthrowfirstcolumn=document.createElement('div');
sixthrowfirstcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
sixthrow.append(sixthrowfirstcolumn)
//button 0
let button0=document.createElement('button');
button0.setAttribute('id','0')
button0.innerHTML='0'
sixthrowfirstcolumn.append(button0)
//Div-6th row 2ed column
let sixthrowsecondcolumn=document.createElement('div');
sixthrowsecondcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
sixthrow.append(sixthrowsecondcolumn)
//button 00;
let button00=document.createElement('button');
button00.setAttribute('id','00')
button00.innerHTML='00'
sixthrowsecondcolumn.append(button00)
//Div-6th row  3rd column
let sixthrowthirdcolumn=document.createElement('div');
sixthrowthirdcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
sixthrow.append(sixthrowthirdcolumn)
//button mod;
let buttonmod=document.createElement('button');
buttonmod.setAttribute('id','mod')
buttonmod.innerHTML='%'
sixthrowthirdcolumn.append(buttonmod)
//Div-6th row 4th column
let sixthrowfourthcolumn=document.createElement('div');
sixthrowfourthcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
sixthrow.append(sixthrowfourthcolumn)
//button equal;
let buttonequal=document.createElement('button');
buttonequal.setAttribute('id','equal')
buttonequal.innerHTML='='
sixthrowfourthcolumn.append(buttonequal)

//get all by Id

let userinput=document.getElementById('result');

let one=document.getElementById('1');
let two=document.getElementById('2');
let three=document.getElementById('3');
let four=document.getElementById('4');
let five=document.getElementById('5');
let six=document.getElementById('6');
let seven=document.getElementById('7');
let eight=document.getElementById('8');
let nine=document.getElementById('9');
let zero=document.getElementById('0');
let doublezero=document.getElementById('00');

let clear=document.getElementById('clear');
let clearonenumber=document.getElementById('clearonenumber');
let dot=document.getElementById('dot');
let mul=document.getElementById('mul');
let divide=document.getElementById('divide');
let subtract=document.getElementById('subtract');
let add=document.getElementById('add');
let mod=document.getElementById('mod');
let equal=document.getElementById('equal');

//onclick
zero.onclick=()=>{
    displayInput(0)
}
one.onclick=()=>{
    displayInput(1)
}
two.onclick=()=>{
    displayInput(2)
}
three.onclick=()=>{
    displayInput(3)
}
four.onclick=()=>{
    displayInput(4)
}
five.onclick=()=>{
    displayInput(5)
}
six.onclick=()=>{
    displayInput(6)
}
seven.onclick=()=>{
    displayInput(7)
}
eight.onclick=()=>{
    displayInput(8)
}
nine.onclick=()=>{
    displayInput(9)
}
doublezero.onclick=()=>{
    displayInput('00')
}
dot.onclick=()=>{
    displayInput('.')
}
add.onclick=()=>{
    displayInput('+')
}
subtract.onclick=()=>{
    displayInput('-')
}
mul.onclick=()=>{
    displayInput('*')
}
divide.onclick=()=>{
    displayInput('/')
}
mod.onclick=()=>{
    displayInput('%')
}
equal.onclick=()=>{
    calculate()
}
clear.onclick=()=>{
        removeallresult()
}
clearonenumber.onclick=()=>{
    removeoneitem()
}

// onkeydown

document.onkeydown=(event)=>{
    
    if(event.key=='0' ){
       
        displayInput(0)
    }else if(event.key=='1'){
        displayInput(1)
    }else if(event.key=='2'){
        displayInput(2)
    }
    else if(event.key=='3'){
        displayInput(3)
    }
    else if(event.key=='4'){
        displayInput(4)
    }
    else if(event.key=='5'){
        displayInput(5)
    }
    else if(event.key=='6'){
        displayInput(6)
    }
    else if(event.key=='7'){
        displayInput(7)
    }
    else if(event.key=='8'){
        displayInput(8)
    }
    else if(event.key=='9'){
        displayInput(9)
    }
    else if(event.key=='+'){
        displayInput('+')
    }
    else if(event.key=='-'){
        displayInput('-')
    }
    else if(event.key=='/'){
        displayInput('/')
    }
    else if(event.key=='*'){
        displayInput('*')
    }else if(event.key=='.'){
        displayInput('.')
    }else if(event.key=='%'){
        displayInput('%')
    }
    else if(event.key=='Enter'){
        calculate()
    }
    else if(event.key=='Delete' ){
        removeallresult()
    }
    else if(event.key=='Backspace' ){
        removeoneitem()
    }
    else if(event.key=='Shift'){

    }
    else{
     
     alert('Only numbers are allowed, Kindly remove what you pressed or you will get error')
       
    }
}



let displayInput=(text)=>{
if(userinput.value==''){
    userinput.value=text
}else if(userinput.value.length<=30){
    userinput.value= userinput.value+text
}else{
    alert('Limit has been reached')
}
}

let calculate = () => {
    try {
        let final = userinput.value;
        userinput.value = eval(final);
    } catch (error) {
        userinput.value = 'Error';
    }
}

let removeallresult=()=>{
    userinput.value=''
}

let removeoneitem=()=>{
    userinput.value = userinput.value.slice(0, -1);
}
