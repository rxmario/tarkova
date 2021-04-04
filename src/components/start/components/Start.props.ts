import Status from '../../../core/Status';
import { MarketItem } from '../actions/Start.actions';

export interface StartProps {
  query: string;
  items: MarketItem[];
  searchResults: MarketItem[];
  status: Status;
  error: string;
  setQuery: (query: string) => void;
  getItems: (query: string) => void;
}

export interface StartDispatchProps {
  setQuery: (query: string) => void;
  getItems: (query: string) => void;
}

export interface StartViewStateProps {
  items: [];
  searchResults: MarketItem[];
  setQuery: (query: string) => void;
  getItems: (query: string) => void;
}
