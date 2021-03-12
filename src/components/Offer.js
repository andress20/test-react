import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOfferData } from '../store/actions/Offer.actions'
import Characteristics from '../components/Characteristics'

function Offer () {

  const [name, setName] = useState('')

  const dispatch = useDispatch()
  const { data, idOffer } = useSelector(
    ({offerReducer: {
      ...state
    }}) => {
      return {
        ...state
      }
  })

  const currentId = (n) => {
    for(let i=0; i<data.length; i++) {
      if(data[i].id === n){
        return data[i].versions[0]
      }
    }
  }

  const handleChange = (e) => {
    const { value } = e.target
    dispatch(setOfferData(value))
    setName(currentId(value).name)

  }

  return (
    <>
    <form display="grid" id="Form_offer">
      <select
        className="Form__idOffer"
        name="select_id"
        id="select_id"
        form="Form_offer"
        onChange={ handleChange }
        required
      >
        { !!data && data.length > 0 && data.map((e, i) => {
          return (
            <option key={e.id} value={e.id}>{i+1}</option>)}
          )
        }
      </select> 
      <label htmlFor="id">
        ID Oferta
      </label>
      <input 
        id="id"
        name="id"
        type="text"
        readOnly
        value={idOffer}
      />
      <label htmlFor="name">
        Nombre
      </label>
      <input
        id="name"
        name="name"
        type="text"
        readOnly
        value={name}
      />
    </form>
      <Characteristics />
    </>

  )
}

export default Offer
