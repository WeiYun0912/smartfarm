import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderBar from "./components/layout/HeaderBar";

import CreateCrop from "./components/create/CreateCrop";
import GetCrops from "./components/get/GetCrops";
import Container from "@material-ui/core/Container";
import Home from "./components/Home";
import Explorer from "./components/explorer/Explorer";
import {Provider} from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderBar />
        <Route exact path="/" component={Home} />
        <Container>

          <Switch>
            <Route path={`/farm/create`} component={CreateCrop} />
            <Route path={`/farm/get`} component={GetCrops} />
            <Route path={`/farm/explorer`} component={Explorer} />
          </Switch>
          <Alert />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
