// QuizPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

// Topic məlumatları (eyni data TopicSelect-dən)
const topics = [
  { id: "html", name: "HTML", icon: <span>🟧</span> },
  { id: "css", name: "CSS", icon: <span>🟦</span> },
  { id: "javascript", name: "JavaScript", icon: <span>🟨</span> },
  { id: "accessibility", name: "Accessibility", icon: <span>🟪</span> },
];

// Quiz məlumatları
import Quizdata from "../data/QuizData";

const QuizPage = () => {
  const { topicId } = useParams(); // URL-dən mövzu id-si alınır
  const topic = topics.find((t) => t.id === topicId); // mövzu məlumatını tapırıq

  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* Aktiv logo və mövzu adı */}
      {topic && (
        <div className="flex items-center gap-3 mb-8 text-4xl font-bold">
          {topic.icon}
          <span>{topic.name} Quiz</span>
        </div>
      )}

      {/* Quiz sualları */}
      
      {Quizdata[topicId]?.map((q, i) => (
        <div key={i} className="p-6 border rounded-lg shadow-lg bg-gray-50 text-lg mb-6">
          <p className="font-semibold mb-4">{q.question}</p>

          <div className="flex flex-col gap-3">
            {q.options.map((opt, idx) => (
              <button key={idx} onClick={() =>console.log(`Selected: ${opt}, Correct: ${q.correct}`)}
              className="p-3 bg-white border rounded hover:bg-blue-100 transition-colors">
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}


    </div>
  );
};

export default QuizPage;
