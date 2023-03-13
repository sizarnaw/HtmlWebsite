
import {plansList} from './data.js'

function getPlanFromURL (url_param_included){
    let paramString = url_param_included.split('?');
    return paramString[1];
}

let planNum = getPlanFromURL(window.location.href)[4]
let PlanName = plansList[planNum].name
document.getElementById('CyclePlan').innerText=document.getElementById('CyclePlan').innerText.concat(" " + PlanName)
