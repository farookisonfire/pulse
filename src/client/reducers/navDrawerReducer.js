import { TOGGLE_NAV_DRAWER } from '../features/nav/navActions';

export default (state = true, action) => {
  console.log('action', action.type);
  switch (action.type) {
    case TOGGLE_NAV_DRAWER:
      return !state;
    default:
      return state;
  }
};
