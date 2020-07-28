import React from 'react';
import './App.css';
import Lottie from 'react-lottie';
import animation from "./components/animation.json"

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
}

export default App;
