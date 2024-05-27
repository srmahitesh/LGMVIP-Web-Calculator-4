let exp=``;
document.querySelector('#display').value=exp;

function update(){
  document.querySelector('#display').value=exp;
}

document.querySelector('#one').addEventListener("click", ()=>{
  exp=exp+'1';
  update();
})

document.querySelector('#two').addEventListener("click", ()=>{
  exp=exp+'2';
  update();
})

document.querySelector('#three').addEventListener("click", ()=>{
  exp=exp+'3';
  update();
})

document.querySelector('#div').addEventListener("click", ()=>{
  exp=exp+'/';
  update();
})

document.querySelector('#four').addEventListener("click", ()=>{
  exp=exp+'4';
  update();
})

document.querySelector('#five').addEventListener("click", ()=>{
  exp=exp+'5';
  update();
})

document.querySelector('#six').addEventListener("click", ()=>{
  exp=exp+'6';
  update();
})

document.querySelector('#mult').addEventListener("click", ()=>{
  exp=exp+'*';
  update();
})

document.querySelector('#seven').addEventListener("click", ()=>{
  exp=exp+'7';
  update();
})

document.querySelector('#eight').addEventListener("click", ()=>{
  exp=exp+'8';
  update();
})

document.querySelector('#nine').addEventListener("click", ()=>{
  exp=exp+'9';
  update();
})

document.querySelector('#sub').addEventListener("click", ()=>{
  exp=exp+'-';
  update();
})

document.querySelector('#zero').addEventListener("click", ()=>{
  exp=exp+'0';
  update();
})

document.querySelector('#dec').addEventListener("click", ()=>{
  exp=exp+'.';
  update();
})

document.querySelector('#equal').addEventListener("click", ()=>{
  let x=eval(exp);
  exp=x;
  update();
})

document.querySelector('#add').addEventListener("click", ()=>{
  exp=exp+'+';
  update();
})

document.querySelector('#clear').addEventListener("click", ()=>{
  exp=``;
  update();
})
