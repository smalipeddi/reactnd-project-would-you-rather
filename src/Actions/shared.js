import { getInitialData } from '../utils/api'
import { receiveUsers } from "./users";
import { setAuthedUser } from './authedUser';
const AUTHED_ID = 'tylermcginnis';
// thunk for asynchonous data access
export function handleInitialData () {
    return (dispatch) => {
        return getInitialData().then(users => {
     
         dispatch(receiveUsers(users));
         dispatch(setAuthedUser(AUTHED_ID));
        })
    }
}

export default handleInitialData;