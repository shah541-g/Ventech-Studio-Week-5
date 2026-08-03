

const validateForm = (data) => {
  data.forEach(element => {
    element.value.length === 0 ? console.error(`Please fill ${element.getAttribute("name")}`) : null
  });
}

const form = document.getElementById("testForm")

form.addEventListener("submit",(e)=> {
  e.preventDefault();
  const formFields = [...form.elements]
  const formData = formFields.filter(el => el.tagName === "INPUT")
  validateForm(formData)
})