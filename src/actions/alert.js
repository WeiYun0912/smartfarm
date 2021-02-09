import {SET_ALERT , REMOVE_ALERT} from "./type";
import {v4 as uuid} from "uuid";

//紀錄pending 的 uuid 這樣才能透過該uuid將該warning alert刪除
let preId = "";

export const setAlert = (msg,alertType,timeout,status) => dispatch => {
    const id = uuid();

    /**
     * pending狀態，顯示warning alert，當tx成功後status會變成success。
     * success狀態，會先將warning alert清除，之後顯示success alert。
     */
    switch (status) {
        case "pending":
            preId = id;
            dispatch({
                type : SET_ALERT,
                payload : {msg,alertType,id,status}
            });
        break;
        case "success":
            dispatch({
                type : REMOVE_ALERT,
                payload : preId
            }); 
            dispatch({
                type : SET_ALERT,
                payload : {msg,alertType,id,status}
            });
            setTimeout(()=> dispatch({type : REMOVE_ALERT , payload : id}),timeout);
        break;
        default:

        break;
    }
}