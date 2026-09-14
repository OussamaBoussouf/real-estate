import { PropertyFilter } from '../types/property';

type PropertyFilterWithoutPage = Omit<PropertyFilter, 'page'>;

type FilterAction =
  | {
      type: 'UPDATE_FILTER';
      payload: Partial<PropertyFilterWithoutPage>;
    }
  | {
      type: 'UPDATE_PRICE';
      payload: [string, string];
    };

export const filterReducer = (
  state: PropertyFilterWithoutPage,
  action: FilterAction
): PropertyFilterWithoutPage => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return { ...state, ...action.payload };
    case 'UPDATE_PRICE':
      return {
        ...state,
        min_price: action.payload[0],
        max_price: action.payload[1],
      };
    default:
      return state;
  }
};
