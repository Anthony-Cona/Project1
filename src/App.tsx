import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { store } from './Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBarComponent from './components/navbar-component/NavBarComponent';
import  LoginComponent  from './components/login-component/LoginContainer';
import  UserInfoComponent  from './components/user-info/UserInfoContainer';
import  ViewAllUsersComponent  from './components/view-all-users-component/ViewAllUsersContainer';
import  ViewOneUserComponent from './components/view-one-user/ViewOneUserContainer';
import  ViewAllReimbursementsByIdComponent from './components/reimbursements-component/ViewAllReimbursementsByIdContainer';
import  ViewAllReimbursementsByStatusComponent from './components/reimbursements-component/ViewAllReimbursementsByStatusContainer';
import  EditUserByIdComponent  from './components/edit-user-component/editUserByIdContainer';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBarComponent />
          <Switch>
            <Route path='/login' component={LoginComponent} />
            <Route path='/user-info' component={UserInfoComponent}/>
            <Route path='/users/:id' component={ViewOneUserComponent}/>
            <Route path='/users' component={ViewAllUsersComponent}/>
            <Route path='/reimbursements/author/userId' component={ViewAllReimbursementsByIdComponent}/>
            <Route path='/reimbursements/status' component={ViewAllReimbursementsByStatusComponent}/>
            <Route path='/edit-user' component={EditUserByIdComponent}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;