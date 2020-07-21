import fetch from 'unfetch';

import { TOGGLE_LOADING, RECEIVED_NEWSDATA, UPDATE_PAGENUMBER, UPDATE_HIDDEN_NEWSID } from './actionTypes';

export const updateState = (type, value) => ({
  type,
  value
});

const loadNewsData = result => ({
  type: RECEIVED_NEWSDATA,
  totalPage: result.nbPages - 1,
  newsData: result.hits
});

export const fetchNewsData = () => (dispatch, getState) => {
  const { pageNumber } = getState();
  dispatch(updateState(TOGGLE_LOADING, true));
  
  return fetch(`https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=10&page=${pageNumber}`)
    .then(res => res.json())
    .then((result) => {
      dispatch(updateState(UPDATE_PAGENUMBER, result.page));
      dispatch(loadNewsData(result));
    })
}

export const hideNews = (id) => (dispatch, getState) => {
  const hiddenIds = JSON.parse(localStorage.getItem('hiddenNewsid'));
  if(!hiddenIds.includes(id)) {
    hiddenIds.push(id);
    localStorage.setItem('hiddenNewsid',  JSON.stringify(hiddenIds));
  }

  const { hiddenNewsId } = getState();
  console.log('hiddenInAction', hiddenNewsId);
  if(!hiddenNewsId.includes(id)) {
    hiddenNewsId.push(id);
    dispatch(updateState(UPDATE_HIDDEN_NEWSID, hiddenNewsId))
  }
}