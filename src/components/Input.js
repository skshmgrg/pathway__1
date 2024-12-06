import { useContext, useRef } from "react";
import { functionsContext } from "../context/context";
import { GoArrowUp } from "react-icons/go";
import { RiFolderUploadLine } from "react-icons/ri";
import { FaFileArrowUp } from "react-icons/fa6";
import { MdUploadFile } from "react-icons/md";
import { LuUpload } from "react-icons/lu";
import { HiOutlineUpload } from "react-icons/hi";

export const Input = (props) => {
  //refs
  const functions = useContext(functionsContext);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can process the file or pass it to a function from context
      console.log("File selected:", file);
      functions.handleFileUpload(file); // Example: use a function from context to handle the file
    }
  };

  return (
    <>
      <div className="flex justify-center fixed bottom-5 left-0 right-0 mx-auto">
        <div className="flex bg-gray-800 rounded-full p-2 w-[85vw] items-center">
          {/* File Upload Icon */}
          <HiOutlineUpload
            size={25}
            style={{ width: "50px", padding: "2px", margin: "2px", cursor: "pointer", color:"white" }}
            onClick={() => fileInputRef.current.click()} // Trigger file input click
          />
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          {/* Text Input */}
          <input
            type="text"
            placeholder="Type your message here"
            value={functions.input}
            onChange={functions.handleChange}
            className="flex-1 !bg-transparent border-none outline-none text-white text-base placeholder-gray-400"
            onKeyDown={functions.handleKeyDown}
          />
          {/* Conditionally render the loader if loading is true */}
          {functions.loading ? (
            <div className="flex items-center justify-center animate-spin h-8 w-8 border-t-4 border-blue-500 rounded-full ml-2"></div>
          ) : (
            <button
              onClick={functions.handleClick}
              className="bg-transparent text-white font-semibold hover:text-neutral-400 py-2 px-4"
            >
              <GoArrowUp />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

// import { useContext, useRef, useState } from "react";
// import { functionsContext } from "../context/context";
// import { GoArrowUp } from "react-icons/go";
// import { HiOutlineUpload } from "react-icons/hi";

// export const Input = (props) => {
//   // Context and refs
//   const functions = useContext(functionsContext);
//   const fileInputRef = useRef(null);

//   // State to handle drag-and-drop styles
//   const [isDragging, setIsDragging] = useState(false);

//   const handleFileUpload = (file) => {
//     if (file) {
//       console.log("File selected:", file);
//       functions.handleFileUpload(file); // Example: pass the file to the context function
//     }
//   };

//   const handleFileInput = (event) => {
//     const file = event.target.files[0];
//     if (file) handleFileUpload(file);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setIsDragging(false);
//     const file = event.dataTransfer.files[0];
//     if (file) handleFileUpload(file);
//   };

//   return (
//     <>
//       <div className="flex justify-center fixed bottom-5 left-0 right-0 mx-auto">
//         <div
//           className={`flex bg-gray-800 rounded-full p-2 w-[85vw] items-center ${
//             isDragging ? "border-2 border-dashed border-blue-500" : ""
//           }`}
//           onDragOver={handleDragOver}
//           onDragLeave={handleDragLeave}
//           onDrop={handleDrop}
//         >
//           {/* File Upload Icon */}
//           <HiOutlineUpload
//             size={25}
//             style={{
//               width: "50px",
//               padding: "2px",
//               margin: "2px",
//               cursor: "pointer",
//               color: "white",
//             }}
//             onClick={() => fileInputRef.current.click()} // Trigger file input click
//           />
//           {/* Hidden File Input */}
//           <input
//             type="file"
//             ref={fileInputRef}
//             style={{ display: "none" }}
//             onChange={handleFileInput}
//           />
//           {/* Text Input */}
//           <input
//             type="text"
//             placeholder="Type your message here/ Drag file"
//             value={functions.input}
//             onChange={functions.handleChange}
//             className="flex-1 !bg-transparent border-none outline-none text-white text-base placeholder-gray-400"
//             onKeyDown={functions.handleKeyDown}
//           />
//           {/* Conditionally render the loader if loading is true */}
//           {functions.loading ? (
//             <div className="flex items-center justify-center animate-spin h-8 w-8 border-t-4 border-blue-500 rounded-full ml-2"></div>
//           ) : (
//             <button
//               onClick={functions.handleClick}
//               className="bg-transparent text-white font-semibold hover:text-neutral-400 py-2 px-4"
//             >
//               <GoArrowUp />
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// // import { useRef, useState } from "react";
// // import path from "path";
// // import { GoArrowUp } from "react-icons/go";
// // import { HiOutlineUpload } from "react-icons/hi";

// // export const Input = (props) => {
// //   const fileInputRef = useRef(null);

// //   // State to manage drag-and-drop styles and feedback
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [isUploading, setIsUploading] = useState(false);

// //   // Constants: Replace with your Google Drive folder ID and API Key
// //   const FOLDER_ID = "1zfUTWSVrBPfjFMGw_KcsCndyEtWlt_QT"; 
// //   const API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your API Key

// //   const KEYFILEPATH = path.join(__dirname, "../GOOGLE_KEY.json");

// //   // Handle file upload to Google Drive
// //   const uploadFileToDrive = async (file) => {
// //     setIsUploading(true);
// //     try {
// //       const metadata = {
// //         name: file.name,
// //         parents: [FOLDER_ID],
// //       };

// //       const formData = new FormData();
// //       formData.append(
// //         "metadata",
// //         new Blob([JSON.stringify(metadata)], { type: "application/json" })
// //       );
// //       formData.append("file", file);

// //       const response = await fetch(
// //         `https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&key=${API_KEY}`,
// //         {
// //           method: "POST",
// //           body: formData,
// //         }
// //       );

// //       if (response.ok) {
// //         const data = await response.json();
// //         alert(`File uploaded successfully: ${data.name}`);
// //       } else {
// //         const errorData = await response.json();
// //         alert(`Error uploading file: ${errorData.error.message}`);
// //       }
// //     } catch (error) {
// //       alert(`Error uploading file: ${error.message}`);
// //     } finally {
// //       setIsUploading(false);
// //     }
// //   };

// //   const handleFileInput = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       uploadFileToDrive(file);
// //     }
// //   };

// //   const handleDragOver = (event) => {
// //     event.preventDefault();
// //     setIsDragging(true);
// //   };

// //   const handleDragLeave = () => {
// //     setIsDragging(false);
// //   };

// //   const handleDrop = (event) => {
// //     event.preventDefault();
// //     setIsDragging(false);
// //     const file = event.dataTransfer.files[0];
// //     if (file) {
// //       uploadFileToDrive(file);
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center fixed bottom-5 left-0 right-0 mx-auto">
// //       <div
// //         className={`flex bg-gray-800 rounded-full p-2 w-[85vw] items-center ${
// //           isDragging ? "border-2 border-dashed border-blue-500" : ""
// //         }`}
// //         onDragOver={handleDragOver}
// //         onDragLeave={handleDragLeave}
// //         onDrop={handleDrop}
// //       >
// //         {/* File Upload Icon */}
// //         <HiOutlineUpload
// //           size={25}
// //           style={{
// //             width: "50px",
// //             padding: "2px",
// //             margin: "2px",
// //             cursor: "pointer",
// //             color: "white",
// //           }}
// //           onClick={() => fileInputRef.current.click()} // Trigger file input click
// //         />
// //         {/* Hidden File Input */}
// //         <input
// //           type="file"
// //           ref={fileInputRef}
// //           style={{ display: "none" }}
// //           onChange={handleFileInput}
// //         />
// //         {/* Text Input */}
// //         <input
// //           type="text"
// //           placeholder="Type your message here/ Drag file"
// //           className="flex-1 !bg-transparent border-none outline-none text-white text-base placeholder-gray-400"
// //         />
// //         {/* Loading Spinner */}
// //         {isUploading ? (
// //           <div className="flex items-center justify-center animate-spin h-8 w-8 border-t-4 border-blue-500 rounded-full ml-2"></div>
// //         ) : (
// //           <button className="bg-transparent text-white font-semibold hover:text-neutral-400 py-2 px-4">
// //             <GoArrowUp />
// //           </button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };
