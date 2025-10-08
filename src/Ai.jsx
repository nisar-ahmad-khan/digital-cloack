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

    return (
  <>
    {/* Go Back Button */}
    <div className="w-full flex justify-center mt-8">
      <button
        onClick={goBack}
        className="px-6 py-2 rounded-full text-white text-base sm:text-lg font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-800 transition-all duration-300 border-2 border-transparent hover:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        ⬅ Go Back to Clock
      </button>
    </div>

    {/* Input and Ask Button Container */}
    <div className="w-[90%] md:w-[60%] lg:w-[50%] mx-auto mt-10 p-6 sm:p-8 border-2 border-gray-300 rounded-3xl shadow-lg bg-gray-100 space-y-6">
      <motion.div
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <input
          type="text"
          placeholder="Ask something..."
          className="flex-1 h-12 px-4 text-base sm:text-lg border-2 border-gray-300 rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={ask}
          aria-label="Ask a question"
          className="h-12 px-6 rounded-lg text-base sm:text-lg font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200"
        >
          Ask
        </motion.button>
      </motion.div>
    </div>

    {/* Answer Display */}
    <motion.div
      key={ans}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-[90%] max-w-3xl mx-auto mt-12 p-6 sm:p-8 bg-white border border-gray-200 shadow-xl rounded-3xl"
    >
      <div className="text-lg sm:text-xl text-gray-800 leading-relaxed whitespace-pre-line overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {ans ? (
          ans
        ) : (
          <span className="text-gray-400 italic">Your answer will appear here...</span>
        )}
      </div>
    </motion.div>

    {/* Footer */}
    <footer className="text-center text-gray-500 text-base sm:text-lg mt-16 mb-8">
      &copy; Nisar Ahmad {new Date().getFullYear()}
    </footer>
  </>
);

}

export default Ai;