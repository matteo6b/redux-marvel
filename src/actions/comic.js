import {GET_COMICS} from '../types';
import {API_URL,publicKey,hash} from './api';
export const getComics = () => dispatch => {
  return fetch(`${API_URL}?ts=${1}&apikey=${publicKey}&hash=${hash}`)
    .then(res => res.json())
    .then(resData => dispatch({type: GET_COMICS, payload: resData.data.results}))
}
