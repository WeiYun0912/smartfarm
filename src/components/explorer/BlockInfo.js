import {useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import web3 from "../../ethereum/web3";
const useStyles = makeStyles((theme) => ({
    blockCardWrapper :{
        display : "flex",
        justifyContent : "space-around",
        alignItems : "center",
        marginTop : "15px"
    },
    blockCard : {
        padding : "0 2.5rem",
        fontSize : "1.2em",
        fontWeight : "500",
        wordBreak : "break-all",
        backgroundColor : "#1f3864",
        color : "#fff",
        textAlign : "center",
        borderRadius : "5px"
    },
    blockText : {
        width : "150px",
    },

}))

const BlockInfo = ({blockNumber}) => {
    
    const [blockInfo,setBlockInfo] = useState();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const tx = async () => {
            console.log("Get Block Infomation...");
            const blockData = await web3.eth.getBlock(blockNumber);
            setBlockInfo(blockData);
            setLoading(l => l = false);
        }
        tx();
    },[blockNumber])

    const classes = useStyles();
    return(
        
        <div className={classes.blockCardWrapper}>
            {loading ? "" :             
                <>
                    <div className={classes.blockCard}>
                        <p className={classes.blockText}>Current Block:<br />{blockInfo.number}</p>
                    </div>      
                    <div className={classes.blockCard}>
                        <p className={classes.blockText}>Gas Used:<br />{blockInfo.gasUsed}</p>
                    </div>  
                    <div className={classes.blockCard}> <p className={classes.blockText}>Block Hash:<br />{blockInfo.hash.substring(0,9) + "..."}</p></div>  
                    <div className={classes.blockCard}>
                        <p className={classes.blockText}>Total Transactions:<br />{blockInfo.transactions.length}</p>
                    </div>  
                    {/* <div className={classes.blockCard}>Current Block:{blockInfo.number}</div>      
                    <div className={classes.blockCard}>Gas Used :{blockInfo.gasUsed}</div>  
                    <div className={classes.blockCard}>Block Hash:{blockInfo.hash}</div>  
                    <div className={classes.blockCard}>Total Transactions:{blockInfo.transactions.length}</div>   */}
                </>
            }

        </div>
    )
}

export default BlockInfo;