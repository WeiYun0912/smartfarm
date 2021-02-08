import React, { useState, useRef } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../customHook/useForm";
import MuiAlert from "@material-ui/lab/Alert";
import Crop from "../ethereum/crop-contract";
import { signAndSendTransaction } from "../ethereum/helpers";
const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const CreateCrop = () => {
  const classes = useStyles();
  const formRef = useRef();
  // const [loading, setLoading] = useState(false);
  const [txStatus, setTxStatus] = useState({ loading: false, status: "" });
  const [values, changeHandler] = useForm({
    cropName: "",
    cropVarieties: "",
    count: "",
    seedlingsSource: "",
  });

  const submitCropData = async (e) => {
    e.preventDefault();
    console.log(formRef.current);
    formRef.current.reset();
    let privateKey =
      "75e1e3d26c4cb1af4472ec10b8c944abb37374608fdf2b9d7626249bf62e9195";
    try {
      // setLoading(l => !l);
      setTxStatus({ loading: true, status: "pending" });
      const createCrop = await Crop.methods.makeCrop(
        cropName,
        cropVarieties,
        count,
        seedlingsSource
      );
      const options = {
        to: createCrop._parent._address,
        data: createCrop.encodeABI(),
        gas: "1000000",
      };
      await signAndSendTransaction(options, privateKey);
      for (const prop of Object.getOwnPropertyNames(values)) {
        values[prop] = "";
      }
      setTxStatus({ loading: false, status: "success" });
    } catch (error) {
      console.error(error);
      setTxStatus({ loading: false, status: "error" });
      formRef.current.reset();
    }
  };

  const { cropName, cropVarieties, count, seedlingsSource } = values;
  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        ref={formRef}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          width="100%"
          flexDirection="column"
        >
          <TextField
            id="outlined-basic"
            label="作物名稱"
            variant="outlined"
            margin="normal"
            name="cropName"
            onChange={changeHandler}
            value={cropName}
          />
          <TextField
            id="outlined-basic"
            label="作物品種"
            variant="outlined"
            margin="normal"
            name="cropVarieties"
            onChange={changeHandler}
            value={cropVarieties}
          />
          <TextField
            id="outlined-basic"
            label="作物數量"
            variant="outlined"
            margin="normal"
            name="count"
            onChange={changeHandler}
            value={count}
          />
          <TextField
            id="outlined-basic"
            label="作物來源"
            variant="outlined"
            margin="normal"
            name="seedlingsSource"
            onChange={changeHandler}
            value={seedlingsSource}
          />
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={submitCropData}
            style={{ marginBottom: "10px" }}
          >
            Create Crop
          </Button>
          {txStatus.loading ? (
            <Alert
              severity="warning"
              style={{ margin: "0 auto", width: "50%" }}
            >
              資料已成功送出，請等待10至15秒。
            </Alert>
          ) : (
            ""
          )}

          {txStatus.status === "success" ? (
            <Alert
              severity="success"
              style={{ margin: "0 auto", width: "50%" }}
            >
              該資料已成功上傳。
            </Alert>
          ) : (
            ""
          )}
        </Box>
      </form>
    </>
  );
};

export default CreateCrop;
