const isValid = (value) => {
  return value !== null && value !== undefined && value.trim()!=="";
}

const getElement = (id) => document.getElementById(id)

const submitForm = (e) => {
  e.preventDefault();
  const formElement = getElement("testForm")
  const formFields = [...formElement.elements]
  const inputFields = formFields.filter(field => field.tagName === "INPUT")
  inputFields.forEach(field => {
    if(isValid(field.value)){
       console.log(`${field.name} ✔`);
    } else{
      console.error(`Please Provide ${field.name}`)
    }
  })
}

function main(){
  
  const form = getElement("testForm")
  form.addEventListener("submit", submitForm)

}
main()