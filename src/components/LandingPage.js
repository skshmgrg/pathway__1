// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere } from "@react-three/drei";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   // Redirect to Chat Page
//   const handleStartChat = () => {
//     navigate("/chat");
//   };

//   return (
//     <div className="h-screen w-screen flex flex-col bg-[#141e2e] text-[#e8e9eb]">
//       {/* Header Section */}
//       <header className="w-full p-4 bg-[#1a1e96] shadow-md">
//         <h1 className="text-center text-2xl md:text-3xl font-bold tracking-wide">
//           Financial Agentic RAG System
//         </h1>
//       </header>

//       {/* Main Section */}
//       <main className="flex flex-col md:flex-row items-center justify-center flex-grow px-6 md:px-12">
//         {/* Left Section */}
//         <div className="flex-1 flex flex-col items-start justify-center text-left mb-10 md:mb-0 md:pr-8">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold leading-tight mb-4"
//           >
//             Introducing <br /> Financial Agentic RAG System
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-lg md:text-xl font-light mb-6"
//           >
//             Leveraging Pathways Vectorstore for smarter financial insights.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-[#1a1e96] text-[#e8e9eb] py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
//             onClick={handleStartChat}
//           >
//             Start Chat
//           </motion.button>
//         </div>

//         {/* Right Section (3D Graphics) */}
//         <div className="flex-1 w-full h-[300px] md:h-[500px]">
//           <Canvas>
//             <ambientLight intensity={0.6} />
//             <directionalLight position={[5, 5, 5]} />
//             <Sphere args={[1, 64, 64]} scale={2}>
//               <meshStandardMaterial
//                 color="#1a1e96"
//                 metalness={0.6}
//                 roughness={0.4}
//               />
//             </Sphere>
//             <OrbitControls enableZoom={false} />
//           </Canvas>
//         </div>
//       </main>

//       {/* Footer Section */}
//       <footer className="w-full py-4 bg-[#1a1e96] text-center text-sm text-[#e8e9eb]">
//         <p>&copy; 2024 Financial Agentic RAG System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Wave } from "react-animated-text";
import Image from "../assets/image1.gif";

const LandingPage = () => {
  const navigate = useNavigate();

  // Redirect to Chat Page
  const handleStartChat = () => {
    navigate("/chat");
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#141e2e] text-[#e8e9eb] relative overflow-hidden">
      {/* Wavy Background */}
      <div className="absolute top-0 left-[-200px] w-full h-full overflow-none">
        <svg
          className="w-[4500px] h-full animate-wave"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1a1e96"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="absolute top-[-250px] right-0 w-full h-full overflow-hidden transform scale-y-[-1]">
        <svg
          className="w-[4500px] animate-wave2"
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1a1e96"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Header Section */}
      {/* <header className="w-full p-4 bg-[#1a1e96] shadow-md relative z-10 font-roboto">
        <h1 className="text-center text-2xl md:text-3xl font-bold tracking-wide">
          Financial Agentic RAG System
        </h1>
      </header> */}

      {/* Main Section */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-grow px-6 md:px-12 md:pl-16 relative z-10 font-roboto">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-start justify-center text-left mb-10 md:mb-0 md:pr-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-8xl/[120px] font-bold leading-tight mb-8 "
          >
            Introducing <br /> Financial <br />
            <span className="w-[800px] flex flex-nowrap">Agentic RAG</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl font-light mb-6 ]"
          >
            Leveraging Pathways Vectorstore for smarter financial insights.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#141e2e] text-[#e8e9eb] py-3 mt-16 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            onClick={handleStartChat}
          >
            Start Chat
          </motion.button>
        </div>

        {/* Right Section (3D Graphics) */}
        <div className="flex-1 w-full pl-[400px] h-[300px]">
          <img src={Image} alt="Stock GIF" className="max-w-full max-h-full" />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full py-4 bg-[#1a1e96] text-center text-sm text-[#e8e9eb] relative z-10">
        <p>&copy; 2024 Financial Agentic RAG System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
