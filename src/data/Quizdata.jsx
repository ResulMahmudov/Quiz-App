// Burada sadəcə data var, heç bir component yoxdur
const Quizdata = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Marketing Language",
        "Hyper Text Markup Language",
        "Hyper Text Markup Leveler",
      ],
      correct: "Hyper Text Markup Language",
    },
    {
      question: "Which of the following is the correct structure for an HTML document?",
      options: [
        "<html><head></head><body></body></html>",
        "<head><html></html><body></body></head>",
        "<body><head></head><html></html></body>",
        "<html><body></body><head></head></html>",
      ],
      correct: "<html><head></head><body></body></html>",
    },
  ],
  css: [
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["styles", "style", "class", "font-style"],
      correct: "style",
    },
    {
      question: "How do you insert a comment in a CSS file?",
      options: [
        "// this is a comment //",
        "/* this is a comment */",
        "-- this is a comment --",
        "<!-- this is a comment -->",
      ],
      correct: "/* this is a comment */",
    },
  ],
  javascript: [
    {
      question: "How to write an IF statement in JavaScript?",
      options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
      correct: "if (i == 5)",
    },
    {
      question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      options: ["if (i <> 5)", "if i =! 5 then", "if (i != 5)", "if i not = 5"],
      correct: "if (i != 5)",
    },
  ],
  accessibility: [
    {
      question: "Which attribute improves accessibility for images?",
      options: ["alt", "title", "src", "href"],
      correct: "alt",
    },
  ],
};

export default Quizdata;
