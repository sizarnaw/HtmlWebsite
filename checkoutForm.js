
import {plansList} from './data.js'

let planNum = getPlanFromURL(window.location.href)[4]
let PlanName = plansList[planNum].name

document.getElementById('CyclePlan').innerText=document.getElementById('CyclePlan').innerText.concat(" " + PlanName)

document.getElementById('Validate').addEventListener('click',()=>{
    if(validateCardData()){
            let plan = getPlanFromURL(window.location.href)
            location.href = "./ThankYou.html?" + plan;
            
        
    }else{
        alert("Validation Failed! One or more input is invalid");

    }
  });

  function validateCardData(){
    let CCnumber= document.getElementById('CcNumber').value;
    let Name= document.getElementById('Name').value;
    let CVV= document.getElementById('CVV').value;
    let Expiration= document.getElementById('Expiration').value;

    if(CCnumber.length != 16 || !NameValidation(Name) || CVV.length != 3 || !DateExpirationValidation(Expiration)  ){
        return false;
    }
    return true;

  }
  function getPlanFromURL (url_param_included){
    let paramString = url_param_included.split('?');
    return paramString[1];
}
  function NameValidation (name){
    return /^[a-zA-Z ]*$/.test(name);

  }
  function DateExpirationValidation(ExpirationDate){
    let formateDate = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(ExpirationDate)
    if(!formateDate){
        return false;
    }
    let formateDateArray = ExpirationDate.split('/');
    let currentDate = new Date();

    if(parseInt(formateDateArray[1]) === currentDate.getFullYear() - 2000){

        if(parseInt(formateDateArray[0]) > (currentDate.getMonth+1)){
            return true
        }else{
            return false;
        }
    }else if (parseInt(formateDateArray[1]) > (currentDate.getFullYear() - 2000)) {
        return true;
    }else{
        return false;
    }

  }