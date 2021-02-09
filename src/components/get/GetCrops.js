import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Crop from "../../ethereum/crop-contract";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginBottom : "10px"
  },
});

const GetCrops = () => {
  const classes = useStyles();
  const [crops, setCrops] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const createCropData = async () => {
      const allCrop = await Crop.methods.getAllCropsData().call();
      setCrops(allCrop);
      setLoading(l => l = false);
    };
    createCropData();
  }, []);
  return (
    <>
      {loading ? (
        "讀取資料中..."
      ) : (
        <TableContainer component={Paper} style={{marginTop : "20px"}}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">作物名稱</TableCell>
                <TableCell align="center">作物品種</TableCell>
                <TableCell align="center">作物公司</TableCell>
                <TableCell align="center">作物來源</TableCell>
                <TableCell align="center">上傳時間</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {crops.map((crop) => (
                <TableRow key={crop.buyTime}>
                  <TableCell component="th" scope="row" align="center">
                    {crop.cropName}
                  </TableCell>
                  <TableCell align="center">{crop.cropVarieties}</TableCell>
                  <TableCell align="center">{crop.seedlingsSource}</TableCell>
                  <TableCell align="center">{crop.count}</TableCell>
                  <TableCell align="center"><SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{crop.buyTime}</SimpleDateTime></TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default GetCrops;
