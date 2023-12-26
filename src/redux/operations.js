import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://658adc34ba789a962238086d.mockapi.io/api/vvlad';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        console.log(response);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
}
)