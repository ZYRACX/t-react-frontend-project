import React, { useState } from 'react';
import { dashboardMockData } from '../../mock/dashboardData';
import { Icon } from '../../components/dashboard/Icons';

export default function Dashboard() {
  const [data] = useState(dashboardMockData);
  const [activeTab, setActiveTab] = useState('Production');

  const {
    company,
    sectors,
    productionOverview,
    financialOverview,
    inventorySummary,
    supplyChain,
    activeOperations,
    recentActivity,
    tasks,
    marketHighlights,
  } = data;

  return (
    <div className="space-y-6">
      {/* 1. TOP HERO COMPANY CARDS */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        {/* Company Identity Banner */}
        <div className="xl:col-span-4 bg-[#111726] border border-[#1E283F] rounded-2xl p-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-[#F0BB62] flex items-center justify-center shrink-0 shadow-md">
            {/* Custom stylized logo icon matching the X in screenshot */}
            <span className="text-[#131927] font-black text-3xl font-mono">𝕏</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-white truncate">{company.name}</h1>
              <button className="text-slate-400 hover:text-slate-200">
                <Icon name="edit" className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-2 truncate">{company.tagline}</p>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Level {company.level}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Reputation {company.reputation}
              </span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#182236] text-slate-300 border border-[#243350]">
                {company.type}
              </span>
            </div>
          </div>
        </div>

        {/* Total Assets Metric */}
        <div className="xl:col-span-2 bg-[#111726] border border-[#1E283F] rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#172238] border border-[#223354] flex items-center justify-center text-slate-300 shrink-0">
            <Icon name="inventory" className="w-5 h-5 text-slate-300" />
          </div>
          <div>
            <div className="text-[11px] text-slate-400 font-medium">Total Assets</div>
            <div className="text-sm font-bold text-white">{company.totalAssets}</div>
            <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5">
              <span>▲</span> {company.assetsChange}
            </div>
          </div>
        </div>

        {/* Monthly Profit Metric */}
        <div className="xl:col-span-2 bg-[#111726] border border-[#1E283F] rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <Icon name="finance" className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-slate-400 font-medium">Monthly Profit</div>
            <div className="text-sm font-bold text-white">{company.monthlyProfit}</div>
            <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5">
              <span>▲</span> {company.profitChange}
            </div>
          </div>
        </div>

        {/* Employees Metric */}
        <div className="xl:col-span-2 bg-[#111726] border border-[#1E283F] rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
            <Icon name="employees" className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-slate-400 font-medium">Employees</div>
            <div className="text-sm font-bold text-white">{company.employees}</div>
            <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5">
              <span>▲</span> {company.employeesChange}
            </div>
          </div>
        </div>

        {/* City Skyline & Company Profile Button */}
        <div className="xl:col-span-2 relative rounded-2xl overflow-hidden border border-[#1E283F] min-h-[82px] flex items-center justify-center group">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=400&q=80"
            alt="City view"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <button className="relative z-10 flex items-center gap-2 px-3 py-1.5 bg-blue-600/90 hover:bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-900/40 border border-blue-400/30 transition-all">
            <span>Company Profile</span>
            <Icon name="arrow-right" className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. SECTORS CAROUSEL / ROW */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white tracking-wide">Sectors</h2>
          <button className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 font-medium">
            <span>Manage Sectors</span>
            <Icon name="arrow-right" className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="group relative rounded-2xl border border-[#1E283F] overflow-hidden bg-[#111726] flex flex-col justify-between h-40 hover:border-[#2D3E63] transition-all cursor-pointer"
            >
              {/* Card Background Image preview with overlay */}
              <div className="h-16 relative overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover brightness-60 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111726]" />
              </div>

              {/* Bottom Card Content */}
              <div className="p-3 relative -mt-4 flex flex-col flex-1 justify-between">
                <div className="flex items-start gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${sector.iconBg}`}>
                    <Icon name={sector.icon} className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">{sector.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">Lv. {sector.level}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#1C263D] mt-2 text-[10px]">
                  <span className="text-slate-400">{sector.stat}</span>
                  <div className="flex items-center gap-1">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        sector.statusType === 'green' ? 'bg-emerald-400 animate-pulse' : 'bg-blue-400'
                      }`}
                    />
                    <span className={sector.statusType === 'green' ? 'text-emerald-400' : 'text-blue-400'}>
                      {sector.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Unlock Sector Slot */}
          <div className="rounded-2xl border border-dashed border-[#232F4A] hover:border-slate-500 bg-[#0E1322]/50 flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-colors group">
            <div className="w-8 h-8 rounded-full bg-[#182136] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors mb-2">
              <Icon name="plus" className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-200 mb-1">Unlock Sector</span>
            <span className="text-[10px] text-slate-500 leading-tight">Requires Company Level 25</span>
          </div>
        </div>
      </div>

      {/* 3. TRIPLE COLUMN: PRODUCTION OVERVIEW | FINANCIAL OVERVIEW | INVENTORY SUMMARY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Production Overview */}
        <div className="lg:col-span-4 bg-[#111726] border border-[#1E283F] rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-white tracking-wide">Production Overview</h3>
              <select className="bg-[#162035] text-slate-300 border border-[#233150] rounded-lg text-[10px] px-2 py-1 focus:outline-none">
                <option>This Month</option>
                <option>This Week</option>
              </select>
            </div>

            <div className="space-y-3.5">
              {productionOverview.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 w-28 shrink-0">
                    <span className="text-base">{item.icon}</span>
                    <span className="text-slate-300 font-medium truncate">{item.name}</span>
                  </div>

                  <div className="flex-1 mx-3">
                    <div className="w-full bg-[#1C263D] h-2 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                    </div>
                  </div>

                  <div className="w-24 text-right font-mono text-[11px] text-slate-300 shrink-0">
                    {item.current} / {item.capacity}
                  </div>

                  <div
                    className={`w-10 text-right text-[10px] font-bold shrink-0 ${
                      item.trendUp ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {item.trendVal} {item.trendUp ? '▲' : '▼'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financial Overview (Metrics + Interactive SVG Graph) */}
        <div className="lg:col-span-5 bg-[#111726] border border-[#1E283F] rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-white tracking-wide">Financial Overview</h3>
              <select className="bg-[#162035] text-slate-300 border border-[#233150] rounded-lg text-[10px] px-2 py-1 focus:outline-none">
                <option>This Month</option>
                <option>This Quarter</option>
              </select>
            </div>

            {/* Metric row */}
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-[#1A2338] mb-3">
              <div>
                <span className="text-[10px] text-slate-400 font-medium block">Revenue</span>
                <span className="text-xs font-bold text-white">{financialOverview.revenue}</span>
                <span className="text-[10px] text-emerald-400 font-semibold block">▲ {financialOverview.revenueChange}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-medium block">Expenses</span>
                <span className="text-xs font-bold text-white">{financialOverview.expenses}</span>
                <span className="text-[10px] text-rose-400 font-semibold block">▼ {financialOverview.expensesChange}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-medium block">Profit</span>
                <span className="text-xs font-bold text-emerald-400">{financialOverview.profit}</span>
                <span className="text-[10px] text-emerald-400 font-semibold block">▲ {financialOverview.profitChange}</span>
              </div>
            </div>

            {/* SVG Trend Chart */}
            <div className="relative pt-2">
              <div className="h-28 w-full flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 90" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal grid lines */}
                  <line x1="0" y1="15" x2="300" y2="15" stroke="#1F2A42" strokeDasharray="3 3" />
                  <line x1="0" y1="45" x2="300" y2="45" stroke="#1F2A42" strokeDasharray="3 3" />
                  <line x1="0" y1="75" x2="300" y2="75" stroke="#1F2A42" strokeDasharray="3 3" />

                  {/* Expenses curve (Red) */}
                  <path
                    d="M 10,75 C 60,70 120,60 180,68 C 240,60 280,55 295,52"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="2"
                  />

                  {/* Revenue curve (Blue with fill) */}
                  <path
                    d="M 10,65 Q 60,60 110,50 T 210,32 T 295,15"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M 10,65 Q 60,60 110,50 T 210,32 T 295,15 L 295,90 L 10,90 Z"
                    fill="url(#blueGradient)"
                  />
                </svg>
              </div>

              {/* Chart Date Labels and Legend */}
              <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono mt-1">
                <span>Apr 1</span>
                <span>Apr 8</span>
                <span>Apr 15</span>
                <span>Apr 22</span>
                <span>Apr 30</span>
              </div>
              <div className="flex items-center justify-end gap-3 text-[10px] mt-2">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> Revenue
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span> Expenses
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Summary */}
        <div className="lg:col-span-3 bg-[#111726] border border-[#1E283F] rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-white tracking-wide">Inventory Summary</h3>
              <button className="text-slate-400 hover:text-white">
                <Icon name="chevron-right" className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2">
              {inventorySummary.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between py-1 border-b border-[#182337] last:border-none text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-slate-300 text-[11px]">{item.name}</span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-slate-200">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-3 py-2 bg-[#162035] hover:bg-[#1E2C4A] text-slate-300 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[#233150]">
            <span>View Inventory</span>
            <Icon name="arrow-right" className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* 4. SUPPLY CHAIN FLOW */}
      <div className="bg-[#111726] border border-[#1E283F] rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-white tracking-wide">Supply Chain Flow</h3>
          <button className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 font-medium">
            <span>View Details</span>
            <Icon name="arrow-right" className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
          {supplyChain.map((node, index) => (
            <React.Fragment key={node.title}>
              <div
                className={`flex-1 min-w-[150px] p-3 rounded-xl border flex items-center gap-3 bg-[#131A2B] ${node.border}`}
              >
                <div className="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center shrink-0">
                  <Icon name={node.icon} className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">{node.title}</div>
                  <div className="text-[10px] text-slate-400 truncate">{node.subtitle}</div>
                  <div className="text-[10px] font-mono font-semibold mt-0.5">{node.throughput}</div>
                </div>
              </div>

              {index < supplyChain.length - 1 && (
                <div className="text-slate-600 px-1 shrink-0">
                  <Icon name="arrow-right" className="w-4 h-4 text-slate-500" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 5. BOTTOM 3 COLUMNS: ACTIVE OPERATIONS | RECENT ACTIVITY & TASKS | MARKET HIGHLIGHTS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Active Operations Table */}
        <div className="lg:col-span-5 bg-[#111726] border border-[#1E283F] rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-bold text-white tracking-wide">Active Operations</h3>
                <div className="flex bg-[#162035] rounded-lg p-0.5 border border-[#212E48]">
                  {['Production', 'Logistics', 'Research', 'Construction'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-[10px] px-2 py-0.5 rounded-md font-medium transition-all ${
                        activeTab === tab ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <button className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 font-medium">
                <span>View All</span>
                <Icon name="arrow-right" className="w-3 h-3" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-slate-400 text-[10px] border-b border-[#1E2940]">
                    <th className="pb-2 font-medium">Operation</th>
                    <th className="pb-2 font-medium">Sector</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Progress</th>
                    <th className="pb-2 font-medium text-right">Time Left</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#172238]">
                  {activeOperations.map((op, idx) => (
                    <tr key={idx} className="hover:bg-[#141C2E]/60 transition-colors">
                      <td className="py-2.5 font-medium text-slate-200 text-xs">{op.operation}</td>
                      <td className="py-2.5 text-slate-400 text-[11px]">{op.sector}</td>
                      <td className="py-2.5">
                        <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          {op.status}
                        </span>
                      </td>
                      <td className="py-2.5 w-24">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-[#1F2B45] h-1.5 rounded-full overflow-hidden">
                            <div className="bg-blue-500 h-full rounded-full" style={{ width: `${op.progress}%` }} />
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">{op.progress}%</span>
                        </div>
                      </td>
                      <td className="py-2.5 text-right font-mono text-[11px] text-slate-400">{op.timeLeft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Middle Column: Recent Activity & Tasks */}
        <div className="lg:col-span-4 space-y-4">
          {/* Recent Activity */}
          <div className="bg-[#111726] border border-[#1E283F] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-white tracking-wide">Recent Activity</h3>
              <button className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 font-medium">
                <span>View All</span>
                <Icon name="arrow-right" className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2.5">
              {recentActivity.map((act, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md shrink-0 ${act.badgeBg}`}>
                      {act.type}
                    </span>
                    <span className="text-slate-300 truncate text-[11px]">{act.text}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-2">{act.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-[#111726] border border-[#1E283F] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-white tracking-wide">Tasks</h3>
              <button className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 font-medium">
                <span>View All</span>
                <Icon name="arrow-right" className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2.5">
              {tasks.map((task, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <input
                      type="checkbox"
                      className="rounded border-[#293856] bg-[#141C2E] text-blue-600 focus:ring-0 w-3.5 h-3.5"
                    />
                    <span className="text-slate-300 text-[11px] truncate">{task.name}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span className="text-[10px] text-slate-400 font-mono">{task.timeLeft}</span>
                    <div className="w-12 bg-[#1F2B45] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: `${task.progress}%` }} />
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono w-6 text-right">{task.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Highlights */}
        <div className="lg:col-span-3 bg-[#111726] border border-[#1E283F] rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-white tracking-wide">Market Highlights</h3>
              <button className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 font-medium">
                <span>View Market</span>
                <Icon name="arrow-right" className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-3">
              {marketHighlights.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs py-1 border-b border-[#182337] last:border-none">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300 text-[11px] font-medium">{item.name}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-slate-200 font-semibold text-[11px]">{item.price}</span>
                    <span
                      className={`text-[10px] font-semibold flex items-center ${
                        item.up ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {item.change}
                    </span>
                    {/* Mini Sparkline SVG */}
                    <div className="w-12 h-4">
                      <svg className="w-full h-full" viewBox="0 0 50 16">
                        <polyline
                          fill="none"
                          stroke={item.up ? '#10B981' : '#EF4444'}
                          strokeWidth="1.5"
                          points={item.trend.map((val, i) => `${i * 10},${35 - val * 0.5}`).join(' ')}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
