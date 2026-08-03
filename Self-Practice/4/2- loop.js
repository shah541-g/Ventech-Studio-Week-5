const a = ""
const b = 5
const c = true
const d = Symbol()
const e = [a,b,c,d]

const printType =  (variable) => {
  console.log(typeof(variable))
}

e.forEach(e => printType(e))