import { useState, useContext } from "react";
import { Chat } from "./Chat.js";
import { functionsContext, messagesContext } from "../context/context.js";
import Navbar from "./Navbar.js";
import SliderBar from "./Sliderbar.js";
import axios from "axios";

const backendUrl = "https://bpathway.team57.in";

function Page() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false); // New loader state
  const [value, setValue] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [activeComponent, setActiveComponent] = useState(null);
  // const [progress,setProgress]=useState({started:false,pc:0});
  // const [msg, setMsg] = useState(null);

  const handleChangeTemp = (e) => {
    setValue(e.target.value);
  };

  const handleToggleClick = () => {
    setActiveComponent("sliderbarcomponent");
  };
  const handleToggleClick2 = () => {
    setActiveComponent("delaycomponent");
  };

  // Function to handle user input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Function to handle "Enter" key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("document", file);

    // fetch("http://localhost:3000/api/v1/users/uploadDocument", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => {
    //     console.log(response.json());
    //     response.json();
    //   })
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error("Error:", error));

    const res = await fetch(`${backendUrl}/api/v1/users/uploadDocument`, {
      method: "POST",
      body: formData,
    });
    const response = await res.json();
    alert(response.message);
  };

  const handleClick = async () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { type: "prompt", text: input }]);
      setInput("");
      setLoading(true);

      const startTime = Date.now(); // Record the start time

      try {
        const response = await fetch(`${backendUrl}/api/v1/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: input }),
        });

        const data = await response.json();
        const endTime = Date.now(); // Record the end time
        const elapsedTime = endTime - startTime; // Calculate elapsed time

        console.log(`Response received in ${elapsedTime} ms`); // Log directly
        setTimeTaken(elapsedTime); // Update state

        setMessages((prev) => [
          ...prev,
          { type: "response", text: data.message || "No response from model" },
        ]);
      } catch (error) {
        const endTime = Date.now(); // Record the end time even on error
        const elapsedTime = endTime - startTime; // Calculate elapsed time

        console.error("Error:", error);
        console.log(`Response received in ${elapsedTime} ms`);
        setTimeTaken(elapsedTime); // Update state

        setMessages((prev) => [
          ...prev,
          {
            type: "response",
            text: "Sorry, there was an error processing your request.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <functionsContext.Provider
        value={{
          handleClick,
          handleChange,
          handleChangeTemp,
          handleKeyDown,
          handleFileUpload,
          handleToggleClick,
          handleToggleClick2,
          timeTaken,
          value,
          input,
          messages,
          loading,
          activeComponent,
          setActiveComponent, // Provide loading state to Chat component
        }}
      >
        <div className="h-screen bg-gradient-to-b from-[#141e2e] to-gray-700  text-white">
          <Navbar />
          <Chat />
        </div>
      </functionsContext.Provider>
    </>
  );
}

export default Page;
