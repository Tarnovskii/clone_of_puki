export const updateCurrentPageName = (pageName) => {
    return {type: "UPDATE_CURRENT_PAGENAME", value: pageName}
}

export const updateFooterStatus = (newStatus) => {
    return {type: "UPDATE_FOOTER_STATUS", value: newStatus}
}
