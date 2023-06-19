   // Выбор уровня
//    const buttons = document.querySelectorAll("button")

//    for (const btn of buttons) {
//      btn.addEventListener("click", (e) => {
//        const level = btn.dataset.level;
//        for (const btn of buttons) {
//          btn.style.background = ""
//        }
//        btn.style.background = "green"
//        localStorage.setItem("PUZZLE_LEVEL", level)
//      })
//    }

   let puzzleId = 1,
   level = "easy";
 localStorage.setItem("PUZZLE_LEVEL", level);
 
 const puzzleBtns = document.querySelectorAll(".foto-slide");
 const levelBtns = document.querySelectorAll(".level-button");
 const startBtn = document.querySelector("#start");
 
 for (const btn of puzzleBtns) {
   btn.addEventListener("click", () => {
     clearActiveClasses(puzzleBtns);
     btn.classList.add("active");
     puzzleId = btn.dataset.puzzle;
   });
 }
 
 for (const btn of levelBtns) {
   btn.addEventListener("click", () => {
     clearActiveClasses(levelBtns);
     btn.classList.add("active");
     localStorage.setItem("PUZZLE_LEVEL", btn.dataset.level);
   });
 }
 
 startBtn.addEventListener("click", () => {
  //  console.log(`pic-${puzzleId}.html`);
   window.location.href = `pic-${puzzleId}.html`;
 });
 
 function clearActiveClasses(btns) {
   for (const btn of btns) {
     btn.classList.remove("active");
   }
 }
 