const loadLessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")//promise of response
    .then(res => res.json())//promise of json Data
    .then(json => displayLessons(json.data))
};

const removeActive = ()=>{
    const lessonbtns = document.querySelectorAll(".lesson-btn")
    console.log(lessonbtns);
    lessonbtns.forEach(btn=> btn.classList.remove("active"))
}

const loadLavelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
       fetch(url)
        .then(res => res.json())
        .then((data) => {
           removeActive();//remove all active class
            const clickbtn = document.getElementById(`lesson-btn-${id}`)
          clickbtn.classList.add('active')//add active on clicked button
            displayLavelWord(data.data)
        })
} 

    const displayLavelWord = (words) => {
      const wordcontainer = document.getElementById("word-container")
      wordcontainer.innerHTML = "";

      if(words.length == 0){
        wordcontainer.innerHTML = `
         <div class="text-center rounded py-10  col-span-full space-y-3">
        <img class="mx-auto" src="./assets/alert-error.png"></img>
         <p class="text-sm text-[#79716B] font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="text-3xl font-medium font-bangla">নেক্সট Lesson এ যান</h2>
      </div>`;
        return;
      }
// {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }
      words.forEach(word => {
        console.log(word)
        const card = document.createElement("div");
        card.innerHTML = `
         <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
        <h2 class="text-2xl font-bold">${word.word ? word.word :"শব্দ পাওয়া যায় নি..."}</h2>
        <p class="font-semibold">Meaning /Pronounciation</p>
 
        <div class="font-bangla text-2xl font-medium">${word.meaning ? word.meaning:"meaning খুজে পাওয়া যায় নি..."} / ${word.pronunciation ? word.pronunciation: "pronounciation খুজে পাওয়া যায় নি"}</div>
        <div class="flex justify-between items-center">
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>

       </div>
        `
        wordcontainer.append(card)
      });
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
    btnDiv.innerHTML = ` <button id="lesson-btn-${lesson.level_no}" onclick="loadLavelWord(${lesson.level_no})"  class="btn btn-outline btn-primary lesson-btn">
    <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
    </button>
    `
    lavelContainer.append(btnDiv)
}
 
}
loadLessons()