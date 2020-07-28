import React from 'react'
import Lottie from 'react-lottie';
import myAnimation from "./animation.json"

const TopAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: myAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={"100%"}
        width={"100%"}
      />
    </div>
  )
}

export default TopAnimation
