import { useState } from 'react';
// , useRef, useEffect
import ImageInfo from './ImageInfo';
import Searchbar from './Searchbar';

import { ToastContainer } from 'react-toastify';

import s from './App.module.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  // const Query = useRef('');

  // useEffect(() => {
  //   Query.current = searchQuery;
  // }, [searchQuery]);

  // const prevQuery = Query.current;

  return (
    <div className={s.App}>
      <Searchbar onSubmit={setSearchQuery} />;
      <ImageInfo searchQuery={searchQuery} />
      {/* prevQuery={prevQuery} */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
