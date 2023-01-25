function Questions(questionText, options, correctAnswer) {
  this.questionText = questionText;
  this.options = options;
  this.correctAnswer = correctAnswer;
}
Questions.prototype.checkAnswer = function(answer) {
  return answer == this.correctAnswer;
};
let questions = [
  new Questions(
    "1-Which is a javascript package management application?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Questions(
    "2-Which built-in method returns the calling string value converted to lower case?",
    { a: "toLowerCase()", b: "toLower()", c: "changeCase(case)" },
    "a"
  ),
  new Questions(
    "3-Which of the following is a valid type of function javascript supports?",
    { a: "named function", b: "anonymous function", c: "Both of the above",d:"None of the above" },
    "c"
  ),
  new Questions(
    "4-Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
    { a: "sup()", b: "small()", c: "strike()",d:"sub()" },
    "d"
  ),
];
