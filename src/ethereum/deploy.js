const compiledCrop = require("./build/Crop.json");
const web3 = require("./web3");

const privateKey =
  "2a9880d710304eb7992489b262b38a7ce9641a8268c6247436fdae8e451df8d8";

(async () => {
  try {
    crop = await new web3.eth.Contract(
      JSON.parse(compiledCrop.interface)
    ).deploy({ data: `0x${compiledCrop.bytecode}` });

    let options = {
      data: crop.encodeABI(),
      gas: "2000000",
    };

    let signedTransaction = await web3.eth.accounts.signTransaction(
      options,
      privateKey
    );
    const deploy = await web3.eth.sendSignedTransaction(
      signedTransaction.rawTransaction
    );

    console.log("Address of deployed contract : ", deploy.contractAddress);
  } catch (error) {
    console.log("error : ", error.message);
  }
})();
