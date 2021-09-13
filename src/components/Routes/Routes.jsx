import { Route, Redirect, Switch } from 'react-router-dom';
import { Login } from '../Login/Login';
import { Frontpage } from '../pages/FrontPage/Frontpage';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/frontpage'>
                <Frontpage />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path="/">
                <h2>404 siden findes ikke....</h2>
            </Route>            
        </Switch>
    )
}