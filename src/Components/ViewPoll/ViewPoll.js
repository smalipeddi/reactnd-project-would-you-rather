import React  from "react";
import Navigation from "../Navigation/Navigation";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveQuestionAnswer1 } from "../../redux";

function ViewPoll(props) {
  const [currentRadioValue, setCurrentValue] = React.useState("on");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRadioChange = (value) => {
    setCurrentValue(value);
  };

  let onChangeValue = (e) => {
    console.log("sunitha in save poll ", props);
    console.log(e.target.value);
    setCurrentValue(e.target.value);
    dispatch(
      saveQuestionAnswer1(props.authedUser, props.question.id, e.target.value)
    );
    navigate("/home");
  };

  let saveAnswer = () => {
    navigate("/home");
  };

  return (
    <div>
      <div>{JSON.stringify(props.question)}</div>
      <Navigation />
      <h1>Create New Question</h1>
      <p>Comptet the Question</p>
      <div>Would You rather -</div>
      <div>
        <input
          name="radio-item-1"
          value={JSON.stringify(props.question.optionOne.text)}
          type="radio"
          onChange={onChangeValue}
          defaultChecked={currentRadioValue === "on"}
        />
        {JSON.stringify(props.question.optionOne.text)}
        <input
          name="radio-item-1"
          value={JSON.stringify(props.question.optionTwo.text)}
          type="radio"
          onChange={onChangeValue}
          defaultChecked={currentRadioValue === "off"}
        />
        {JSON.stringify(props.question.optionTwo.text)}
        <button onSubmit={saveAnswer}>SUBMIT </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
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
    saveQuestionAnswer1,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll);
