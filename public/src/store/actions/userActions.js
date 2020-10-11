export const updateUserToken = (userToken = "") => {
    return {type: "UPDATE_USER_TOKEN", value: userToken}
}

export const updateUserStatus = (userStatus = undefined) => {
    return {type: "UPDATE_USER_STATUS", value: userStatus}
}
