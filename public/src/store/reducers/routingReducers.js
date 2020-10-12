export const pageName = (state = "mainPage", action) => {
    return action.type === 'UPDATE_CURRENT_PAGENAME' ? action.value : state
}

export const footerStatus = (state = "visible", action) => {
    return action.type === 'UPDATE_FOOTER_STATUS' ? action.value : state
}
