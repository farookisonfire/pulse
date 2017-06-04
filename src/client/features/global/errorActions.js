import * as types from './errorActionTypes';

export function addError(err) {
  return {type: types.ADD_ERROR, err};
}