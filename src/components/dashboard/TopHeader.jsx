import React from 'react';
import { Icon } from './Icons';

export default function TopHeader({ username = 'ZYRACX', companyName = 'ZYRACX Industries' }) {
  return (
    <header className="h-16 border-b border-[#1B2438] bg-[#0E1322] px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Search Input */}
      <div className="relative w-80">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Icon name="search" className="w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="Search buildings, items, market..."
          className="w-full bg-[#141B2D] border border-[#222E49] rounded-xl pl-10 pr-10 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <kbd className="text-[10px] text-slate-400 bg-[#1D273F] border border-[#2B3B5E] px-1.5 py-0.5 rounded font-mono">/</kbd>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-5">
        {/* Game Clock */}
        <div className="flex items-center gap-2.5 text-slate-300 bg-[#141B2D]/70 border border-[#202B45] px-3 py-1.5 rounded-xl">
          <Icon name="clock" className="w-4 h-4 text-slate-400" />
          <div className="text-right leading-tight">
            <div className="text-xs font-semibold text-slate-200">12 May 2030</div>
            <div className="text-[10px] text-slate-400 font-mono">Tue, 14:32</div>
          </div>
        </div>

        {/* Weather Indicator */}
        <button
          title="Weather: Clear & Sunny"
          className="p-2 rounded-xl text-amber-400 bg-[#141B2D]/70 border border-[#202B45] hover:bg-[#1D273F] transition-colors"
        >
          <Icon name="sun" className="w-4 h-4" />
        </button>

        {/* Notification Bell with Badge */}
        <div className="relative">
          <button className="p-2 rounded-xl text-slate-300 bg-[#141B2D]/70 border border-[#202B45] hover:bg-[#1D273F] transition-colors">
            <Icon name="bell" className="w-4 h-4" />
          </button>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#0E1322]">
            1
          </span>
        </div>

        {/* User / Company Profile Capsule */}
        <div className="flex items-center gap-3 pl-3 border-l border-[#1D283E]">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-yellow-400 p-[1.5px] shadow-sm">
            <div className="w-full h-full rounded-full bg-[#121828] flex items-center justify-center font-bold text-xs text-amber-300 overflow-hidden">
              {username.slice(0, 2).toUpperCase()}
            </div>
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-slate-100 leading-tight">{username}</div>
            <div className="text-[10px] text-slate-400">{companyName}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
