import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact } from "./operations";
import { logOut } from "../auth/operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlise = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    currentContact: null,
    currentDeleteContact: null,
    loading: false,
    error: null,
  },

  reducers: {
    addCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },
    addCurrentDeleteContact: (state, action) => {
      state.currentDeleteContact = action.payload;
    },
  },

  // Додаємо обробку зовнішніх екшенів
  extraReducers: (builder) => {
    builder

      // Читання контактів з mockapi.io
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      // Додавання контакту на mockapi.io
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      // Видалення контакту з mockapi.io
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex((contact) => contact.id === action.payload.id);
        state.items.splice(index, 1);
        state.currentDeleteContact = null;
      })
      .addCase(deleteContact.rejected, handleRejected)
      // Обов'язкове очищення стану контактів при виході користувача з App
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      })

      // Зміна контакту на mockapi.io
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map((contact) => {
          return contact.id === state.currentContact.id ? action.payload : contact;
        });

        state.currentContact = null;
      })
      .addCase(editContact.rejected, handleRejected);
  },
});

// Експортуємо редюсер
export const contactsReducer = contactsSlise.reducer;

export const { addCurrentContact, addCurrentDeleteContact } = contactsSlise.actions;
