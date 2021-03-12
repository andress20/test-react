import {
  OFFER_DATA,
} from '../reducers/Offer.reducer'

export function setOfferData ( payload ) {
  return function ( dispatch ) {
    dispatch({ type: OFFER_DATA, payload })
  }
}
