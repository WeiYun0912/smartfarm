import React from "react";
import {connect} from "react-redux";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../../customHook/useForm";
import Crop from "../../ethereum/crop-contract";
import { signAndSendTransaction } from "../../ethereum/helpers";
import {setAlert} from "../../actions/alert";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const CreateCrop = ({setAlert}) => {
  const classes = useStyles();
  const [values, changeHandler] = useForm({
    cropName: "",
    cropVarieties: "",
    count: "",
    seedlingsSource: "",
  });

  const submitCropData = async (e) => {
    e.preventDefault();
    let privateKey =
      "75e1e3d26c4cb1af4472ec10b8c944abb37374608fdf2b9d7626249bf62e9195";
    try {
      setAlert("資料上傳中，請等待10至15秒。","warning",0,"pending");
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
      setAlert("資料上傳成功！！","success",4000,"success");
    } catch (error) {
      console.error(error);
    }
  };

  const { cropName, cropVarieties, count, seedlingsSource } = values;
  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
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
        </Box>
      </form>
    </>
  );
};

export default connect(null,{setAlert})(CreateCrop);
