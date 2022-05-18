const compiledCrop = require("./build/Crop.json");
const web3 = require("./web3");

const privateKey =
  "";

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
