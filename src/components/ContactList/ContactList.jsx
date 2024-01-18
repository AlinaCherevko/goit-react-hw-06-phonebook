import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ users, deleteUser }) => {
  return (
    <div className={css.listWrapper}>
      {users.map(user => (
        <div key={user.id} className={css.wrapper}>
          <p className={css.description}>
            {user.userName}: {user.userNumber}
          </p>
          <button
            className={css.button}
            onClick={() => deleteUser(user.id)}
            type="button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
