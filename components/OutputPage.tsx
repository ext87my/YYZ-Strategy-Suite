
import React, { useState, useMemo } from 'react';
import { Product, BattleStatus, MustWinBattle } from '../types';

type Tab = 'product' | 'financial' | 'battles' | 'market' | 'competitors' | 'deepResearch';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
    <h3 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-4">{title}</h3>
    {children}
  </div>
);

const DataPoint: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="mb-3">
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="text-md text-gray-800">{children}</p>
  </div>
);

const MockFinancialCharts: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-lg font-semibold text-center mb-4">Revenue: Past & Forecast ($M)</h4>
        <div className="flex justify-center p-4 bg-gray-50 rounded-lg">
           <img src="https://placehold.co/600x300/e9f5ff/1d4ed8?text=Revenue+Chart" alt="Mock Revenue Chart" className="max-w-full h-auto rounded-md shadow-sm" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-center mb-4">EBIT: Past & Forecast ($M)</h4>
         <div className="flex justify-center p-4 bg-gray-50 rounded-lg">
           <img src="https://placehold.co/600x300/e6f9f1/059669?text=EBIT+Chart" alt="Mock EBIT Chart" className="max-w-full h-auto rounded-md shadow-sm" />
        </div>
      </div>
    </div>
  );
};


const OutputPage: React.FC<{ product: Product }> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<Tab>('product');
  const [mwbFilter, setMwbFilter] = useState<BattleStatus | 'All'>('All');
  
  const filteredBattles = useMemo(() => {
    if (mwbFilter === 'All') return product.mustWinBattles;
    return product.mustWinBattles.filter(b => b.status === mwbFilter);
  }, [mwbFilter, product.mustWinBattles]);

  const getStatusColor = (status: BattleStatus) => {
    switch (status) {
      case BattleStatus.Success: return 'bg-green-100 text-green-800';
      case BattleStatus.Failed: return 'bg-red-100 text-red-800';
      case BattleStatus.InProgress: return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const TabButton: React.FC<{ tab: Tab; label: string }> = ({ tab, label }) => {
    const isActive = activeTab === tab;
    return (
      <button
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-3 font-semibold text-sm rounded-t-lg focus:outline-none transition-colors duration-200 border-b-2 ${
          isActive
            ? 'border-brand-blue-600 text-brand-blue-600'
            : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
        }`}
      >
        {label}
      </button>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'product':
        return (
          <InfoCard title="Product Information">
            <img src={product.productInfo.imageUrl} alt={product.productInfo.name} className="rounded-lg mb-4 w-full h-60 object-cover" />
            <DataPoint label="Product Name">{product.productInfo.name}</DataPoint>
            <DataPoint label="Business Unit">{product.productInfo.businessUnit}</DataPoint>
            <DataPoint label="Description">{product.productInfo.description}</DataPoint>
            <DataPoint label="Aspiration"><i className="text-gray-600">"{product.productInfo.aspiration}"</i></DataPoint>
          </InfoCard>
        );
      case 'financial':
        return (
          <InfoCard title="Financial Information">
            <MockFinancialCharts />
            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <p className="text-sm font-medium text-gray-500 mb-1">Description</p>
              <p className="text-md text-gray-800">{product.financialInfo.description}</p>
            </div>
          </InfoCard>
        );
      case 'battles':
        return (
          <InfoCard title="Must Win Battles">
            <div className="mb-4">
              <label htmlFor="mwb-filter" className="mr-2 font-medium">Filter by Status:</label>
              <select id="mwb-filter" value={mwbFilter} onChange={e => setMwbFilter(e.target.value as BattleStatus | 'All')} className="p-2 border rounded-md">
                <option value="All">All</option>
                {Object.values(BattleStatus).map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Title</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Sales Impact ($M)</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">EBIT Impact ($M)</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Target Date</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Responsible</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {filteredBattles.map(battle => (
                    <tr key={battle.id} className="border-b">
                      <td className="py-3 px-4 align-top">
                        <p className="font-medium text-sm text-gray-900">{battle.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{battle.description}</p>
                      </td>
                      <td className="py-3 px-4 align-top text-sm">{battle.salesImpact.toLocaleString()}</td>
                      <td className="py-3 px-4 align-top text-sm">{battle.ebitImpact.toLocaleString()}</td>
                      <td className="py-3 px-4 align-top text-sm">{battle.targetDate}</td>
                      <td className="py-3 px-4 align-top text-sm">{battle.responsible}</td>
                      <td className="py-3 px-4 align-top text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(battle.status)}`}>
                          {battle.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>
        );
      case 'market':
        return (
          <InfoCard title="Market Information">
            <DataPoint label="Market Definition">{product.marketInfo.definition}</DataPoint>
            <DataPoint label="Market Growth Potential">{product.marketInfo.growthPotential}</DataPoint>
            <div className="mt-6">
              <h4 className="text-md font-semibold text-gray-700 mb-2">Top Customers</h4>
              <ul className="divide-y">
                {product.marketInfo.topCustomers.map(c => (
                  <li key={c.id} className="py-2 flex justify-between">
                    <span className="font-medium">{c.name}</span>
                    <span className="text-gray-600">Sales: ${c.salesLastFY}M ({c.percentageOfTotal}%)</span>
                  </li>
                ))}
              </ul>
            </div>
          </InfoCard>
        );
      case 'competitors':
        return (
          <InfoCard title="Competitor Landscape">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left py-2 px-3 font-semibold">Competitor</th>
                    <th className="text-left py-2 px-3 font-semibold">Sales ($M)</th>
                    <th className="text-left py-2 px-3 font-semibold">Share (%)</th>
                    <th className="text-left py-2 px-3 font-semibold">Strategy</th>
                    <th className="text-left py-2 px-3 font-semibold">Latest Tactical Move</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {product.competitorLandscape.topCompetitors.map(c => (
                    <tr key={c.id} className="border-b">
                      <td className="py-2 px-3 align-top">
                        <p className="font-medium">{c.name}</p>
                        <p className="text-xs text-gray-500">{c.hqLocation}</p>
                      </td>
                      <td className="py-2 px-3 align-top">{c.sales.toLocaleString()}</td>
                      <td className="py-2 px-3 align-top">{c.marketShare}%</td>
                      <td className="py-2 px-3 align-top text-xs">{c.strategy}</td>
                      <td className="py-2 px-3 align-top text-xs">{c.latestMove}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>
        );
      case 'deepResearch':
        return (
            <InfoCard title="Deep Research & Analysis">
                <div className="p-4 mb-6 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
                    <p className="font-bold">Disclaimer</p>
                    <p className="text-sm">The information presented in this section is for demonstration purposes. In a real-world scenario, this would be generated by an advanced AI model for research and analysis. While we strive for accuracy, this content may contain inaccuracies or outdated information and should not be considered a substitute for professional strategic advice. Please verify critical information through independent sources.</p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Market & Segment Analysis ({product.productInfo.businessUnit})</h4>
                    <p className="text-sm text-gray-600">
                        The {product.productInfo.name} competes in the highly dynamic {product.productInfo.businessUnit} sector. Current analysis indicates a market shift towards products with enhanced AI capabilities, longer lifecycle support, and sustainable manufacturing processes. Consumer decision-making is increasingly influenced by ecosystem integration and data privacy features.
                    </p>
                </div>
                
                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Key Trends to Watch</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li><b>On-Device AI Processing:</b> Consumers expect faster, more private AI features running directly on hardware, reducing latency and reliance on the cloud.</li>
                        <li><b>Sustainability & Right-to-Repair:</b> Growing regulatory pressure and consumer demand are pushing manufacturers towards more sustainable materials and easier device repairability.</li>
                        <li><b>Advanced Biometric Integration:</b> For wearables and personal devices, the next frontier includes non-invasive sensors for metrics like blood glucose and hydration levels.</li>
                        <li><b>Cross-Platform Seamlessness:</b> The winning ecosystem will be the one that allows users to move effortlessly between phone, tablet, watch, and computer.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Interesting News & Links</h4>
                    <div className="space-y-3">
                        <a href="#" className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
                            <p className="font-semibold text-brand-blue-700">TechCrunch: The Race for the 5-Day Battery in Wearables Heats Up</p>
                            <p className="text-xs text-gray-500">A deep dive into the battery technology that could define the next generation of smartwatches.</p>
                        </a>
                         <a href="#" className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
                            <p className="font-semibold text-brand-blue-700">Bloomberg: Component Shortages Expected to Impact Q4 Smartphone Production</p>
                            <p className="text-xs text-gray-500">Analysts predict supply chain constraints will affect holiday season inventory for major players.</p>
                        </a>
                         <a href="#" className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
                            <p className="font-semibold text-brand-blue-700">The Verge: Is the Foldable Tablet the Future of Productivity?</p>
                            <p className="text-xs text-gray-500">Hands-on with the latest foldable devices that promise to replace your laptop.</p>
                        </a>
                    </div>
                </div>

            </InfoCard>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="bg-white shadow-sm rounded-t-lg">
        <nav className="flex space-x-2 px-4" aria-label="Tabs">
          <TabButton tab="product" label="Product Information" />
          <TabButton tab="financial" label="Financial Information" />
          <TabButton tab="battles" label="Must Win Battles" />
          <TabButton tab="market" label="Market Information" />
          <TabButton tab="competitors" label="Competitor Landscape" />
          <TabButton tab="deepResearch" label="Deep Research" />
        </nav>
      </div>
      <div className="mt-1">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default OutputPage;