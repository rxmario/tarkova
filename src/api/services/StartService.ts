import { HTTPResponse, request } from '../axios';
import { MarketItem } from '../../components/start/actions/Start.actions';

const fetchAll = (): Promise<HTTPResponse<MarketItem[]>> => {
  return request<MarketItem[]>({
    url: '/items/all?x-api-key=fFfyWwTACSsP7DHM',
    method: 'GET',
  });
};

const getItems = (query: string): Promise<HTTPResponse<MarketItem[]>> => {
  return request<MarketItem[]>({
    url: `item?q=${query}&x-api-key=fFfyWwTACSsP7DHM`,
    method: 'GET',
  });
};

interface Service {
  fetchAll: () => Promise<HTTPResponse<MarketItem[]>>;
  getItems: (query: string) => Promise<HTTPResponse<MarketItem[]>>;
}

// eslint-disable-next-line import/prefer-default-export
export const StartService: Service = {
  fetchAll,
  getItems,
};
