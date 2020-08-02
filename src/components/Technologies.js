import React from 'react'
import Lottie from "react-lottie";
import TechnologyAnimation from "./technology.json";
import ProgrammingAnimation from "./ProgrammingAnim.json";
import MobileAnim from "./mobile.json"

const SingleAnimation = ({ animationName, technologyName }) => {
    return (
        <div style={{ height: "400px" }}>
            <h2 style={{paddingLeft:"120px"}}>{technologyName}</h2>
            <Lottie
                options={{
                    animationData: animationName,
                }}
                height={"100%"}
                width={"100%"}
                style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "700px",
                }}
            />
        </div>
    )
}


const Technologies = () => {

    return (
        <div id="technology">
            <h1 style={{textAlign: "center"}}> Technology We Teach!</h1>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <div>
                    <SingleAnimation animationName={TechnologyAnimation} technologyName={"5G, AI, CNC"}/>
                </div>

                <div>
                    <SingleAnimation animationName={ProgrammingAnimation} technologyName={"Javascript"} />
                </div>

                <div>
                    <SingleAnimation animationName={MobileAnim} technologyName={"React Native"}/>
                </div>

            </div>
        </div>
    )
}

export default Technologies
