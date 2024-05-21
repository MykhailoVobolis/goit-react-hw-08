export const selectContacts = (state) => state.contacts;

export const selectCurrentContact = (state) => state.contacts.currentContact;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;
