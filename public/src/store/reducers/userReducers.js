export const userState = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_USER_TOKEN":
            return {...state, userToken: action.value}
        case "UPDATE_USER_STATUS":
            return {...state, userStatus: action.value}
        default: return state
    }
}
