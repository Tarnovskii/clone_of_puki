export const pageName = (state = "mainPage", action) => {
    return action.type === 'UPDATE_CURRENT_PAGENAME' ? action.value : state
}
