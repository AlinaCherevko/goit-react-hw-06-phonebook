import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from '../components';
import { useDispatch, useSelector } from 'react-redux';
// import { store } from './redux/store';
import { addContact, deleteContact } from './redux/contacts/contactsSlice';
import { filterContact } from './redux/filter/filterSlice';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.contacts);
  const filter = useSelector(store => store.filter.filter);

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  const addNewName = formData => {
    const avoidRepitition = contacts.some(
      contact => contact.userName === formData.userName
    );
    if (avoidRepitition) {
      alert(`${formData.userName} is already exist!`);
      return;
    }

    const finalProfile = {
      ...formData,
      id: nanoid(),
    };
    const action = addContact(finalProfile);
    dispatch(action);
  };

  const handleChangeForm = e => {
    const value = e.currentTarget.value;
    const action = filterContact(value);
    dispatch(action);
    // setFilter(value);
  };
  const deleteUser = userId => {
    const action = deleteContact(userId);
    dispatch(action);
    // setContacts(contacts.filter(contact => contact.id !== userId));
  };

  //шукаємо підрядок у рядку, далі ми передамо цей об,єкт у рендер
  const filteredContact = contacts.filter(user =>
    user.userName.toLowerCase().includes(filter.trim().toLowerCase())
  );
  // console.log(filteredContact);
  return (
    <div className="container">
      <ContactForm addNewName={addNewName} />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter handleChangeForm={handleChangeForm} value={filter} />
      <ContactList users={filteredContact} deleteUser={deleteUser} />
    </div>
  );
};
