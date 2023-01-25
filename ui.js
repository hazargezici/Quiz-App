function UI(){
    this.btn_start=document.querySelector(".btn_start"),
    this.next_btn=document.querySelector(".next_btn"),
    this.restart_btn=document.querySelector(".btn_replay"),
    this.quit_btn=document.querySelector(".btn_quit"),
    this.quiz_box=document.querySelector(".quiz_box"),
    this.score_box=document.querySelector(".score_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.inCorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.time_text=document.querySelector(".time_text"),
    this.time_second=document.querySelector(".time_second"),
    this.time_line=document.querySelector(".time_line")

}
UI.prototype.showQuestion = function(question) {
  let ask = `<span>${question.questionText}</span>`;
  let option = "";
  for (let answer in question.options) {
    option += `
          <div class="option">
            <span><b>${answer}</b>: ${question.options[answer]}</span>
          </div> 
          `;
  }
  document.querySelector(".question_text").innerHTML = ask;
  this.option_list.innerHTML = option;

  const all_option = this.option_list.querySelectorAll(".option");

  for (let opt of all_option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};

UI.prototype.showQuestionNumber = function(questionOrder, totalQuestions) {
  let tag = ` <span class="badge bg-warning">${questionOrder} / ${totalQuestions}</span>`;
  document.querySelector(".quiz_box .question_index").innerHTML = tag;
};

UI.prototype.showScore=function(totalQuestions,numberOfCorrectAnswer){
  let tag=`${numberOfCorrectAnswer} out of ${totalQuestions} questions are correct`;
  document.querySelector(".score_box .score_text").innerHTML = tag;

}