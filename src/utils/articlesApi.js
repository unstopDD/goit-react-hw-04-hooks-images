function fetchArticlesWithQuery(searchQuery, page = 1) {
  const apiKey = '17653140-37eca66381d8ffc40f2e9b8e7';

  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`No pictures with title${searchQuery}`));
  });
}

export default fetchArticlesWithQuery;
