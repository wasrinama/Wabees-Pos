"use client";
import { useState } from 'react';
import { Input } from './components/ui/input'
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { Barcode, Trash2, PlusCircle, CreditCard, DollarSign, XCircle } from 'lucide-react';

export default function POSBillingPage() {
  const [productCode, setProductCode] = useState('');
  const [products, setProducts] = useState<any[]>([]);

  const handleScanOrAdd = () => {
    if (!productCode) return;
    const fakeProduct = {
      code: productCode,
      name: `Product ${productCode}`,
      qty: 1,
      price: 2500,
      discount: 0,
    };
    setProducts([...products, fakeProduct]);
    setProductCode('');
  };

  const handleRemove = (index: number) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  const totalAmount = products.reduce(
    (sum, p) => sum + (p.price - p.discount) * p.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-700">Wabees Shoe Palace - POS Billing</h1>
          <span className="text-sm text-gray-500">{new Date().toLocaleString()}</span>
        </div>

        <div className="flex gap-4 items-end mb-6">
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-600">Scan or Enter Product Code</label>
            <Input
              placeholder="Enter barcode or product code"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              className="mt-1"
            />
          </div>
          <Button onClick={handleScanOrAdd} className="gap-2">
            <Barcode size={18} /> Add Product
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Qty</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center text-gray-400">
                      No products added
                    </TableCell>
                  </TableRow>
                ) : (
                  products.map((p, i) => (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{p.code}</TableCell>
                      <TableCell>{p.name}</TableCell>
                      <TableCell>{p.qty}</TableCell>
                      <TableCell>Rs. {p.price}</TableCell>
                      <TableCell>Rs. {p.discount}</TableCell>
                      <TableCell>Rs. {(p.price - p.discount) * p.qty}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" onClick={() => handleRemove(i)}>
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Button variant="outline" className="gap-2">
              <DollarSign size={18} /> Cash Pay
            </Button>
            <Button variant="outline" className="gap-2">
              <CreditCard size={18} /> Credit
            </Button>
            <Button variant="destructive" className="gap-2">
              <XCircle size={18} /> Clear
            </Button>
          </div>

          <div className="text-right">
            <div className="text-lg font-semibold text-gray-700">Total: Rs. {totalAmount}</div>
            <div className="text-sm text-gray-500">Thank you for shopping with us!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
