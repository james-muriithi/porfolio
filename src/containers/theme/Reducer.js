import preferences from "./Preference";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            preferences.Save(!state.isDark)
            return {
                isDark: !state.isDark
            };
        default:
            return state;
    }
};

export default reducer;