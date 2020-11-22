import { DEFAULT_CITY } from '../common/constants';
import { SET_FORECAST, SET_CITY, SET_LOADING_STATE } from './actions';
export const initialState = {
  forecasts: [],
  city: DEFAULT_CITY,
  loading: false,
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case SET_FORECAST:
    case SET_CITY:
    case SET_LOADING_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
