import React ,{ useState } from 'react';
import Navigation from "../Navigation/Navigation";
import { connect, useSelector } from 'react-redux'
import { authedUser, questions, saveNewQuestion } from '../../redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import  PageNotFound from "../PageNotFound/PageNotFound"
import PropTypes from 'prop-types'
/** 
 * New Component that allows user to adda new question to the questions array and update the user state question array
 *  
 * */
function NewQuestion(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [firstOption, setFirstOption] = useState("")
    const [secondOption, setSecondOption] = useState("")
    const authedUser = useSelector((state) => state.authedUser)

    const propTypes = {
        firstOption: PropTypes.string.isRequired,
        secondOption: PropTypes.string.isRequired,
        onSubmitNewQuestion: PropTypes.func.isRequired
    }

    let onSubmitNewQuestion = (e) => {
        e.preventDefault();
        if(firstOption && secondOption) {
            dispatch(saveNewQuestion( firstOption, secondOption, authedUser ))
            navigate('/home')
        } else {
            alert("Enter the options in the input fields")
            return
        }
        
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