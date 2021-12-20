import React ,{ useState } from 'react';
import Navigation from "../Navigation/Navigation";
import { connect, useSelector } from 'react-redux'
import { authedUser, questions, saveNewQuestion } from '../../redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import  PageNotFound from "../PageNotFound/PageNotFound"

/** 
 * New Component that allows user to adda new question to the questions array and update the user question array
 *  
 * */
function NewQuestion(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [firstOption, setFirstOption] = useState("")
    const [secondOption, setSecondOption] = useState("")
    const authedUser = useSelector((state) => state.authedUser)

    let onSubmitNewQuestion = (e) => {
    
    console.log("sunitha new question options",firstOption, secondOption,authedUser);
        e.preventDefault();
        dispatch(saveNewQuestion( firstOption, secondOption, authedUser ))
        navigate('/home')
    }

    return (<div>
        <Navigation />
        <div className="question-col">
            {authedUser ? (
                <div className="card" >
                    <div className="card-body">
                        <h3 className="card-title"> Create New Question </h3>
                        <p>Comptet the Question:</p>
                        <p>Would you rather - </p>
                        <div className="question-col">
                            <form className="question-options" onSubmit={onSubmitNewQuestion}>
                                <input onChange={(e) => setFirstOption(e.currentTarget.value)} type='text' name='firstOption' />
                                <div className="center"> OR </div>
                                <input onChange={(e) => setSecondOption(e.currentTarget.value)} type='text' name='secondOption' />
                                <button className="btn btn-primary"> Submit</button>
                            </form>

                        </div>
                    </div>
                </div>

            ) : (<PageNotFound />)}

        </div>

    </div>)

}

function mapStateToProps(state) {

    return {
        authedUser,
        questions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveNewQuestion
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)