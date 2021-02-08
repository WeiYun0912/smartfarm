import React, { useState, useEffect } from "react";
import Crop from "../ethereum/crop-contract";
import Table from "@material-ui/core/Table";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import WidgetsTwoToneIcon from "@material-ui/icons/WidgetsTwoTone";
<<<<<<< HEAD
import TxDialog from "./TxDialog";
=======
import BlockInfo from "./BlockInfo";
>>>>>>> d7c73769a71b8d5b482e1763abcfbaf79edf9c9c
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  primary: {
    backgroundColor: "#0c3866",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0c3866",
      opacity: "0.8",
    },
  },
  secondary: {
    backgroundColor: "#007cc0",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#007cc0",
      opacity: "0.8",
    },
  },
  third: {
    backgroundColor: "#49c0b6",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#49c0b6",
      opacity: "0.8",
    },
  },
});

const Explorer = () => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [blockLog, setBlockLog] = useState();
  const [txHash, setTxHash] = useState("");
  const classes = useStyles();
  useEffect(() => {
    const getEventData = async () => {
      await Crop.getPastEvents("cropLog", {
        fromBlock: 0,
        toBlock: "latest",
      }).then((blockLog) => {
<<<<<<< HEAD
        setBlockLog(blockLog);
        setLoading((l) => (l = false));
=======
        // console.log(blockLog); // same results as the optional callback above
        setBlockLog(blockLog);
        setLoading((l) => l = false);
>>>>>>> d7c73769a71b8d5b482e1763abcfbaf79edf9c9c
      });
    };

    getEventData();
  }, []);

  const handleClickOpen = (txHash) => {
    setOpen(true);
    setTxHash(txHash);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      
      {loading ? (
        "讀取資料中..."
      ) : (
        <>
        <BlockInfo blockNumber={blockLog[blockLog.length-1]["blockNumber"]}/>
        <TableContainer
          component={Paper}
          style={{ marginTop: "20px", width: "80%", margin: "20px auto" }}
        >
          <Table
            className={classes.table}
            size="small"
            aria-label="simple table"
          >
            <TableHead style={{ backgroundColor: "#071e3d" }}>
              <TableRow>
                <TableCell style={{ color: "#fff" }}>Block #</TableCell>
                <TableCell style={{ color: "#fff" }}>Block Hash</TableCell>
                <TableCell style={{ color: "#fff" }}>Tx Hash</TableCell>
                <TableCell style={{ color: "#fff" }}>
                  Contrast Address
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blockLog.map((block) => (
                <TableRow key={block.blockHash}>
                  <TableCell component="th" scope="row">
                    <Button
                      variant="contained"
                      className={classes.primary}
                      startIcon={<WidgetsTwoToneIcon />}
                    >
                      <a
                        href={
                          "https://rinkeby.etherscan.io/block/" +
                          block.blockNumber
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        {block.blockNumber}
                      </a>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" className={classes.secondary}>
                      {block.blockHash.substring(0, 9) + "..."}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      className={classes.third}
                      onClick={() => {
                        handleClickOpen(block.transactionHash);
                      }}
                    >
                      {block.transactionHash.substring(0, 9) + "..."}
                    </Button>
                  </TableCell>
                  <TableCell>{block.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TxDialog open={open} onClose={handleClose} txHash={txHash} />
        </TableContainer>
        </>
      )}
    </div>
  );
};

export default Explorer;
