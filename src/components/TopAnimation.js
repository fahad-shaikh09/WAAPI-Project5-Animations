import React from 'react'
import Lottie from 'react-lottie';
import myAnimation from "./animation.json"
import { FaGithub, FaAngleRight } from "react-icons/fa"


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
    <div id="home" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem 2rem",
      color: "black",
      height: "calc(100vh - 100px)",
    }}>

      <div className="pattern" style={{
        width: "50%",
        textAlign: "center",
      }
      }>
        <h1>Welcome!</h1>
        <h3>We would love to serve you...</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

        <button className="primary white"
          style={{
            marginTop: "1.5rem",
            fontSize: "1.2rem",
            padding: "10px",
          }}>
          <FaGithub> </FaGithub> <a href="https://github.com/fahad-shaikh09" style={{ textDecoration: "none" }}> Github  </a>
        </button>

        <button className="primary white"
          style={{
            marginTop: "1.5rem",
            fontSize: "1.2rem",
            padding: "10px",
            marginLeft: "20px",
          }}>

          <a href="#ourservices" style={{ textDecoration: "none" }}> Our Services <FaAngleRight></FaAngleRight> </a>
        </button>
      </div>

      <Lottie
        options={defaultOptions}
        height={"100%"}
        width={"100%"}
      />
    </div>
  )
}

export default TopAnimation
