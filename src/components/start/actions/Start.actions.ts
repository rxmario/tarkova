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
}

export type GetItemsRequestAction = TriggerAction<
  StartViewActionTypes.GET_ITEMS
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

export const getItemsRequestAction = (): GetItemsRequestAction => {
  return {
    type: StartViewActionTypes.GET_ITEMS,
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
  | GetItemsFailureAction;