import React from "react";
import {connect} from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";

const MAlert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Alert = ({alerts}) => alerts != null && alerts.length !== 0 && alerts.map(alert => (
    <MAlert
    key={alert.id}
    severity={alert.alertType}
    style={{ margin: "0 auto", width: "50%" }}
    >
        {alert.msg}
    </MAlert>
))

//透過redux將state轉成prop給component使用
const mapStateToProps = state => ({
    alerts : state.alert
})

export default connect(mapStateToProps)(Alert)