import { getInitialData } from "../utils/api/data";
import { receiveUsers } from "./users";
import { setAuthedUser } from './authedUser';
const AUTHED_ID = 'tylermcginnis';
// thunk for asynchonous data access
export function handleInitialData () {
    return (dispatch) => {
        return getInitialData().then(users => {
         console.log(users);
         dispatch(receiveUsers(users));
         dispatch(setAuthedUser(AUTHED_ID));
        })
    }
}

export default handleInitialData;