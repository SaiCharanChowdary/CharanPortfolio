import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Education from "../Education/Education";
import Dresume from "./Dresume";
import { FaArrowCircleUp } from "react-icons/fa";

import "./ResumeNew";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
  scrollToTop: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    cursor: "pointer",
    background: "#233",
    color: "tomato",
    padding: "0.5rem",
    borderRadius: "50%",
    zIndex: "999",
  },

  scrollToTopIcon: {
    fontSize: "2rem",
  },
}));

const ResumeNew = () => {
  const classes = useStyles();
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Resume
      </Typography>

      <Box component="div" className={classes.timeLine}>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Sai Charan. Nutheti
          </Typography>
          <Typography align="center" className={classes.body1}>
            AndhraPradesh, India
          </Typography>
          <Typography align="center" className={classes.subtitle1}>
            Visakhapatnam
            <br></br> ZIP Code Phone: (+91) 6309551808
            <br></br> Email: charanchowdary355@gmail.com
          </Typography>
        </Box>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Education
          </Typography>
          <Education />
        </Box>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Teachnical (IT) Skills
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <br></br>
            <span style={{ fontWeight: "bold", color: "rgb(255, 99, 71)" }}>
              Technologies:
            </span>{" "}
            Javascript, HTML/CSS, React.js, Node.js, Express.js, c++.<br></br>
            <br></br>
            <span style={{ fontWeight: "bold", color: "rgb(255, 99, 71)" }}>
              Database Management:
            </span>{" "}
            MongoDB , sql .<br></br>
            <br></br>
            <span style={{ fontWeight: "bold", color: "rgb(255, 99, 71)" }}>
              Research & Planning:
            </span>{" "}
            Gathering Information , Devolving Evaluation.
          </Typography>
        </Box>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Languages
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <br></br>
            English, Telugu, Hindi.
          </Typography>
        </Box>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Strengths
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <br></br>
            Communication, Team work, Self-Management.
          </Typography>
        </Box>
      </Box>
      <Dresume />
      <div className={classes.scrollToTop} onClick={scrollToTop}>
        <FaArrowCircleUp className={classes.scrollToTopIcon} />
      </div>
    </Box>
  );
};

export default ResumeNew;
