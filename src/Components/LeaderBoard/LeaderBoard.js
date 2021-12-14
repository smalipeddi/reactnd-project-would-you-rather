import React  from 'react';
import { connect } from 'react-redux'
import { useState } from 'react';
import { setAuthedUser } from '../../redux';
import Navigation from '../Navigation/Navigation'
import { useDispatch } from 'react-redux'


function LeaderBoard(props) {

  const dispatch = useDispatch()
  const [list, setList] = useState([]);

  return (<div id="users">
    <Navigation />
    {props.authedUser ? ( <h1> leader baord is here</h1>) : (<div> Please login to view he leader board</div>)}
   
  </div>)
}

// AppContainer.js
function mapStateToProps(state) {
  return {
    users: state.users,
    questions: state.questions,
    authedUser: state.authedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: () => dispatch(setAuthedUser)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)