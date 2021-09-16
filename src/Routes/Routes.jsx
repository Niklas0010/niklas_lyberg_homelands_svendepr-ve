import { Route, Redirect, Switch } from "react-router-dom";
import { Comments } from "../components/Comments/Comments";
import { Login } from "../components/Login/Login";
import { Frontpage } from "../components/pages/FrontPage/Frontpage";
import { HousePage } from "../components/pages/HousePage/HousePage";
import { HomeDetails } from "../components/Homes/HouseDetails";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/frontpage">
        <Frontpage />
      </Route>

      <Route exact path="/housepage">
        <HousePage />
      </Route>

      <Route path="/housepage/:id">
        <HomeDetails />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/comments">
        <Comments />
      </Route>
      
      <Route exact path="">
        <Redirect to="/frontpage" />
      </Route>
    </Switch>
  );
};
