'use client';

import { useEffect, useState } from 'react';

export default function InventoryPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [form, setForm] = useState({
    name: '',
    brand: '',
    size: '',
    price: '',
    quantity: '',
  });

  const fetchProducts = async () => {
    const res = await fetch('/api/product');
    const data = await res.json();
    setProducts(data);
  };

  const handleAdd = async () => {
    await fetch('/api/product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        size: parseInt(form.size),
        price: parseFloat(form.price),
        quantity: parseInt(form.quantity),
      }),
    });
    setForm({ name: '', brand: '', size: '', price: '', quantity: '' });
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {(['name', 'brand', 'size', 'price', 'quantity'] as const).map((key) => (
          <input
            key={key}
            className="border p-2 rounded"
            placeholder={key}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}
        <button
          onClick={handleAdd}
          className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>

      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Brand</th>
            <th className="border px-2 py-1">Size</th>
            <th className="border px-2 py-1">Price</th>
            <th className="border px-2 py-1">Qty</th>
            <th className="border px-2 py-1">Created</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border px-2 py-1">{p.name}</td>
              <td className="border px-2 py-1">{p.brand}</td>
              <td className="border px-2 py-1">{p.size}</td>
              <td className="border px-2 py-1">{p.price}</td>
              <td className="border px-2 py-1">{p.quantity}</td>
              <td className="border px-2 py-1">{new Date(p.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
