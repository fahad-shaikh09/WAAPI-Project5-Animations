import React from 'react'
import Lottie from "react-lottie";
import ServicesAnim from "./servicesAnim.json";
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useWebAnimations, { slideInRight, } from "@wellyshen/use-web-animations";

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    padding: 100,
  },
});

const WhatWeDo = () => {
  // const { ref } = useWebAnimations({ ...slideInRight})
  // FOR LOTTIE ANIMATION
  const { keyframes, timing } = slideInRight;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      // delay: 1000, // Delay 1s
      iterations: 1,
      duration: 10000, // Speed up the animation
    },
  });


  // FOR TEXT ANIMATION
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ServicesAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (

    <div style={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgb(96, 115, 255)",
      color: "white",
    }}>

      <div>
        <Lottie
          options={defaultOptions}
          height={"100%"}
          width={"100%"}
        />
      </div>

      <div ref={ref}>
        <div className={classes.root}>

          <Typography variant="h3" gutterBottom>
            Our Services
        </Typography>
          <Typography variant="h4" gutterBottom>
            We Value Our Clients!
        </Typography>

          <Typography variant="caption" display="block" gutterBottom>
            Give us a chance to serve you!
        </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo

