import fetch from 'unfetch';

import { TOGGLE_LOADING, RECEIVED_NEWSDATA, UPDATE_PAGENUMBER } from './actionTypes';

const toggleLoading = value => ({
  type: TOGGLE_LOADING,
  value
});

export const updatePageNumber = value => ({
  type: UPDATE_PAGENUMBER,
  value
});

const loadNewsData = result => ({
  type: RECEIVED_NEWSDATA,
  totalPage: result.nbPages - 1,
  newsData: result.hits
});

export const fetchNewsData = () => (dispatch, getState) => {
  const { pageNumber } = getState();
  dispatch(toggleLoading(true));
  
  return fetch(`https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=10&page=${pageNumber}`)
    .then(res => res.json())
    .then((result) => {
      dispatch(updatePageNumber(result.page));
      dispatch(loadNewsData(result));
    })
}