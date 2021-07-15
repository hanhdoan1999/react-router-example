
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

function App() {
  return (
    <Router>
      <Provider store ={store}>
        <Switch>
           {/* <Route exact path='/admin' render={() => {
             return localStorage.getItem("accessToken") ? <ListQuestion/> : <Redirect to='/'/>
           }}/> */}
           <Route exact path='/' component = {Login} />
           <PrivateRoute exact path='/admin/add-user'>
           <AddUser/>
           </PrivateRoute>
           <PrivateRoute exact path='/admin/list-survay'>
           <ListSurvay/>
            </PrivateRoute>
           <PrivateRoute exact path='/admin/list-user'>
           <ListUser/>
            </PrivateRoute>
           <PrivateRoute exact path='/admin/notification'>
           <Notification/> 
           </PrivateRoute>
           <PrivateRoute exact path='/admin/add-question'>
               <AddQuestion/>
            </PrivateRoute>
           <PrivateRoute exact path='/admin/list-question' >
              <ListQuestion/> 
            </PrivateRoute>
           <PrivateRoute exact path="/admin/list-question/:id">
               <DetailQuestion/>
          </PrivateRoute>
          <PrivateRoute exact path='/admin/list-survay/:id' >
              <DoSurvay/>
          </PrivateRoute>
          <PrivateRoute exact path='/admin/list-question/edit/:id' >
               <UpdateQuestion/>
          </PrivateRoute>      
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;


export function PrivateRoute({ children, ...rest }) {
   return (
     <Route
     {...rest} 
       render={() =>
         localStorage.getItem("accessToken") ? 
         (children) 
         : 
         (
         <Redirect to='/'/>
         )
       }
     />
   );
 }