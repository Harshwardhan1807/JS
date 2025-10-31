const genTable=()=>{
  const numberInput = document.getElementById('number-input');
  const generateBtn = document.getElementById('generate-btn');
  const resetBtn = document.getElementById('reset-btn');
  const tableResult = document.getElementById('table-result');
  generateBtn.addEventListener('click',()=>{
    const n=parseInt(numberInput.value,10);
    if(isNaN(n) || n===0){
      tableResult.innerHTML='Please enter a non-zero valid number';
      return;
    }
    let tableHTML=`<h2> Table for ${n}: </h2>`
    for(let i=1;i<=10;i++){
      tableHTML+=`<p>${n} &times ${i} =${n*i} </p>`
    }
    tableResult.innerHTML=tableHTML
  })
  resetBtn.addEventListener('click',()=>{
    numberInput.value='';
    tableResult.innerHTML='';
  })

}

genTable();
