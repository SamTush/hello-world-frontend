import { FETCH_RANDOM_GREETING_REQUEST, FETCH_RANDOM_GREETING_SUCCESS, FETCH_RANDOM_GREETING_FAILURE } from './actions';

const initialState = {
  greeting: '',
  loading: false,
  error: null,
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RANDOM_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_RANDOM_GREETING_FAILURE:
      return {
        ...state,
        greeting: '',
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default greetingReducer;
