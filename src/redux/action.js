import types from './types';
import { v4 as uuidv4 } from 'uuid';

const addContact = contact => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    ...contact,
  },
});

const removeContact = id => ({
  type: types.REMOVE,
  payload: id,
});

const changedFilter = value => ({
  type: types.FILTER_CHANGED,
  payload: value,
});

export default { addContact, removeContact, changedFilter };
