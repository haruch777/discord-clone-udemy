import { createSlice } from "@reduxjs/toolkit"
import { InitialUserState } from "../Types";

const initialState: InitialUserState = {
    user: null,
    // user: {
    //     "uid": "1000000",
    //     "photo": "aaa.jpg",
    //     "email": "aaa@example.com",
    //     "displayName": "ooyo",
    // }
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;