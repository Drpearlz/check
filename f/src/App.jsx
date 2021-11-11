import { Router, Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import authAtom from '../src/_state/auth';
import Nav  from '../src/_components/Nav';
import Alert  from '../src/_components/Alert';
import PrivateRoute  from '../src/_components/PrivateRoute';
import history from '../src/_helpers/history';
import  Home  from '../src/home/Home';
import  Users from '../src/users/Users';
import Account  from '../src/account/Account';



function App() {
    const auth = useRecoilValue(authAtom);

    return (
        <div className={'app-container' + (auth ? ' bg-light' : '')}>
            <Router history={history}>
                <Nav />
                <Alert />
                <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute path="/users" component={Users} />
                    <Route path="/account" component={Account} />
                    <redirect from="*" to="/" />
                </Switch>
            </Router>
        </div>
    );
}
export default  App ;