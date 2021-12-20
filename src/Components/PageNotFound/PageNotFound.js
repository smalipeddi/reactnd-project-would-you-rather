import React from 'react'
import Navigation from '../Navigation/Navigation'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { setAuthedUser } from '../../redux';

/** 
 * Page Not Found Component is displayed when ever a unauthorized user tries to navigate or login to page*  
 * */

function PageNotFound(props) {
    return (<div>
        <Navigation />
        {props.authedUser? ( <h1>Page Not Found</h1>) : (<div>
            Please Sign In again 
            <Navigate to="/signin" />
        </div>  )}
    </div>
    )
}

// AppContainer.js
function mapStateToProps(state) {
    return {
      users: state.users,
      authedUser: state.authedUser,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setAuthedUser: () => dispatch(setAuthedUser)
    }
  };
export default connect(mapStateToProps,mapDispatchToProps)(PageNotFound)