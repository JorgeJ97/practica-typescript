import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { State } from '../../types'
// import axios from 'axios'
const API_ENDPOINT = 'http://localhost:3001/characters'



const initialState: State = {
    characters: [],
    character: {   
        id: 0,
        name: '',
        status: 'unknown',
        species: '',
        gender:'unknown',
        origin: '',
        image: '',
        isFavorite: false, }
}

export const getCharacters = createAsyncThunk('characters/allCharacters', async () => {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    return data;
})
export const getCharactersByName = createAsyncThunk('characters/CharactersByName', async (name: string) => {
    const response = await fetch(`${API_ENDPOINT}?name=${name}`)
    const data = await response.json()
    return data;
})
export const getCharacterById = createAsyncThunk('characters/CharacterById', async (id: string | undefined) => {
    const response = await fetch(`${API_ENDPOINT}/${id}`)
    const data =  await response.json()
    return data;
})

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {

    },
    extraReducers:(builder) =>{
        builder.addCase(getCharacters.fulfilled, (state, action)=>{
            state.characters = action.payload
        })
        builder.addCase(getCharactersByName.fulfilled, (state, action)=>{
            state.characters = action.payload
        })
        builder.addCase(getCharacterById.fulfilled, (state, action)=>{
            state.character = action.payload
        })

    }
})

export default charactersSlice.reducer;