function buildProfile(name, role = "Intern", ...skills){

  return `${name} - ${role} - Skills: ${skills.join(", ")}`
}

console.log(buildProfile("Ali","Intern","JS","Node","React"))