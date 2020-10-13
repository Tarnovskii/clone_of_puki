export const updateUserToken = (userToken = "") => {
    return {type: "UPDATE_USER_TOKEN", value: userToken}
}

export const updateUserRole = (userRole = undefined) => {
    return {type: "UPDATE_USER_ROLE", value: userRole}
}
