import React from 'react'
import Lottie from "react-lottie";
import ContactAnim from "./contact.json";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ScrollTop from "./ScrollTop";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const ContactUs = () => {
    //LOTTIE
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ContactAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    //Material UI

    const classes = useStyles();

    return (
        <div id="contact" style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
        }}>
            <div>
                <Lottie
                    options={defaultOptions}
                    height={"100%"}
                    width={"100%"}
                />
            </div>

            <div style={{marginRight: "100px"   }}>
                <form className={classes.root} noValidate autoComplete="off">

                    <TextField required id="standard-required" label="First Name" placeholder="First Name" /> <br></br> 

                    <TextField required id="standard-required" label="Last Name" placeholder="Last Name" /> <br></br>

                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    /> <br></br>

                    <TextField required id="standard-required" label="Email" placeholder="Email" /> <br></br>

                </form>
                <Button onClick={() => { alert('Form is submitted!') }}>Submit</Button>

            </div>
        <ScrollTop />
        </div>
    )
}

export default ContactUs
