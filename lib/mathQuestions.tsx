export type Question = {
    questionText: string;
    image?: string;
    answers: string[];
    correctAnswerIndex?: number;
  };
  
  const mathQuestions: Question[] = [
    {
      questionText: "What is the use of this symbol : + ",
      answers: [
        "Multiplication",
        "Subtraction",
        "Addition",
        "Trick Question. It does nothing",
      ],
      correctAnswerIndex: 2,
    },
    {
      questionText: "5 < 3",
      answers: [
        "True", 
        "2", 
        "False", 
        "None of the above"
    ],
      correctAnswerIndex: 0,
    },
    {
      questionText: "7 + 8",
      answers: [
        "14",
       "150", 
       "17", 
       "None of the above"
    ],
      correctAnswerIndex: 3,
    },
    {
      questionText:
        "3 - 1 =",
      answers: ["31", "4", "2", "none of the above"],
      correctAnswerIndex: 2,
    },
    
  ];
  
  export default mathQuestions;
  