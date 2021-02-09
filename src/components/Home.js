import Card from "./layout/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  landingTextScrope: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "20%",
  },
  titleText: {
    animation: `$fontAni 1.5s ${theme.transitions.easing.easeInOut}`,
    color: "#fff",
    position: "relative",
    zIndex: "11",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "4rem",
    },
  },
  subTitleText: {
    animation: `$fontAni 1.5s 1s ${theme.transitions.easing.easeInOut} forwards`,
    
    color: "#fff",
    position: "relative",
    zIndex: "11",
    transform : "scale(0)",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "2rem",
    },
  },
  btn: {
    animation: `$btnAni 1.5s 1s ${theme.transitions.easing.easeInOut} forwards`,
    transform : "scale(0)",
    color: "#fff",
    position: "relative",
    zIndex: "11",
    fontSize: "1.3em",
    marginTop: "15px",
    // width: "20%",
    backgroundColor: "#3b956c",
    "&:hover": {
      backgroundColor: "#3b956c",
    },
  },
  "@keyframes fontAni": {
    from: {
      transform : "scale(0)",
    },
    to: {
      transform : "scale(1)"
    },
  },
  "@keyframes btnAni": {
    from: {
      transform : "scale(0) rotate(360deg)",
    },
    to: {
      transform : "scale(1) rotate(0deg)"
    },
  },
  
}));
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className="wrapper">
        <div className={classes.landingTextScrope}>
          <Typography variant="h1" className={classes.titleText}>
            Time To Block Everything.
          </Typography>
          <Typography variant="h2" className={classes.subTitleText}>
            Checkout Our Recent Blocks.
          </Typography>
          <Link to="/farm/explorer">
            <Button size="large" className={classes.btn} variant="contained">
              EXPLORER
            </Button>
          </Link>
        </div>
      </div>
      <Card />
    </>
  );
};

export default Home;
