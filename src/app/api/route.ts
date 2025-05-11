import { NextResponse } from 'next/server';
import { ProductController } from '@/controllers/productController';

export async function GET() {
  const products = await ProductController.getProducts();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newProduct = await ProductController.addProduct(body);
  return NextResponse.json(newProduct);
}
