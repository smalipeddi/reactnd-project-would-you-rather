import React from "react";
import Navigation from "../Navigation/Navigation";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveQuestion, saveQuestionAnswer1 } from "../../redux";

function ViewPoll(props) {
  const [currentRadioValue, setCurrentValue] = React.useState("on");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let onChangeValue = (e) => {
    setCurrentValue(e.target.value);
    
    dispatch(
      saveQuestionAnswer1(props.authedUser, props.question.id, e.target.value)
    );
  };

  let saveAnswer = () => {
    navigate("/home");
  };

  return (
    <div>
     
      <Navigation />
      <h1>Create New Question</h1>
      <p>Comptet the Question</p>
      <div>Would You rather -</div>
      {/* <div>{Object.values(props.question.id)}</div> */}
      <div>
        {/* <form onSubmit={saveAnswer}>
          {Object.values[props.question.id].map(val => {
             <input
             name={val.name}
             value="optionOne"
             type="radio"
             onChange={onChangeValue}
             checked={currentRadioValue === val}
           />
          })}
          {/* <input
            name="radio-item-1"
            value="optionOne"
            type="radio"
            onChange={onChangeValue}
            checked={currentRadioValue === props.question.optionOne}
          />
          {props.question.optionOne.text}
          <input
            name="radio-item-1"
            value="optionTwo"
            type="radio"
            onChange={onChangeValue}
          /> 
          {props.question.optionTwo.text}
          <button>SUBMIT </button>
        </form> */}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    question: state.question,
    user: state.user,
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll);
