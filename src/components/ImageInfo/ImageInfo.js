import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Spinner from '../Loader';
import Modal from '../Modal';

import fetchArticlesWithQuery from '../../utils/articlesApi';
import scroll from '../../utils/scroll';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function ImageInfo({ searchQuery }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImgUrl, setLargeImgUrl] = useState(null);
  const [arePicturesOver, setArePicturesOver] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setArticles([]);
    setPage(1);
    setError(null);

    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    if (page === 1) {
      return;
    }

    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchArticles = () => {
    setStatus(Status.PENDING);

    fetchArticlesWithQuery(searchQuery, page)
      .then(({ hits, totalHits }) => {
        setArticles(prevHits => [...prevHits, ...hits]);
        setArePicturesOver(totalHits - page * 12 <= 0);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      })
      .finally(scroll);
  };

  const onClickLoadMore = () => {
    setPage(page => page + 1);
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImgUrl(null);
  };

  const handleClickImg = largeImgUrl => {
    setLargeImgUrl(largeImgUrl);
    setShowModal(true);
  };

  if (status === Status.IDLE) {
    return <></>;
  }

  if (status === Status.REJECTED) {
    return <h1>{error.message}</h1>;
  }

  if (status === Status.RESOLVED || status === Status.PENDING) {
    return (
      <>
        <ImageGallery images={articles} openModal={handleClickImg} />
        {status === Status.RESOLVED && !arePicturesOver && (
          <Button nextImages={onClickLoadMore} />
        )}
        {status === Status.PENDING && <Spinner />}
        {showModal && <Modal onClose={closeModal} imgUrl={largeImgUrl} />}
      </>
    );
  }
}

ImageInfo.propTypes = {
  searchQuery: PropTypes.string,
};
