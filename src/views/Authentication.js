import {Route, Redirect} from 'react-router-dom'

export function Authentication({ children, ...rest }) {
    return (
      <Route
      {...rest} 
        render={() =>
          localStorage.getItem("accessToken") ? 
          <Redirect to='/admin/list-question'/>
          : 
          (
          <Redirect to='/login'/>
          )
        }
      />
    );
  }