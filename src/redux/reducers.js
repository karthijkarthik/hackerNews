import { TOGGLE_LOADING, RECEIVED_NEWSDATA, UPDATE_PAGENUMBER, UPDATE_HIDDEN_NEWSID } from '../actions/actionTypes';

export const initialState = {
  error: null,
  isLoaded: false,
  pageNumber: 0,
  totalPageNumber: 0,
  newsItems: [],
  hiddenNewsId: []
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

    case UPDATE_HIDDEN_NEWSID:
      return {
        ...state,
        hiddenNewsId: action.value
      }

    default:
      return state
  }
};

export default hackerNewsReducer
