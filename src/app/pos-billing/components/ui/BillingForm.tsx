export default function BillingForm() {
  return (
    <div className="pos-card p-4 space-y-4">
      <h2 className="text-xl font-semibold">Create Invoice</h2>
      <input type="text" placeholder="Search item..." className="pos-input w-full" />
      <div className="flex gap-4">
        <input type="number" placeholder="Qty" className="pos-input" />
        <input type="text" placeholder="Rate" className="pos-input" />
        <input type="text" placeholder="Discount" className="pos-input" />
      </div>
      <button className="pos-button bg-blue-600 text-white">Add to Bill</button>
      <hr />
      <div className="space-y-2">
        <p className="text-sm">Total: ₹0.00</p>
        <button className="pos-button bg-green-600 text-white">Print Bill</button>
      </div>
    </div>
  );
}