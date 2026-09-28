import { Link } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

export default function App() {
  const { session, profile, signOut } = UserAuth();

  const coreSectors = [
    {
      name: "Mining Division",
      code: "MIN-01",
      icon: "⛏️",
      role: "Raw Extraction",
      desc: "Iron Ore, Bauxite, Coal, Rare Earths. Foundation of every industrial line.",
      status: "Operational",
      efficiency: "96.4%",
    },
    {
      name: "Manufacturing",
      code: "MFG-02",
      icon: "⚙️",
      role: "Processing & Assembly",
      desc: "Steel smelting, engine fabrication, microchips, and precision industrial components.",
      status: "Active Queues",
      efficiency: "91.8%",
    },
    {
      name: "Logistics & Transport",
      code: "LOG-03",
      icon: "🚛",
      role: "Supply Chain",
      desc: "Fleet dispatch, node-to-node freight, automated warehouse intake and stock reserves.",
      status: "In Transit",
      efficiency: "98.2%",
    },
    {
      name: "Energy & Utilities",
      code: "ENG-04",
      icon: "⚡",
      role: "Power Grid",
      desc: "High-capacity turbines, substation distribution, and fuel consumption balancing.",
      status: "Nominal",
      efficiency: "99.1%",
    },
  ];

  const simulationPipeline = [
    { step: "01", sector: "Mining", item: "Iron Ore & Coal", verb: "Extracted at Mine Site A" },
    { step: "02", sector: "Smelting", item: "High-Grade Steel", verb: "Refined in Foundry" },
    { step: "03", sector: "Manufacturing", item: "Heavy Engines", verb: "Assembled via Line B" },
    { step: "04", sector: "Logistics / Market", item: "Global Delivery", verb: "Sold for Corporate Capital" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Ticker / Platform Telemetry */}
      <div className="bg-slate-900 border-b border-slate-800 text-[11px] font-mono py-1.5 px-4 sm:px-8 text-slate-400 flex items-center justify-between overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SIMULATION ENGINE: ONLINE
          </span>
          <span>MARKET INDEX: <strong className="text-slate-200">14,290.8 (+1.4%)</strong></span>
          <span>PERSISTENT WORLD: <strong className="text-slate-200">EPOCH 44</strong></span>
          <span>PRIMARY DB: <strong className="text-slate-200">POSTGRESQL RELATIONAL</strong></span>
        </div>
        <div className="text-slate-500 hidden md:block">
          BUILD → PRODUCE → CONNECT → TRADE → RESEARCH → EXPAND
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-black text-lg tracking-wider font-mono">
              A
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white uppercase">
                Altycoon
              </span>
              <span className="ml-2 text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                MMO Sim
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {session ? (
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  {profile?.username ? `@${profile.username}` : session?.user?.email}
                </span>
                <Link
                  to="/app"
                  className="px-4 py-2 text-xs font-mono font-semibold rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 uppercase tracking-wider transition-all shadow-sm shadow-cyan-500/20"
                >
                  Command Center
                </Link>
                <button
                  onClick={signOut}
                  className="px-3 py-2 text-xs font-mono rounded border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/signin"
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-xs font-mono font-semibold rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 uppercase tracking-wider transition-all shadow-sm shadow-cyan-500/20"
                >
                  Found Company
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section: Industrial Executive Console */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-slate-800 bg-radial-gradient from-slate-900 to-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                ONE COMPANY &bull; MULTIPLE SECTORS &bull; PERSISTENT ECONOMY
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Architect a Multi-Sector Industrial Conglomerate.
              </h1>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                Altycoon is a deep, UI-driven MMO economic simulation. Command your single enterprise across mining, manufacturing, energy, and logistics inside an interdependent player-driven marketplace.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to={session ? "/app" : "/signup"}
                  className="px-6 py-3 rounded font-mono text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/15"
                >
                  {session ? "Enter Command Center" : "Found Your Enterprise"}
                </Link>
                <Link
                  to={session ? "/app" : "/signin"}
                  className="px-6 py-3 rounded font-mono text-sm font-semibold border border-slate-700 hover:border-slate-600 bg-slate-900 hover:bg-slate-800 text-slate-300 transition-all uppercase tracking-wider"
                >
                  {session ? "Active Sectors" : "Corporate Login"}
                </Link>
              </div>

              {/* Core Philosophy Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 font-mono text-xs">
                <div>
                  <div className="text-slate-500 uppercase tracking-wider">Interface</div>
                  <div className="text-slate-200 font-bold mt-0.5">Data-Dense UI</div>
                  <div className="text-[11px] text-slate-400">Zero 3D filler</div>
                </div>
                <div>
                  <div className="text-slate-500 uppercase tracking-wider">Economy</div>
                  <div className="text-slate-200 font-bold mt-0.5">True Supply &amp; Demand</div>
                  <div className="text-[11px] text-slate-400">No arbitrary prints</div>
                </div>
                <div>
                  <div className="text-slate-500 uppercase tracking-wider">Progression</div>
                  <div className="text-slate-200 font-bold mt-0.5">1 Player : 1 Company</div>
                  <div className="text-[11px] text-slate-400">Multi-industry scale</div>
                </div>
              </div>
            </div>

            {/* Right: Mock Enterprise Console Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-lg border border-slate-800 bg-slate-900/90 shadow-2xl p-5 font-mono text-xs text-slate-300 space-y-4">
                {/* Console header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-slate-400 font-semibold ml-2">ZYRACX CORP (HQ-01)</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 rounded">
                    ACTIVE SESSIONS: 1,842
                  </span>
                </div>

                {/* KPI Metrics Strip */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-950 rounded border border-slate-800/80">
                    <div className="text-[10px] uppercase text-slate-500">Corporate Balance</div>
                    <div className="text-base font-bold text-emerald-400 mt-1">$4,892,150.00</div>
                    <div className="text-[10px] text-slate-400">+12.4% net margin</div>
                  </div>
                  <div className="p-3 bg-slate-950 rounded border border-slate-800/80">
                    <div className="text-[10px] uppercase text-slate-500">Operating Sectors</div>
                    <div className="text-base font-bold text-cyan-400 mt-1">4 Active Divisions</div>
                    <div className="text-[10px] text-slate-400">18 Production Nodes</div>
                  </div>
                </div>

                {/* Live Production Telemetry */}
                <div className="p-3 bg-slate-950 rounded border border-slate-800/80 space-y-2">
                  <div className="text-[10px] uppercase text-slate-400 font-bold flex justify-between">
                    <span>Active Telemetry</span>
                    <span className="text-cyan-400">100% Capacitated</span>
                  </div>

                  <div className="space-y-1.5">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300">Mine A4: Iron Ore Extraction</span>
                        <span className="text-slate-400">820 t / hr</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 h-full w-[88%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300">Foundry 02: Steel Beam Smelting</span>
                        <span className="text-slate-400">450 units / hr</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full w-[72%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pipeline Flow snippet */}
                <div className="text-[10px] text-slate-400 bg-slate-950/60 p-2.5 rounded border border-slate-800 flex items-center justify-between">
                  <span>LOGISTICS PIPELINE</span>
                  <span className="text-emerald-400 font-semibold">12 ACTIVE DISPATCH CONVOYS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Connected Supply Chain Philosophy */}
      <section className="py-16 border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
              The Connected Economy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Systems Interact. Nothing Exists in Isolation.
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Every extraction feeds a refinery. Every component builds a complex machine. Every excess unit flows onto an active player-to-player market.
            </p>
          </div>

          {/* Supply Chain Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {simulationPipeline.map((p) => (
              <div
                key={p.step}
                className="p-5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-colors relative"
              >
                <div className="text-2xl font-black font-mono text-slate-700 absolute top-4 right-4">
                  {p.step}
                </div>
                <div className="text-xs font-mono uppercase text-cyan-400 font-semibold">
                  {p.sector}
                </div>
                <div className="text-base font-bold text-white mt-1">
                  {p.item}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  {p.verb}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Sector Operations Grid */}
      <section className="py-16 border-b border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
                Conglomerate Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                One Company. Diversified Divisions.
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-md">
              Do not manage disconnected entities. Run your unified company while expanding into specialized departments as your research and capital grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreSectors.map((sector) => (
              <div
                key={sector.code}
                className="p-5 rounded-lg border border-slate-800 bg-slate-900 hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-2xl">{sector.icon}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {sector.code}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {sector.name}
                  </h3>
                  <div className="text-[11px] font-mono text-cyan-500 uppercase mt-0.5">
                    {sector.role}
                  </div>
                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                    {sector.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">Status: <strong className="text-slate-300">{sector.status}</strong></span>
                  <span className="text-emerald-400">{sector.efficiency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise-grade Simulation Specs */}
      <section className="py-16 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/60">
              <div className="font-mono text-cyan-400 text-xs font-bold uppercase mb-2">01 // Simulation Engine</div>
              <h3 className="text-lg font-bold text-white mb-2">Data-First Architecture</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every metric is backed by true production algorithms: factory capacity, worker efficiency, recipe consumption, energy requirements, and transport latency.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/60">
              <div className="font-mono text-cyan-400 text-xs font-bold uppercase mb-2">02 // Open Economy</div>
              <h3 className="text-lg font-bold text-white mb-2">Player-Driven Marketplace</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Buy and sell orders, historical price charts, corporate trade contracts, and freight routing. No magical price floors; real supply and demand.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/60">
              <div className="font-mono text-cyan-400 text-xs font-bold uppercase mb-2">03 // Deep Progression</div>
              <h3 className="text-lg font-bold text-white mb-2">Tech Tree &amp; Expansion</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Invest corporate research points into advanced recipes, upgraded mining dredges, automation lines, and new industrial branches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold font-mono">
              A
            </div>
            <div>
              <div className="font-bold text-white text-sm">ALTYCOON</div>
              <div className="text-[11px] text-slate-500">Persistent MMO Tycoon &amp; Economic Simulation</div>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
            <Link to="/signin" className="hover:text-cyan-400 transition-colors">
              Access Terminal
            </Link>
            <Link to="/signup" className="hover:text-cyan-400 transition-colors">
              Establish Company
            </Link>
            <Link to="/app" className="hover:text-cyan-400 transition-colors">
              Active Dashboard
            </Link>
          </div>

          <div className="text-slate-600 font-mono text-[11px]">
            &copy; {new Date().getFullYear()} Altycoon. All economic rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
