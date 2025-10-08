import axios from "axios";
import { useState } from "react";
import { api_base_url } from "./assets/api";
import { motion} from 'framer-motion';
import { useNavigate } from "react-router-dom";
function Ai(){
  const navigate = useNavigate();
    const [q ,setQ] = useState("");
    const [ans ,setAns] = useState([]);
    // useEffect(()=>{

    // },[])
    const payload = {
        "contents": [
      {
        "parts": [
          {
            "text": `${q}`
          }
        ]
      }
    ]
    }
   async function ask(){
    const response = await axios.post(api_base_url,payload);
     setAns(response.data.candidates[0].content.parts[0].text);
    }

    const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function goBack(){
navigate('/')
}

    return (<>
<div> <button className="border-2 rounded-full px-5 py-2 m-10 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-800 text-white hover:cursor-pointer" onClick={goBack}>go back to clock</button></div>
    
    
    <div className="w-[90%] mt-10 md:w-[60%] lg:w-[50%] m-auto p-6 border-2 rounded-2xl shadow-lg bg-gray-200 space-y-4">
  {/* Input + Button Row */}
 
   <motion.div
      className="flex flex-col sm:flex-row items-center gap-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <input
        type="text"
        placeholder="Ask something..."
        className="flex-1 h-12 text-xl px-4 border-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="h-12 px-6 border rounded-md text-lg text-white font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 mt-10 sm:mt-0"
        onClick={ask}
        aria-label="Ask a question"
      >
        ASK
      </motion.button>
    </motion.div>

</div>



<motion.div
  key={ans}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="bg-gray-100 h-[500px] w-[90%] m-auto border rounded-2xl p-6 mt-10 "
>
  <div className="text-xl text-gray-900 whitespace-pre-line">
    {ans || <span className="text-gray-800">Your answer will appear here...</span>}
  </div>
</motion.div>


<div className="text-center text-2xl">&copy;Nisar-ahmad {new Date().getFullYear()}</div>
    
    </>)
}

export default Ai;