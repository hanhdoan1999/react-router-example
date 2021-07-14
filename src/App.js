
import './App.css';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import AddUser from './views/AddUser';
import ListUser from './views/ListUser';
import Notification from './views/Notification';
import AddQuestion from './views/AddQuestion';
import ListQuestion from './views/ListQuestion';
import DetailQuestion from './views/DetailQuestion'
import Login from './views/Login';
import ListSurvay from './views/ListSurvay';
import UpdateQuestion from './views/UpdateQuestion'

import DoSurvay from './views/DoSurvay';
import Admin from './views/Admin';

function App() {
  return (
    <Router>
      <Provider store ={store}>
        <Switch>
           <Route exact path='/admin' render={() => {
             return localStorage.getItem("accessToken") ? <ListQuestion/> : <Redirect to='/'/>
           }}/>
           <Route exact path='/' component = {Login} />

           {/* <Route exact path='/admin/add-question' render={()=>{
              return localStorage.getItem("accessToken") ? <AddQuestion/> : <Redirect to='/'/>
           }} 
           /> */}

          {/* <Route exact path='/admin/add-question' render={()=>{
              return localStorage.getItem("accessToken") ? <AddQuestion/> : <Redirect to='/'/>
           }} 
           /> */}

           <Route exact path='/admin/add-user' render={() => {
              return localStorage.getItem("accessToken") ? <AddUser/> : <Redirect to='/'/>
           }}/>
           <Route exact path='/admin/list-survay' render={() => {
              return localStorage.getItem("accessToken") ? <ListSurvay/> : <Redirect to='/'/>
           }}/>
           <Route exact path='/admin/list-user' render={() => {
              return localStorage.getItem("accessToken") ? <ListUser/> : <Redirect to='/'/>
           }}/>
           <Route exact path='/admin/notification' render={() => {
              return localStorage.getItem("accessToken") ? <Notification/> : <Redirect to='/'/>
           }}/>
           <Route exact path='/admin/add-question'  render={() => {
              return localStorage.getItem("accessToken") ? <AddQuestion/> : <Redirect to='/'/>
           }}/>
           <Route exact path='/admin/list-question'  render={() => {
              return localStorage.getItem("accessToken") ? <ListQuestion/> : <Redirect to='/'/>
           }}/>
           <Route exact path="/admin/list-question/:id" render={() => {
              return localStorage.getItem("accessToken") ? <DetailQuestion/> : <Redirect to='/'/>
           }}>
              {/* <DetailQuestion /> */}
          </Route>
          <Route exact path='/admin/list-survay/:id' render={() => {
              return localStorage.getItem("accessToken") ? <DoSurvay/> : <Redirect to='/'/>
           }}>
              {/* <DoSurvay/> */}
          </Route>
          <Route exact path='/admin/list-question/edit/:id' render={() => {
              return localStorage.getItem("accessToken") ? <UpdateQuestion/> : <Redirect to='/'/>
           }}>
              {/* <UpdateQuestion/> */}
          </Route>      
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
