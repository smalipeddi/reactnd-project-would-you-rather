
function login (isLoggedIn) {
    return {
      type: 'USER_LOGIN',
      isLoggedIn,
    }
}

function logout (isLoggedIn) {
    return {
      type: 'USER_LOGOUT',
      isLoggedIn,
    }
}
