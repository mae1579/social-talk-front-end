import {createSlice} from "@reduxjs/toolkit";
import appApi from "../services/appApi";

export const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addNotifications: (state, {payload}) => {
            if (state.newMessages[payload]) {
                state.newMessages[payload] = state.newMessages[payload] + 1;
            } else {
                state.newMessages[payload] = 1;
            }
        },
        resetNotifications: (state, {payload}) => {
            delete state.newMessages[payload];
        },
    },

    extraReducers: (builder) => {
        //Zapis uzytkownika po zalozeniu konta:
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state, {payload}) => payload);
        // Zapis uzytkownika po zalogowaniu:
        builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state, {payload}) => payload);
        // Sesja wylogowywania: czyli wymazanie uzytkownika;
        builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, () => null);
    },
});

export const {addNotifications, resetNotifications} = userSlice.actions;
export default userSlice.reducer;
