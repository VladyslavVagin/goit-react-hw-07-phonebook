import AddContactForm from './AddContactForm/AddContactForm';
import ListOfContacts from './ListOfContacts/ListOfContacts';
import Filter from './Filter/Filter';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ListOfContacts />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};
