import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

const Resume = () => {
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    // Fetch the initial download count when the component mounts
    axios
      .get("https://amandeepbackend.onrender.com")
      .then((response) => setDownloadCount(response.data.count))
      .catch((error) => console.error("Error fetching download count:", error));
  }, []);

  const handleDownloadClick = () => {
    // Increment the download count locally
    const updatedCount = downloadCount + 1;
    setDownloadCount(updatedCount);

    // Update the download count on the server
    axios
      .post("https://amandeepbackend.onrender.com", { count: updatedCount })
      .then((response) =>
        console.log("Download count updated on the server:", response.data)
      )
      .catch((error) => console.error("Error updating download count:", error));
  };

  return (
    <>
      <Head>{/* Head content... */}</Head>

      <div className="max-w-[940px] mx-auto p-2 text-center pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <a
          href="https://drive.google.com/file/d/1mPSja848AGhwRw4L6go6HRCybBOQlVxJ/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="text-center justify-center px-5 py-5 mt-10"
            onClick={handleDownloadClick}
          >
            Download
          </button>
        </a>
      </div>
    </>
  );
};

export default Resume;
