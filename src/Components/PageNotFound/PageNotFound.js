import React from 'react'
import Navigation from '../Navigation/Navigation'
import { connect } from 'react-redux'
import { login, receiveUsers, setAuthedUser } from '../../redux';
function PageNotFound(props) {
    return (<div>
        <Navigation />
        {props.authedUser? ( <h1>Page Not Found</h1>) : (<div>
            Please Sign In again 
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