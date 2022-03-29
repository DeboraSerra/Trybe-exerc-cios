export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';
export const ERROR_API = 'ERROR_API';

const requestApi = { type: REQUEST_API };

const responseApi = (response) => ({
  type: RESPONSE_API,
  payload: response,
})

export const errorApi = (error) => ({
  type: ERROR_API,
  payload: error,
})

export const fetchApi = (endpoint) => {
  return async (dispatch) => {
    dispatch(requestApi);
    try {
      const response = await fetch(`https://www.reddit.com/r/${endpoint}.json`);
      const data = await response.json();
      dispatch(responseApi(data.data.children));
    } catch (error) {
      dispatch(errorApi(error))
    }
  }
}
