import { Route, Redirect, Switch } from 'react-router-dom';
import { Login } from '../components/Login/Login';
import { Frontpage } from '../components/pages/FrontPage/Frontpage';
import HousePage from '../components/pages/HousePage/HousePage';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/frontpage'>
                <Frontpage />
            </Route>
            <Route exact path='/housepage'>
                <HousePage />
            </Route>
            <Route exact path='/login'>
                <Login />
            </Route>
            <Route exact path=''>
                <Redirect to='/frontpage'/>
            </Route>            
        </Switch>
    )
}