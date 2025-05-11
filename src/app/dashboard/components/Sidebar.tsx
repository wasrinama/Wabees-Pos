'use client';
import { useState } from 'react';
import { HomeIcon, ChartBarIcon, UserGroupIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'Dashboard', icon: HomeIcon },
  { name: 'Invoice', icon: ArchiveBoxIcon },
  { name: 'Customers', icon: UserGroupIcon },
  { name: 'Reports', icon: ChartBarIcon },
];

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard');

  return (
    <aside className="w-64 bg-white h-screen border-r shadow-sm">
      <div className="text-2xl font-bold text-center py-6 text-purple-600">Wabees POS</div>
      <nav className="space-y-2 px-4">
        {menuItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`flex items-center gap-3 w-full p-2 rounded-md hover:bg-purple-100 ${
              active === name ? 'bg-purple-200 text-purple-800' : ''
            }`}
          >
            <Icon className="w-5 h-5" />
            {name}
          </button>
        ))}
      </nav>
    </aside>
  );
}
