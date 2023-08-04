import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/greetings/random';

export const FETCH_RANDOM_GREETING_REQUEST = 'FETCH_RANDOM_GREETING_REQUEST';
export const FETCH_RANDOM_GREETING_SUCCESS = 'FETCH_RANDOM_GREETING_SUCCESS';
export const FETCH_RANDOM_GREETING_FAILURE = 'FETCH_RANDOM_GREETING_FAILURE';

export const fetchRandomGreeting = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_RANDOM_GREETING_REQUEST });

    axios.get(API_URL)
      .then(response => {
        dispatch({
          type: FETCH_RANDOM_GREETING_SUCCESS,
          payload: response.data.message
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_RANDOM_GREETING_FAILURE,
          error: error.message
        });
      });
  };
};
