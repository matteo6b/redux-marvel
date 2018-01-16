
import {GET_COMICS} from '../types'

const comicReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_COMICS:
        return payload
      default:
        return state
    }
}

export default comicReducer
