
import {strongPasswordCheck,isEmail} from "./utils.js"

const getElement = (id) => document.getElementById(id)


const updateRule = (id,isValid) => {
  const element = getElement(id)
  if(!isValid){
    element.classList.add("text-danger")
    element.classList.remove("text-success")
  } else{
    element.classList.add("text-success")
    element.classList.remove("text-danger")
  }
}
const computeProgress = (...obj) => {
  let sum = 0;
  for(let value of obj){
    if(value){
      sum+=1;
    }
  }
  return (sum/obj.length)*100
}

const selectColor = (percentage) => {

  if(percentage<=25){
    return "bg-danger"
  } else if (percentage<=50){
    return "bg-warning"
  } else if(percentage<=75){
    return "bg-info"
  } else if(percentage<=100){
    return "bg-success"
  }
}

function main(){


  const passwordElement = getElement("password")
  passwordElement.addEventListener("input",()=>{
    const {minLength, upperCase, number, special} = strongPasswordCheck(passwordElement.value)
    updateRule("rule-min-length",minLength)
    updateRule("rule-upperCase",upperCase)
    updateRule("rule-number",number)
    updateRule("rule-special",special)
    const progress = computeProgress(minLength,upperCase,number,special)
    const progressElement = getElement("progress")
    progressElement.style.width = `${progress}%`
    progressElement.classList.remove(
      "bg-danger",
      "bg-success",
      "bg-info",
      "bg-warning"
    )
    progressElement.classList.add(`${selectColor(progress)}`)
    progressElement.innerText = `${progress}%`
    
  })
  const form = getElement("testSignUpForm")
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("Submitted")
    const emailElement = form.elements.email
    if(!isEmail(emailElement.value)){
      const emailErrorSpan = getElement("email-error")
      emailErrorSpan.classList.toggle('d-none')
    } 
    

  })

}

main()