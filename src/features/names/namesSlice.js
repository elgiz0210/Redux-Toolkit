import {createSlice} from "@reduxjs/toolkit";

const initialState = {}

export const namesSlice = createSlice({
    name: 'fullName',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.fullName = action.payload
        }
    }
})

export const {setName} = namesSlice.actions
export default namesSlice.reducer