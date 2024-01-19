import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'components/redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  //const filter = useSelector(store => store.filter.filter);

  return (
    <div className={css.divWrapper}>
      <label className={css.label}>Find contact by name</label>
      <input
        type="text"
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
        className={css.input}
        // value={value}
        placeholder=""
      />
    </div>
  );
};
