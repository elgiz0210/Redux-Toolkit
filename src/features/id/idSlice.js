import {createSlice} from "@reduxjs/toolkit";

const initialState = {}

export const idSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id= action.payload
        }
    }
})

export const {setId} = idSlice.actions
export default idSlice.reducer