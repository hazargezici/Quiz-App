const quiz = new Quiz(questions);
const ui = new UI();
ui.btn_start.addEventListener("click", function() {
  ui.quiz_box.classList.add("active");
  startTimer(10);
  startTimerLine();
  ui.showQuestion(quiz.getQuestion());
  ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
  ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click", function() {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex += 1;
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(10);
    startTimerLine();
    ui.time_text.textContent="Remaining Time";
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
  } else {
    console.log("Quiz End");
    clearInterval(counter);
    clearInterval(counterLine);
    ui.quiz_box.classList.remove("active");
    ui.score_box.classList.add("active");
    ui.showScore(quiz.questions.length,quiz.numberOfCorrectAnswer);
    
  }
});
ui.quit_btn.addEventListener("click", function() {
  window.location.reload();
});

ui.restart_btn.addEventListener("click", function() {
  quiz.questionIndex=0;
  quiz.numberOfCorrectAnswer=0;
  ui.time_text.textContent="Remaining Time";
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
});
// document.querySelector(".previous_btn").addEventListener("click", function() {
//   if (
//     quiz.questions.length != quiz.questionIndex - 1 &&
//     quiz.questionIndex > 0
//   ) {
//     quiz.questionIndex -= 1;
//     showQuestion(quiz.getQuestion());
//   } else {
//     console.log("There aren't previous question");
//     //window.alert("There aren't previous question");
//   }
// });

function optionSelected(option) {
  clearInterval(counter);
  clearInterval(counterLine);
  let user_Answer = option.querySelector("span b").textContent;
  let question = quiz.getQuestion();
  if (question.checkAnswer(user_Answer)) {
    quiz.numberOfCorrectAnswer+=1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }
  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }
  ui.next_btn.classList.add("show");
}

let counter;
function startTimer(time){
  counter=setInterval(timer,1000);

  function timer(){
    ui.time_second.textContent=time;
    time--;
    if(time<0){
      clearInterval(counter);
      ui.time_text.textContent="Time's Up";
      
      let answer=quiz.getQuestion().correctAnswer;

      for(let option of ui.option_list.children){
        if(option.querySelector("span b").textContent==answer){
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);

        }
        option.classList.add("disabled");
      }
      ui.next_btn.classList.add("show");
    }
  }
}

let counterLine;
function startTimerLine(){
  let line_width=0;

  counterLine=setInterval(timer, 20);

  function timer(){
    line_width+=1;
    ui.time_line.style.width=line_width+"px";
    if(line_width>549){
      clearInterval(counterLine);
    }
  }
}