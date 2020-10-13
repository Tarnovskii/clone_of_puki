export const modalState = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_MODAL_STATE":
            return {...state, isOpen: action.value}
        case "UPDATE_MODAL_CONTENT":
            return {...state, modalContent: action.value}
        default: return state
    }
}
