export default function DashboardCards() {
  const data = [
    { title: "Yesterday's Sales & Profit", value: 'No Data' },
    { title: "Today's Sales & Profit", value: 'No Data' },
    { title: 'Monthly Sales', value: 'No Data' },
    { title: 'Annual Sales & Profit', value: 'Loading...' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <div key={item.title} className="bg-white rounded-lg shadow p-4">
          <h4 className="text-sm font-semibold text-gray-700">{item.title}</h4>
          <p className="text-lg mt-2">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
