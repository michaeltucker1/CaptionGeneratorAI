import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/MainApp.css";

function MainApp() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [captions, setCaptions] = useState("");
  const [language, setLanguage] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setSelectedFile(event.dataTransfer.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    setUploadStatus("Uploading...");

    fetch("https://captiongeneratorai.onrender.com/api/v1/generate", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          setUploadStatus("Upload failed.");
          console.error("Error:", result.error);
        } else {
          setUploadStatus("Upload successful!");
          setCaptions(result.captions || "No captions generated.");
          setLanguage(result.language || "Language can't be detected.")
          setSelectedFile(null);
        }
      })
      .catch((error) => {
        setUploadStatus("Upload failed.");
        console.error("Error:", error);
      });
  };

  // Function to get the audio URL from the video file
  const getAudioUrl = (file) => {
    const audioBlob = new Blob([file], { type: "audio/mpeg" });
    return URL.createObjectURL(audioBlob);
  };

  return (
    <div className="main-app min-h-screen bg-gray-200 flex flex-col">
      <header className="bg-white shadow-lg p-4 mb-8">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row h-15 min-w-96 items-center justify-evenly">
                    <img src="/static/logo.svg" alt="logo"/>
                        <Link to="/" className="text-3xl font-bold text-blue-900">
                        <h1 className="text-3xl font-bold text-blue-900">CaptionGeneratorAI</h1>
                    </Link>
                </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-4 md:mx-auto mb-8">
          <div
            className="border-4 border-dashed border-gray-300 rounded-lg p-12 mb-4 flex flex-col items-center cursor-pointer"
            style={{ minHeight: "250px" }}
            onClick={() => fileInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="text-center">
              {selectedFile ? (
                <div>
                  <p className="text-gray-700">{selectedFile.name}</p>
                  {selectedFile.type.startsWith("audio") && (
                    <audio
                      controls
                      className="mt-4"
                      style={{ width: "300px", height: "50px" }}
                    >
                      <source
                        src={URL.createObjectURL(selectedFile)}
                        type={selectedFile.type}
                      />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                  {selectedFile.type.startsWith("video") && (
                    <audio
                      controls
                      className="mt-4"
                      style={{ width: "300px", height: "50px" }}
                    >
                      <source
                        src={getAudioUrl(selectedFile)}
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </div>
              ) : (
                <>
                  <p className="text-gray-500">Drag & Drop your file here</p>
                  <p className="text-gray-500">or</p>
                  <button className="mt-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Browse Files
                  </button>
                </>
              )}
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*,video/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            onClick={handleUpload}
            className="w-full bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Upload
          </button>

          {uploadStatus && (
            <p className="mt-4 text-sm text-gray-600 text-center">
              {uploadStatus}
            </p>
          )}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl overflow-auto">
          {captions ? (
            <div>
              <h2 className="text-lg font-semibold mb-2 text-left">Generated Captions - {language}</h2>
              <p className="text-gray-700 text-left">{captions}</p>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>Please upload a file to generate captions.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white p-4 text-center shadow-lg mt-8">
        <p className="text-gray-600">
          &copy; 2024 CaptionGeneratorAI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default MainApp;
