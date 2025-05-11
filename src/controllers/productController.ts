import { ProductModel } from '@/models/productModel';

export const ProductController = {
  getProducts: async () => await ProductModel.getAll(),
  addProduct: async (data: any) => await ProductModel.create(data),
  deleteProduct: async (id: number) => await ProductModel.delete(id),
};
