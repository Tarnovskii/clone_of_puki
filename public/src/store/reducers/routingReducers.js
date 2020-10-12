export const routingState = (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_CURRENT_PAGENAME':
            return {...state, pageName: action.value}
        case 'UPDATE_FOOTER_STATUS':
            return {...state, footerStatus: action.value}
        default: return state
    }
}

