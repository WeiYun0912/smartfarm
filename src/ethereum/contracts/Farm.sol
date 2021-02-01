pragma solidity ^0.4.26;
pragma experimental ABIEncoderV2;

contract Crop {
    //初始化變數
    address manager;

    /*
        定義結構
        cropName : 作物名稱
        cropVarieties : 作物品種
        count : 作物數量
        seedlingsSource : 作物來源
        buyTime(timestamp) : 購入日期
    */
    struct CropData {
        string cropName;
        string cropVarieties;
        string count;
        string seedlingsSource;
        uint256 buyTime;
    }
    //初始化結構
    CropData[] public cropDatas;

    //定義Event Log
    event cropLog(
        string cropName,
        string cropVarieties,
        string count,
        string seedlingsSoruce,
        address sender
    );

    //建構子
    constructor() public {
        manager = 0x8b6bB5e2E5DD42A3421C23A53966a80858aa7b54;
    }

    //modifier
    modifier isManager() {
        require(msg.sender == manager);
        _;
    }

    //創建一筆crop資料
    function makeCrop(
        string memory _cropName,
        string memory _cropVarieties,
        string memory _count,
        string memory _seedlingsSoruce
    ) public isManager {
        CropData memory newCropData =
            CropData({
                cropName: _cropName,
                cropVarieties: _cropVarieties,
                count: _count,
                seedlingsSource: _seedlingsSoruce,
                buyTime: now
            });
        cropDatas.push(newCropData);
        emit cropLog(
            _cropName,
            _cropVarieties,
            _count,
            _seedlingsSoruce,
            msg.sender
        );
    }

    function getAllCropsData() public view returns (CropData[] memory) {
        return cropDatas;
    }

    function getCropsCount() public view returns (uint256) {
        return cropDatas.length;
    }
}
