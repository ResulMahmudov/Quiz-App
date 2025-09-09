import { useLocation, useNavigate } from "react-router-dom";
import Topics from "../data/Topics";

const Finished = () => {
  const navigate = useNavigate();
  const location = useLocation();



  const { score, total } = location.state || { score: 0, total: 0 };
 

  const handlePlayAgain = () => navigate("/");
  



  return (
    <div className="w-[80%] mx-auto mt-20 text-center">
      <div>

       

        <div className="flex justify-between mt-[10%]">
          <h1 className="text-[#313E51] text-[64px] text-start w-[500px]">Quiz completed <br/><span className="font-bold">You Scored...</span></h1>

          <div>
           

            <div className="flex flex-col bg-white w-[812px] h-[375px] rounded-[20px] p-20">
              <span className="font-bold text-[#313E51] text-[144px] ">{score}</span>
              <span className="text-[#313E51] text-2xl "> out of {total}</span>
            </div>

            <button onClick={handlePlayAgain} className=" mt-6 flex items-center justify-center rounded-[20px] font-bold text-white w-[812px] h-[92px] p-8 text-[28px] bg-[#A729F5]">Play Again</button>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Finished;
