import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "../components/SvgIcon";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3em",
    marginBottom: "3em",
    width: "80%",
    margin: "15px auto",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "30%",
    background: "#3b956c",
    height: "40vh",
    color: "#fff",
  },
  svg: {
    // margin : "1em",
    width: "150px",
  },
});
const Card = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <SvgIcon.Farmer className={classes.svg} />
        <Typography variant="h5" gutterBottom>
          Lorem ipsum dolor sit amet.
        </Typography>
      </div>
      <div className={classes.card}>
        <SvgIcon.Ecology className={classes.svg} />
        <Typography variant="h5" gutterBottom>
          Lorem ipsum dolor sit amet.
        </Typography>
      </div>
      <div className={classes.card}>
        <SvgIcon.Sprout className={classes.svg} />
        <Typography variant="h5" gutterBottom>
          Lorem ipsum dolor sit amet.
        </Typography>
      </div>
    </div>
  );
};

export default Card;
