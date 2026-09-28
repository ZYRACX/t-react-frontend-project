import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from './Icons';

const navItems = [
  { name: 'Dashboard', icon: 'dashboard', path: '/app', hasSub: false },
  { name: 'Company', icon: 'company', path: '/app/company', hasSub: true },
  { name: 'Sectors', icon: 'sectors', path: '/app/sectors', hasSub: true },
  { name: 'Production', icon: 'production', path: '/app/production', hasSub: true },
  { name: 'Logistics', icon: 'logistics', path: '/app/logistics', hasSub: false },
  { name: 'Market', icon: 'market', path: '/app/market', hasSub: true },
  { name: 'Inventory', icon: 'inventory', path: '/app/inventory', hasSub: false },
  { name: 'Finance', icon: 'finance', path: '/app/finance', hasSub: false },
  { name: 'Research', icon: 'research', path: '/app/research', hasSub: false },
  { name: 'Employees', icon: 'employees', path: '/app/employees', hasSub: false },
  { name: 'Government', icon: 'government', path: '/app/government', hasSub: false },
  { name: 'Statistics', icon: 'statistics', path: '/app/statistics', hasSub: true },
  { name: 'Messages', icon: 'messages', path: '/app/messages', hasSub: false },
];

export default function Sidebar({ companyLevel = 18, currentExp = 2340, maxExp = 5000 }) {
  const expPercentage = Math.min(100, Math.round((currentExp / maxExp) * 100));

  return (
    <aside className="w-64 bg-[#0B101B] border-r border-[#1B2438] flex flex-col justify-between shrink-0 select-none h-screen sticky top-0">
      <div>
        {/* Brand Logo */}
        <div className="h-16 flex items-center px-6 gap-3 border-b border-[#141C2E]">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center font-black text-white text-lg tracking-wider shadow-lg shadow-indigo-600/30">
            ▲
          </div>
          <span className="font-extrabold text-xl tracking-wider text-white">ALTYCOON</span>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/app'}
              className={({ isActive }) =>
                `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-[#1E3A8A]/40 text-blue-400 border border-blue-500/30 shadow-sm shadow-blue-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#131B2E]'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Icon name={item.icon} className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>{item.name}</span>
              </div>
              {item.hasSub && (
                <Icon name="chevron-right" className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Company Level Card */}
      <div className="p-4 m-3 rounded-2xl bg-[#111827]/70 border border-[#1E293B]">
        <div className="flex justify-between items-baseline mb-1.5">
          <span className="text-xs text-slate-400 font-medium">Company Level</span>
          <span className="text-[11px] text-slate-500 font-mono">
            {currentExp.toLocaleString()} / {maxExp.toLocaleString()} XP
          </span>
        </div>
        <div className="text-2xl font-black text-white tracking-tight mb-2.5">{companyLevel}</div>
        <div className="w-full bg-[#1F293D] h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${expPercentage}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
