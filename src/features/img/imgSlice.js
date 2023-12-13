import {createSlice} from "@reduxjs/toolkit";

const initialState = {}

export const imgSlice = createSlice({
    name: 'imageUrl',
    initialState,
    reducers: {
        setImg: (state, action) => {
            state.imageUrl = action.payload
        }
    }
})

export const {setImg} = imgSlice.actions
export default imgSlice.reducer