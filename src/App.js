import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";

import CreateCrop from "./components/CreateCrop";
import GetCrops from "./components/GetCrops";
import Container from "@material-ui/core/Container";
import Card from "./components/Card";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <HeaderBar />
      <Route exact path="/" component={Home} />
      <Container>
        {/* <h1>Contract URL : </h1>
          <a target="_blank" rel="noreferrer" href="https://rinkeby.etherscan.io/address/0x0e0e3188F1Cc8DAcBE1b889EFEA1E393775b32ED" style={{color : "#000"}}>0x0e0e3188F1Cc8DAcBE1b889EFEA1E393775b32ED</a> */}
        <Switch>
          <Route path={`/farm/create`} component={CreateCrop} />
          <Route path={`/farm/get`} component={GetCrops} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
