import { AnyAction } from 'redux';

export interface PayloadAction<Type, Payload> extends AnyAction {
  type: Type;
  payload: Payload;
}

export interface TriggerAction<Type> extends AnyAction {
  type: Type;
}

export interface MarketItem {
  uid: string;
  bsgId: string;
  name: string;
  shortName: string;
  price: number;
  basePrice: number;
  avg24hPrice: number;
  avg7daysPrice: number;
  traderName: string;
  traderPrice: number;
  traderPriceCur: string;
  updated: Date;
  slots: number;
  diff24h: number;
  diff7days: number;
  icon: string;
  link: string;
  wikiLink: string;
  img: string;
  imgBig: string;
  reference: string;
}

export enum StartViewActionTypes {
  GET_ITEMS = 'GET_ITEMS',
  GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS',
  GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE',

  SET_QUERY = 'SET_QUERY',
}

export type GetItemsRequestAction = PayloadAction<
  StartViewActionTypes.GET_ITEMS,
  string
>;

export type GetItemsSuccessAction = PayloadAction<
  StartViewActionTypes.GET_ITEMS_SUCCESS,
  MarketItem[]
>;
export type GetItemsFailureAction = PayloadAction<
  StartViewActionTypes.GET_ITEMS_FAILURE,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {}
>;
export type SetQueryAction = PayloadAction<
  StartViewActionTypes.SET_QUERY,
  string
>;

export const setQueryAction = (query: string): SetQueryAction => {
  return {
    type: StartViewActionTypes.SET_QUERY,
    payload: query
  };
};

export const getItemsRequestAction = (query: string): GetItemsRequestAction => {
  return {
    type: StartViewActionTypes.GET_ITEMS,
    payload: query,
  };
};

export const getItemsSuccessAction = (
  response: MarketItem[]
): GetItemsSuccessAction => {
  return {
    type: StartViewActionTypes.GET_ITEMS_SUCCESS,
    payload: response,
  };
};

export const getItemsFailureAction = (error: Error): GetItemsFailureAction => {
  return {
    type: StartViewActionTypes.GET_ITEMS_FAILURE,
    payload: error,
  };
};

export type StartViewActions =
  | GetItemsRequestAction
  | GetItemsSuccessAction
  | GetItemsFailureAction
  | SetQueryAction;
