import prisma from '@/lib/db';

export const ProductModel = {
  getAll: () => prisma.product.findMany(),
  getById: (id: number) => prisma.product.findUnique({ where: { id } }),
  create: (data: any) => prisma.product.create({ data }),
  delete: (id: number) => prisma.product.delete({ where: { id } }),
};
