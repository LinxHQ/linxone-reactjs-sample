const initialState = {
    changeSidebar: false,
    showAlert: false,
    showMessage: false,
    data: []
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_SIDEBAR":
            return {
                ...state,
                changeSidebar: !state.changeSidebar
            }
        case "SHOW_ALERT":
            return {
                ...state,
                showAlert: !state.showAlert
            }
        case "SHOW_MESSAGE":
            return {
                ...state,
                showMessage: !state.showMessage
            }
        case "INIT_DATA":
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}
export default myReducer