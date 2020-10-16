export const initialState = {
    routingState: {
      pageName: 'mainPage',
      footerStatus: 'visible',
    },
    userState: {
        userToken: "",
        userRole: "TEACHER",
    },
    modalState: {
        isOpen: false,
        modalContent: null,
    },
    calendarState: {
        events: [],
    }
}

