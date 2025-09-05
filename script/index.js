

const loadLessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")//promise of response
    .then(res => res.json())//promise of json Data
    .then(json => displayLessons(json.data))
}
const displayLessons = (lessons) => {
//1.get the container & empty
//2.get into every lesson
// 3.create element
//4.append into container
const lavelContainer = document.getElementById('lavel-container');
lavelContainer.innerHTML = ""
for(let lesson of lessons){
    console.log(lesson)
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = ` <button  class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
    </button>
    `
    lavelContainer.append(btnDiv)
}
 
}
loadLessons()