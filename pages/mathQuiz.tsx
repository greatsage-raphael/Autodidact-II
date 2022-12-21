import MathGame from "../components/mathGame";
import mathQuestions from "../lib/mathQuestions";

export function getStaticProps() {
  return {
    props: {
      title: "The Sphinx ",
    },
  };
}

export default function HistoryQuiz() {
  // Delete the correct answer fields before rendering!
  mathQuestions.forEach((q) => delete q.correctAnswerIndex);

  return <MathGame questions={mathQuestions} />;
}