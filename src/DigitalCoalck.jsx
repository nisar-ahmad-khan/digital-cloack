import React,{useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
const DigitalCloac = ()=>{
    const navigate = useNavigate();
    const [time , setTime] = useState(new Date());
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000)
        return ()=>{
            clearInterval(interval);
        }
    },[]);
    function formatDate(){
        let hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
        return `${padZero(hour)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridiem}`
    }
    function padZero(number){
        return (number < 10 ? "0":"") + number;
    }
    function aiMode(){
        navigate('/ask')
    }
   return (
  <div className="h-screen w-screen bg-cover bg-center bg-no-repeat bg-[url('/src/assets/5630939.jpg')] text-white flex flex-col justify-center items-center px-4">
    
    {/* Clock Display */}
    <div className="text-center">
      <h1 className="font-mono text-7xl sm:text-8xl md:text-9xl font-bold drop-shadow-md">
        {formatDate()}
      </h1>
    </div>

    {/* Ask Button */}
    <button
      onClick={aiMode}
      className="mt-16 text-lg sm:text-xl px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 hover:backdrop-blur-sm transition duration-300 ease-in-out"
    >
      Ask Anything
    </button>
  </div>
);


}

export default DigitalCloac;