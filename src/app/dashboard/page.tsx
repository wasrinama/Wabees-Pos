import Sidebar from '../dashboard/components/Sidebar';
import DashboardCards from '../dashboard/components/DashboardCards';
import MonthlyChart from '../dashboard/components/MonthlyChart';
import DonutChart from '../dashboard/components/DonutChart';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <DashboardCards />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MonthlyChart />
          <DonutChart />
        </div>
      </main>
    </div>
  );
}
