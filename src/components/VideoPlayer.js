import React from "react";
import WishVideo from "../assets/videos/Wish.mp4"

const VideoPlayer = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }} className="m-5">
      <h1>Play the Video</h1>
      <video
        width="100%"
        controls
        style={{ border: "2px solid #A59D9D", borderRadius: "8px" }}
      >
        <source src={WishVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
