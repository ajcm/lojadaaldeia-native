
import {
  ADD_ADDRESS
} from '../constants/account';

const initialSessionState = {
  cards: [],
  addresses: [
    { id: 1, contactName: 'Vitor', phone: '+353870000000', address1: 'apt 123', address2: 'street xpto', city: 'Ermezinde', state: 'Nuorte', zipCode: '220-7400', country: 'Portugal' }
  ]
};

export default function account(prevState = initialSessionState, action) {
  switch(action.type) {
    case ADD_ADDRESS:
      const addAddressState = {
        ...state,
        items: [...prevState.items, action.address]
      };
      return addAddressState;
    default:
      return prevState;
  }
};
