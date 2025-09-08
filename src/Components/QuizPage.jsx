import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import QuizData from "../data/QuizData";
import Topics from "../data/Topics";



const QuizPage = () => {
  const { topicId } = useParams();
 const topic = Topics.find((t) => t.id === topicId);
  const questions = QuizData[topicId] || [];

  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const { question, options, correct } = questions[currentQuestion] || {};

  const handleSubmit = () => {
    if (!submitted) {
      setSubmitted(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelected(null);
      setSubmitted(false);
    }
  };

  const handlePlayAgain = () => {
    navigate("/");
  };

  if (!question) {
    return (
      <div className="w-[80%] mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Quiz finished! 🎉</h2>
        <button onClick={handlePlayAgain} className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Play Again
        </button>
      </div>
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

        <div className="flex flex-col gap-4">
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
