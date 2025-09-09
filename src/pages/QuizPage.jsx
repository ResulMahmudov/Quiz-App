import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import Topics from "../data/Topics";
import Quizdata from '../data/Quizdata';



const QuizPage = () => {
  const { topicId } = useParams();
  const topic = Topics.find((t) => t.id === topicId);
  const questions = Quizdata[topicId] || [];



  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0)

  const { question, options, correct } = questions[currentQuestion] || {};

 const handleSubmit = () => {
  if (!submitted) {
    setSubmitted(true);

    if (selected === correct) {
      setScore((prev) => prev + 1);
    }
  } else {
    setCurrentQuestion((prev) => prev + 1); 
    setSelected(null);
    setSubmitted(false);
  }
};

  if (!question) {
    return (
      <Navigate
        to="/finished"
        state={{ score, total: questions.length }}
        replace
      />
    );
  }

return (
  <div className="w-[80%] mx-auto mt-20">
    {topic && (
      <div className="flex items-center gap-3 mb-8 text-4xl font-bold">
        {topic.icon}
        <span>{topic.name} Quiz</span>
      </div>
    )}

    <div className="  flex justify-between mt-[10%]">

      <div className="flex flex-col gap-4 max-w-[400px]">
        {/* Question progress */}
        <p className="text-gray-600 text-xl text-[#313E51]">
          Question {currentQuestion + 1}/{questions.length}
        </p>
        {/* Question text */}
        <h1 className="font-semibold text-4xl text-[#313E51]">{question}</h1>
      </div>

      {/* Options */}

      <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-3">
          {options.map((opt, idx) => {

            const letter = String.fromCharCode(65 + idx); // 65 = 'A' ASCII

            return (
              <button
                key={idx}
                onClick={() => !submitted && setSelected(opt)}
                className={`group flex gap-3 items-center w-[812px] h-20 rounded-[20px] text-xl p-6 transition-all ${submitted
                  ? opt === correct
                    ? "bg-green-300 ring-2 ring-green-500 cursor-default"
                    : opt === selected
                      ? "bg-red-300 ring-2 ring-red-500 cursor-default"
                      : "bg-gray-100 ring-2 ring-gray-300 cursor-default"
                  : opt === selected
                    ? "bg-white ring-4 ring-purple-500"
                    : "bg-white ring-2 ring-gray-300 hover:ring-4 hover:ring-purple-400"
                  }`}
              >
                <span
                  className={`p-4 font-bold rounded-lg transition-all cursor-pointer ${submitted
                    ? opt === correct
                      ? "bg-green-500 text-white"
                      : opt === selected
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-500"
                    : opt === selected
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200 text-gray-700 group-hover:bg-purple-300 group-hover:text-white"
                    }`}
                >
                  {letter}
                </span>
                {opt}
              </button>

            );
          })}
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6  w-[812px] h-20 rounded-[20px] text-2xl font-bold
             bg-purple-500 hover:bg-purple-300 
             text-white disabled:bg-gray-400 disabled:cursor-not-allowed
             transition-colors duration-200"
        >
          {submitted ? "Next Question" : "Submit Answer"}
        </button>
      </div>

      {/* Submit / Next button */}

    </div>
  </div>
);
};

export default QuizPage;
