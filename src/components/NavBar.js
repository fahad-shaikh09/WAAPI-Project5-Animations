import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import CloudIcon from '@material-ui/icons/Cloud';


const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    color: "white"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
    color: "white",
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function NavBar() {
  const classes = useStyles();

  return (
    <Breadcrumbs style={{backgroundColor: "rgb(96, 115, 255)",
                        height: "30px",
                        textAlign: "center",
                        color: "white", 
                        fontWeight: "bold",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "650px",
                        alignItems: "right",
    }} aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        <HomeIcon className={classes.icon} />
        HOME
      </Link>

      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        SERVICES
      </Link>

      <Link color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        COURSES
      </Link>

      <Link color="textPrimary" className={classes.link}>
        <CloudIcon className={classes.icon} />
        TECHNOLOGY
      </Link>


      <Link color="textPrimary" className={classes.link}>
        <AddIcCallIcon className={classes.icon} />
        CONTACT
      </Link>


    </Breadcrumbs>
  );
}
