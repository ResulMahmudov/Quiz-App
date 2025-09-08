import { useNavigate } from "react-router-dom";
import Topics from "../data/Topics";



const TopicSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] max-w-[1500px] mx-auto">
      {/* Header */}
      <div className="flex justify-end items-center mt-[5%] h-[32px]">
        <h1>Dark Mode</h1>
      </div>

      {/* Body */}
      <div className="flex justify-between items-start mt-[10%]">
        <div className="flex flex-col gap-10">
          <h1 className="text-[64px] font-light text-[#353b4f]">
            Welcome to the <br />
            <span className="font-bold">Frontend Quiz!</span>
          </h1>
          <p className="text-xl italic text-[#626C7F]">Pick a subject to get started.</p>
        </div>

        <div className="flex flex-col gap-5">

          <div className="flex flex-col gap-5">
            {Topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => navigate(`/quiz/${topic.id}`)}
                className="flex gap-3 items-center w-[812px] h-20 p-5 font-bold text-[28px] rounded-[20px] bg-white"
              >
                {topic.icon}
                {topic.name}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default TopicSelect;
