import React, { useRef } from 'react';
import highway from './highway1.mp4';

export default function Trail() {
  
    return (
        <div>
          <video
          id="video"
          autoPlay
          src={highway}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        </div>
    )
}
