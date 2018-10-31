import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import Home from './components/home/Home';
import Page404 from "./components/page_404/Page404";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/AmericaTV/" component={Home} />
      {/* <Route exact path="/AmericaTV/pedidos/" component={ViewOrders} />
      <Route exact path="/AmericaTV/historial/" component={ViewRecord} /> */}
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRoutes;
