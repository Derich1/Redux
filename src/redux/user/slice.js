import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    fetchUsers: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: ((state, action) => {

            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null
                }
            }
        }),

        logoutUser: ((state) => {

            return {
                ...state,
                user: null
            }
        }),

        addAddress: ((state, action) => {
            if (action.payload.location === "" || action.payload.number === ""){
                alert("Preencha todos os campos!")
                return {...state}
            }

            if (state.user === null){
                alert("Faça login antes de cadastrar um endereço!")
                return
            }

            return {
                ...state,
                user: {
                    // Mantendo os dados do user e alterando somente o address
                    ...state.user,
                    address: {
                        location: action.payload.location,
                        number: action.payload.number
                    }
                }
            }
        }),
        
        deleteAddress: (state) => {  
            return {
                ...state,
                user: {
                    ...state.user,
                    address: null
                }
            }
        },

        fetchUsers: ((state, action) => {

        })
    }
})

export const {createUser, logoutUser, addAddress, deleteAddress, fetchUsers} = userSlice.actions

export default userSlice.reducer