import { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return toast.error('Enter the name of the pictures ');
    }

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}></span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            value={inputValue}
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
