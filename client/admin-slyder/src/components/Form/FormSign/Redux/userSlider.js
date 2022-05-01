import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: {
            allUsers: null,
            isFetching: false,
            error: false
        },
        msg: "",
    },
    reducers: {
        getUsersStart: (state) => {
            state.users.isFetching = true;
        },
        getUsersSuccess: (state, action) => {
            state.users.isFetching = false
            state.users.allUsers = action.payload
        },
        getUsersFailse: (state) => {
            state.users.isFetching = false;
            state.users.error = true
        },
        deleteUsersStart: (state) => {
            state.users.isFetching = true;
        },
        deleteUsersSuccess: (state, action) => {
            state.users.isFetching = false
            state.msg = action.payload
        },
        deleteUsersFailse: (state, action) => {
            state.users.isFetching = false;
            state.users.error = true
            state.msg = action.payload
        },

    }
})

export const {
    getUsersStart,
    getUsersFailse,
    getUsersSuccess,
    deleteUsersFailse,
    deleteUsersStart,
    deleteUsersSuccess
} = userSlice.actions

export default userSlice.reducer