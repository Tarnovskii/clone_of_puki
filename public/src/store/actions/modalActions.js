export const updateModalState = (newState) => {
    return {type: "UPDATE_MODAL_STATE", value: newState}
}

export const updateModalContent = (content) => {
    return {type: "UPDATE_MODAL_CONTENT", value: content}
}
