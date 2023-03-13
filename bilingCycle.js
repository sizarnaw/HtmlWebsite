
import {plansList} from './data.js'

function getPlanFromURL (url_param_included){
    let paramString = url_param_included.split('?');
    return paramString[1];
}

let planNum = getPlanFromURL(window.location.href)[4]
let PlanName = plansList[planNum].name

document.getElementById('CyclePlan').innerText=document.getElementById('CyclePlan').innerText.concat(" " + PlanName)
let PlanYearlyPayment= plansList[planNum].yearlySubPrice
let PlanMonthlyPayment= plansList[planNum].monthlySubPrice
document.getElementById('YearlyPayment').innerText=document.getElementById('YearlyPayment').innerText.concat(" \n " + PlanYearlyPayment + "$" + "/Month")
document.getElementById('MonthlyPayment').innerText=document.getElementById('MonthlyPayment').innerText.concat(" \n " + PlanMonthlyPayment + "$")


document.getElementById('MonthlyPayment').addEventListener('click',()=>{
    let plan = getPlanFromURL(window.location.href)
    location.href = "./checkoutForm.html?" + plan + "?Monthly"
  });

  document.getElementById('YearlyPayment').addEventListener('click',()=>{
    let plan = getPlanFromURL(window.location.href)
    location.href = "./checkoutForm.html?" + plan + "?Yearly"
  });