import React from 'react';

function Videos() {
  return (
    <div>
      <h1>Videos</h1>
      <p>Here are some of the videos I've created.</p>
      <video controls>
        <source src="/path-to-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videos;
