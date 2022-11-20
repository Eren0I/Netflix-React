import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const userSlice= createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) =>{
            state.user= action.payload
        },
        logout: (state, action) =>{
            state.user = null;
        }
    }
})

export const {login, logout}= userSlice.actions

export const selectUser= (state)=> state.user.user

export default userSlice.reducer


// import { apiCallBegan } from "./api";
// import { toast } from "react-toastify";
// import { auth } from "../../firebase/config";
// import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from "./authSlice";


// // const slice = createSlice({
//     name: "user",
//     initialState: {
//         list: [],
//         loading: false,
//         lastFetch: null,
//     },
//     reducers: {
//         userRequested: (user, action) => {
//             user.loading = true;
//         }
//         ,
//         userReceived: (user, action) => {
//             user.list = action.payload;
//             user.loading = false;
//             user.lastFetch = Date.now();
//         }
//         ,
//         userRequestFailed: (user, action) => {
//             user.loading = false;
//         }
//         ,
//         userAdded: (user, action) => {
//             user.list.push(action.payload);
//         }
//         ,
//         userUpdated: (user, action) => {
//             const index = user.list.findIndex(user => user.id === action.payload.id);
//             user.list[index] = action.payload;
//         }
//         ,
//         userDeleted: (user, action) => {
//             const index = user.list.findIndex(user => user.id === action.payload.id);
//             user.list.splice(index, 1);
//         }
//         ,
//     }
// });

// const {
//     userAdded,
//     userUpdated,
//     userDeleted,
//     userReceived,
//     userRequested,
//     userRequestFailed
// } = slice.actions;
// export default slice.reducer;

// // Action Creators
// const url = "/user";

// export const loadUser = () => (dispatch, getState) => {
//     const { lastFetch } = getState().entities.user;

//     const diffInMinutes = Date.now() - lastFetch;
//     if (diffInMinutes < 10) return;

//     return dispatch(
//         apiCallBegan({
//             url,
//             onStart: userRequested.type,
//             onSuccess: userReceived.type,
//             onError: userRequestFailed.type,
//         })
//     );
// }

// export const addUser = (user) =>
//     apiCallBegan({
//         url,
//         method: "post",
//         data: user,
//         onSuccess: userAdded.type,
//     });

// export const updateUser = (user) =>
//     apiCallBegan({
//         url: url + "/" + user.id,
//         method: "put",
//         data: user,
//         onSuccess: userUpdated.type,
//     });

// export const deleteUser = (id) =>
//     apiCallBegan({
//         url: url + "/" + id,
//         method: "delete",
//         onSuccess: userDeleted.type,
//     });

// // Selector
// export const getUser = createSelector(
//     (state) => state.entities.user,
//     (user) => user.list
// );

// export const getUserById = (id) => createSelector(
//     (state) => state.entities.user,
//     (user) => user.list.find(user => user.id === id)
// );

// export const getUserLoading = createSelector(
//     (state) => state.entities.user,
//     (user) => user.loading
// );

// export const getUserLastFetch = createSelector(
//     (state) => state.entities.user,
//     (user) => user.lastFetch
// );
