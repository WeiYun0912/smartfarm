import Card from "./Card";
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
    color: "#fff",
    position: "relative",
    zIndex: "11",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "4rem",
    },
  },
  subTitleText: {
    color: "#fff",
    position: "relative",
    zIndex: "11",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "2rem",
    },
  },
  btn: {
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
