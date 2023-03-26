import { IProduct } from '../../interfaces/products/product';
import { api } from '../index';

export const getProducts = async () => {
  let data: IProduct[] | undefined;
  let error;
  let status;

  try {
    const res = await api.get(`/products`);
    data = res.data;
  } catch (err: any) {
    error = err.response.data;
    status = err.response.status;
  }

  return { data, error, status };
};
