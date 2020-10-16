export const calendarState = (state = {}, action) => {
    switch (action.type) {
        case "ADD_EVENT_TO_CALENDAR":
            return {...state, events: [...state.events, action.value]}
        default: return state;
    }
}
