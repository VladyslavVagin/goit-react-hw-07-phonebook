import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  {id: 1, name: 'Rodrigo', number: '768976546'},
  {id: 2, name: 'Alonso', number: '876987886'},
  {id: 3, name: 'Federiko', number: '345656768'},
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
             ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteUser(state, action) {
     return state = state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
