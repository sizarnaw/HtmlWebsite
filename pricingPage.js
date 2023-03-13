
import { plansList } from './data.js'

  document.getElementById('plan1').addEventListener('click',()=>{
    location.href = './bilingCycle.html?plan0'
  });

  document.getElementById('plan2').addEventListener('click',()=>{
    location.href = './bilingCycle.html?plan1'
  });

  document.getElementById('plan3').addEventListener('click',()=>{
    location.href = './bilingCycle.html?plan2'
  });


for (let index = 0; index < plansList.length; index++) {
    let obj = plansList[index];
    for (const objKey in obj) {
        if (objKey == "monthlySubPrice" || objKey == "yearlySubPrice") {
            continue;
        }
        if(objKey == "name"){
            document.getElementById(objKey + index).innerText = plansList[index][objKey] + "\n"+ obj["yearlySubPrice"]+"$"+"(Yearly)";
            continue;
        }
        document.getElementById(objKey + index).innerText = plansList[index][objKey];
    }
}



