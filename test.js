const synonames =['hello','hi,chippichippi']
const createElements =(arr)=>{
   const htmlElements = arr.map(el => `<span>${el}</span>`)
   console.log(htmlElements.join(" "))
}

createElements(synonames)