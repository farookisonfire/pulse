import { TOGGLE_NAV_DRAWER } from '../features/nav/navActions';

export default (state = true, action) => {
  switch (action.type) {
    case TOGGLE_NAV_DRAWER:
      return !state;
    default:
      return state;
  }
};
