import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    users: [],
    loading: false
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
            state.loading = true
        }),

        fetchUsersSuccess: (state, action) => {
            state.users = action.payload
            state.loading = false
        },

        fetchUsersFailure: (state, action) => {
            console.log(action.payload)
            state.loading = false
        },
        
        fetchUsersById: (state, action) => {

        },
        fetchUsersByIdSuccess: (state, action) => {
            console.log(action.payload)
        },
        fetchUsersByIdFailure: (state, action) => {
            console.log("Erro ao buscar pelo Id")
        },
    }
})

export const {
    createUser, logoutUser, addAddress, deleteAddress, fetchUsers, fetchUsersSuccess, fetchUsersFailure,
    fetchUsersById, fetchUsersByIdSuccess, fetchUsersByIdFailure
} = userSlice.actions

export default userSlice.reducer