import { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import web3 from "../ethereum/web3";

const TxDialog = (props) => {
  const { onClose, open, txHash } = props;
  const [txData, setTxData] = useState("");
  const handleListItemClick = (value) => {
    onClose(value);
  };

  useEffect(() => {
    const getTxData = async () => {
      const d = txHash !== "" ? await web3.eth.getTransaction(txHash) : "";
      setTxData(d);
      console.log(d);
    };
    getTxData();
  }, [txHash]);

  return (
    <>
      {txData === "" ? (
        ""
      ) : (
        <Dialog aria-labelledby="simple-dialog-title" open={open}>
          <DialogTitle id="simple-dialog-title">Transction Info</DialogTitle>
          <List>
            <ListItem>Block Hash : {txData.blockHash}</ListItem>
            <ListItem>Block Number : {txData.blockNumber}</ListItem>
            <ListItem>Nonce : {txData.nonce}</ListItem>
          </List>
          <Button variant="contained" onClick={handleListItemClick}>
            Close
          </Button>
        </Dialog>
      )}
    </>
  );
};

export default TxDialog;
