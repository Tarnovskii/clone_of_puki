export const userState = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_USER_TOKEN":
            return {...state, userToken: action.value}
        case "UPDATE_USER_ROLE":
            return {...state, userRole: action.value}
        default: return state
    }
}
