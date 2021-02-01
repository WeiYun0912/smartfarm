import web3 from "./web3";
import crop from "./build/Crop.json";

const address = "0x0e0e3188F1Cc8DAcBE1b889EFEA1E393775b32ED"; // rinkeby

export default new web3.eth.Contract(JSON.parse(crop.interface), address);
