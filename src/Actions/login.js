export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export function login (isLoggedIn) {
    return {
      type: USER_LOGIN,
      isLoggedIn,
    }
}

export function logout (isLoggedIn) {
    return {
      type: USER_LOGOUT,
      isLoggedIn,
    }
}
