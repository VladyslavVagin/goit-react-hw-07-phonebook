import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://658adc34ba789a962238086d.mockapi.io/api/vvlad';


// ============================== GET ALL CONTACTS FROM DATA BASE
export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }})

    //=========================== Operation for ADD CONTACT to Data base
export const addContact = createAsyncThunk('contacts/addContact', 
async ({name, phone}, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', ({name, phone}));
        console.log(response);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
}
)