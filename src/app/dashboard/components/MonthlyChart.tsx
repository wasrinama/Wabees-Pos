'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'May', sales: 4000, expenses: 2400, return: 1200 },
  { month: 'June', sales: 3000, expenses: 1398, return: 1000 },
  { month: 'July', sales: 5000, expenses: 2000, return: 800 },
  { month: 'August', sales: 8000, expenses: 4000, return: 1500 },
  { month: 'September', sales: 2000, expenses: 1000, return: 500 },
  { month: 'October', sales: 6000, expenses: 2500, return: 1800 },
];

export default function MonthlyChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Past 6 Months Sales</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#4ade80" />
          <Bar dataKey="expenses" fill="#f87171" />
          <Bar dataKey="return" fill="#facc15" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
