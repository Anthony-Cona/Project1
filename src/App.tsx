import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { store } from './Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBarComponent from './components/navbar-component/NavBarComponent';
import  LoginComponent  from './components/login-component/LoginContainer';
import { userInfo } from 'os';
import  UserInfoComponent  from './components/user-info/UserInfoContainer';
import  ViewAllUsersComponent  from './components/view-all-users-component/ViewAllUsersContainer';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBarComponent />
          <Switch>
            <Route path='/login' component={LoginComponent} />
            <Route path='/user-info' component={UserInfoComponent}/>
            <Route path='/users' component={ViewAllUsersComponent}/>
            
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;