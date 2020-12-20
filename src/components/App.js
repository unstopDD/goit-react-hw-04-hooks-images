import { useState } from 'react';

import ImageInfo from './ImageInfo';
import Searchbar from './Searchbar';

import { ToastContainer } from 'react-toastify';

import s from './App.module.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchbarSubmit = query => {
    setSearchQuery(query);
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={handleSearchbarSubmit} />;
      <ImageInfo searchQuery={searchQuery} />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
