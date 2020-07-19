import { TOGGLE_LOADING, RECEIVED_NEWSDATA, UPDATE_PAGENUMBER } from '../actions/actionTypes';

export const initialState = {
  error: null,
  isLoaded: false,
  pageNumber: 0,
  totalPageNumber: 0,
  newsItems: []
};

export const hackerNewsReducer = ( state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoaded: action.value
      };

    case RECEIVED_NEWSDATA:
      return {
        ...state,
        isLoaded: false,
        totalPageNumber: action.totalPage,
        newsItems: action.newsData
      };

    case UPDATE_PAGENUMBER:
      return {
        ...state,
        pageNumber: action.value
      };

    default:
      return state
  }
};

export default hackerNewsReducer
