import React,{useState , useEffect} from "react";
const DigitalCloac = ()=>{
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
    return(
        <>
        <div  className="bg-[url('/src/assets/5630939.jpg')] bg-cover bg-no-repeat fixed bg-center h-screen w-screen overflow-scroll gradient bg-gradient-to-bl from-amber-500 to-yellow-700 text-white">
            <div className=" w-[90%] m-auto mt-[20%] text-8xl text-center">
        <span className="font-mono flex items-center justify-center text-9xl font-bold text-white shadow-lg">
  {formatDate()}
</span>
            </div>

        </div>
        </>
    )
}

export default DigitalCloac;