import Status from '../../../core/Status';

export interface StartProps {
  query: string;
  items: [];
  status: Status;
  error: string;
  getItems: () => void;
}

export interface StartDispatchProps {
  getItems: () => void;
}

export interface StartViewStateProps {
  items: [];
  getItems: () => void;
}
