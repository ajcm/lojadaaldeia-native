
import {
  ADD_ADDRESS
} from '../constants/account';

const initialSessionState = {
  cards: [],
  addresses: [
    { id: 1, contactName: 'Vitor', phone: '+353870000000', address1: 'apt 123', address2: 'street xpto', city: 'Ermezinde', zipCode: '220-7400' }
  ]
};

export default function account(prevState = initialSessionState, action) {
  switch(action.type) {
    case ADD_ADDRESS:
      // TODO: to be removed
      const id = Math.max(prevState.addresses.map(a => a.id)) + 1;
      // TODO: to be removed
      const addAddressState = {
        ...prevState,
        addresses: prevState.addresses.concat([{id, ...action.address}])
      };
      return addAddressState;
    default:
      return prevState;
  }
};
