import data from '../../data/ofertas.json'

export const OFFER_DATA = 'OFFER_DATA'

export const initialState = {
  data,
  idOffer: 'valor inicial'
}

export function offerReducer (state = initialState, action ) {
  switch (action.type) {
    case OFFER_DATA:
      return {
        ...state,
        idOffer: action.payload
      }
    default:
      return state
  }

}
