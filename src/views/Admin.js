import React from 'react'
import { Link, useHistory } from 'react-router-dom';
// import { Redirect, Route, Switch} from 'react-router-dom';
// import AddUser from './AddUser';
// import ListUser from './ListUser';
// import Notification from './Notification';
// import AddQuestion from './AddQuestion';
// import ListQuestion from './ListQuestion';
// import DetailQuestion from './DetailQuestion'
// import ListSurvay from './ListSurvay';
// import UpdateQuestion from './UpdateQuestion';
// import DoSurvay from './DoSurvay'


function Admin() {
    let history = useHistory();

    const handleLogout = () =>{
        localStorage.removeItem("accessToken")
        history.replace('/')
    }
    return (
        <div>
            <p>Name: Admin</p>
            <p>Pass: admin</p>
            <button onClick={handleLogout}>Logout</button>


            <Link to='/admin/add-question'>Add question</Link>
            <Link to='/admin/list-question'>List question</Link> 

           
            {/* <Route exact path='/admin/add-user' component = {AddUser} />
            <Route exact path='/admin/list-survay' component = {ListSurvay}/>
            <Route exact path='/admin/list-user' component = {ListUser} />
            <Route exact path='/admin/notification' component = {Notification} />
            <Route path='/admin/add-question'></Route>
            <Route exact path='/admin/list-question' component = {ListQuestion} />
            <Route exact path="/admin/list-question/:id">
                <DetailQuestion />
            </Route>
            <Route exact path='/list-survay/:id'>
                <DoSurvay/>
            </Route>
            <Route exact path='/list-question/:id/edit'>
                <UpdateQuestion/>
            </Route>       */}
          
 
        </div>
    )
}

export default Admin
