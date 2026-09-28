import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import TopHeader from '../components/dashboard/TopHeader';
import { UserAuth } from '../context/AuthContext';

export default function AppLayout() {
  const { profile, user } = UserAuth();

  const username = profile?.username || user?.email?.split('@')[0] || 'ZYRACX';
  const companyName = `${username} Industries`;

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Fixed Left Sidebar */}
      <Sidebar companyLevel={18} currentExp={2340} maxExp={5000} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Sticky Top Header */}
        <TopHeader username={username} companyName={companyName} />

        {/* Scrollable Dashboard Body */}
        <main className="p-6 flex-1 overflow-y-auto max-w-[1700px] w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
