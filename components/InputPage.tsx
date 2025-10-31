
import React from 'react';
import { Product, MustWinBattle, BattleStatus, Customer, Competitor } from '../types';
import { COUNTRIES } from '../constants';
import { v4 as uuidv4 } from 'uuid';

interface InputPageProps {
  product: Product;
  onUpdate: (product: Product) => void;
}

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <input id={id} {...props} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500 sm:text-sm" />
  </div>
);

const TextareaField: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }> = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea id={id} {...props} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500 sm:text-sm" />
  </div>
);

const SelectField: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & { label: string, children: React.ReactNode }> = ({ label, id, children, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <select id={id} {...props} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500 sm:text-sm rounded-md">
      {children}
    </select>
  </div>
);

const Card: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4 mb-6">{title}</h2>
        {children}
    </div>
);

const InputPage: React.FC<InputPageProps> = ({ product, onUpdate }) => {

  const handleProductInfoChange = <K extends keyof Product['productInfo']>(field: K, value: Product['productInfo'][K]) => {
    onUpdate({ ...product, productInfo: { ...product.productInfo, [field]: value } });
  };

  const handleFinancialInfoChange = <K extends keyof Product['financialInfo']>(field: K, value: Product['financialInfo'][K]) => {
    onUpdate({ ...product, financialInfo: { ...product.financialInfo, [field]: value } });
  };
  
  const handleMarketInfoChange = <K extends keyof Product['marketInfo']>(field: K, value: Product['marketInfo'][K]) => {
    onUpdate({ ...product, marketInfo: { ...product.marketInfo, [field]: value } });
  };

  const handleCompetitorChange = (index: number, field: keyof Competitor, value: string | number) => {
    const updatedCompetitors = [...product.competitorLandscape.topCompetitors];
    updatedCompetitors[index] = { ...updatedCompetitors[index], [field]: value };
    onUpdate({ ...product, competitorLandscape: { topCompetitors: updatedCompetitors } });
  };
  
  const handleCustomerChange = (index: number, field: keyof Customer, value: string | number) => {
    const updatedCustomers = [...product.marketInfo.topCustomers];
    updatedCustomers[index] = { ...updatedCustomers[index], [field]: value };
    onUpdate({ ...product, marketInfo: { ...product.marketInfo, topCustomers: updatedCustomers } });
  };
  
  const handleBattleChange = (index: number, field: keyof MustWinBattle, value: string | number | BattleStatus) => {
    const updatedBattles = [...product.mustWinBattles];
    updatedBattles[index] = { ...updatedBattles[index], [field]: value };
    onUpdate({ ...product, mustWinBattles: updatedBattles });
  };

  const addBattle = () => {
    const newBattle: MustWinBattle = { id: uuidv4(), title: '', description: '', salesImpact: 0, ebitImpact: 0, targetDate: '', responsible: '', status: BattleStatus.InProgress };
    onUpdate({ ...product, mustWinBattles: [...product.mustWinBattles, newBattle] });
  };

  const removeBattle = (index: number) => {
    const updatedBattles = product.mustWinBattles.filter((_, i) => i !== index);
    onUpdate({ ...product, mustWinBattles: updatedBattles });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <Card title="Product Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Product Name" value={product.productInfo.name} onChange={e => handleProductInfoChange('name', e.target.value)} />
          <InputField label="Business Unit" value={product.productInfo.businessUnit} onChange={e => handleProductInfoChange('businessUnit', e.target.value)} />
          <div className="md:col-span-2">
            <TextareaField label="Product Description" rows={4} value={product.productInfo.description} onChange={e => handleProductInfoChange('description', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <TextareaField label="Aspiration (max 400 chars)" rows={4} maxLength={400} value={product.productInfo.aspiration} onChange={e => handleProductInfoChange('aspiration', e.target.value)} />
          </div>
        </div>
      </Card>

      <Card title="Financial Information">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-700 mb-2">Sales Revenue ($M)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {product.financialInfo.pastRevenue.map((rev, i) => (
                <InputField key={i} label={`Past Year ${i+1}`} type="number" value={rev} onChange={e => {
                  const newRevs = [...product.financialInfo.pastRevenue];
                  newRevs[i] = Number(e.target.value);
                  handleFinancialInfoChange('pastRevenue', newRevs);
                }} />
              ))}
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.financialInfo.forecastRevenue.map((forecast, i) => (
                <div key={i} className="p-4 border rounded-md space-y-2 bg-gray-50">
                   <h4 className="font-medium text-center">Forecast Year {i+1}</h4>
                   <InputField label="Conservative" type="number" value={forecast.conservative} onChange={e => {
                      const newForecasts = [...product.financialInfo.forecastRevenue];
                      newForecasts[i].conservative = Number(e.target.value);
                      handleFinancialInfoChange('forecastRevenue', newForecasts);
                   }}/>
                   <InputField label="Realistic" type="number" value={forecast.realistic} onChange={e => {
                      const newForecasts = [...product.financialInfo.forecastRevenue];
                      newForecasts[i].realistic = Number(e.target.value);
                      handleFinancialInfoChange('forecastRevenue', newForecasts);
                   }}/>
                   <InputField label="Ambitious" type="number" value={forecast.ambitious} onChange={e => {
                      const newForecasts = [...product.financialInfo.forecastRevenue];
                      newForecasts[i].ambitious = Number(e.target.value);
                      handleFinancialInfoChange('forecastRevenue', newForecasts);
                   }}/>
                </div>
              ))}
            </div>
          </div>
           <div>
            <h3 className="font-semibold text-lg text-gray-700 mb-2">EBIT ($M)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {product.financialInfo.pastEbit.map((ebit, i) => (
                <InputField key={i} label={`Past Year ${i+1}`} type="number" value={ebit} onChange={e => {
                  const newEbits = [...product.financialInfo.pastEbit];
                  newEbits[i] = Number(e.target.value);
                  handleFinancialInfoChange('pastEbit', newEbits);
                }} />
              ))}
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.financialInfo.forecastEbit.map((forecast, i) => (
                 <div key={i} className="p-4 border rounded-md space-y-2 bg-gray-50">
                   <h4 className="font-medium text-center">Forecast Year {i+1}</h4>
                   <InputField label="Conservative" type="number" value={forecast.conservative} onChange={e => {
                      const newForecasts = [...product.financialInfo.forecastEbit];
                      newForecasts[i].conservative = Number(e.target.value);
                      handleFinancialInfoChange('forecastEbit', newForecasts);
                   }}/>
                   <InputField label="Realistic" type="number" value={forecast.realistic} onChange={e => {
                      const newForecasts = [...product.financialInfo.forecastEbit];
                      newForecasts[i].realistic = Number(e.target.value);
                      handleFinancialInfoChange('forecastEbit', newForecasts);
                   }}/>
                   <InputField label="Ambitious" type="number" value={forecast.ambitious} onChange={e => {
                      const newForecasts = [...product.financialInfo.forecastEbit];
                      newForecasts[i].ambitious = Number(e.target.value);
                      handleFinancialInfoChange('forecastEbit', newForecasts);
                   }}/>
                </div>
              ))}
            </div>
          </div>
          <TextareaField label="Description of Revenue & EBIT (max 2000 chars)" rows={6} maxLength={2000} value={product.financialInfo.description} onChange={e => handleFinancialInfoChange('description', e.target.value)} />
        </div>
      </Card>
      
      <Card title="Must Win Battles">
        <div className="space-y-6">
          {product.mustWinBattles.map((battle, index) => (
            <div key={battle.id} className="p-4 border rounded-lg relative bg-gray-50">
              <button onClick={() => removeBattle(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">&times;</button>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="sm:col-span-2 lg:col-span-3">
                  <InputField label="Title" value={battle.title} onChange={e => handleBattleChange(index, 'title', e.target.value)} />
                </div>
                <div className="sm:col-span-2 lg:col-span-3">
                  <TextareaField label="Description (max 400 chars)" maxLength={400} rows={3} value={battle.description} onChange={e => handleBattleChange(index, 'description', e.target.value)} />
                </div>
                <InputField label="Sales Impact ($M)" type="number" value={battle.salesImpact} onChange={e => handleBattleChange(index, 'salesImpact', Number(e.target.value))} />
                <InputField label="EBIT Impact ($M)" type="number" value={battle.ebitImpact} onChange={e => handleBattleChange(index, 'ebitImpact', Number(e.target.value))} />
                <InputField label="Target Date" type="date" value={battle.targetDate} onChange={e => handleBattleChange(index, 'targetDate', e.target.value)} />
                <InputField label="Responsible By" value={battle.responsible} onChange={e => handleBattleChange(index, 'responsible', e.target.value)} />
                <SelectField label="Status" value={battle.status} onChange={e => handleBattleChange(index, 'status', e.target.value as BattleStatus)}>
                  {Object.values(BattleStatus).map(s => <option key={s} value={s}>{s}</option>)}
                </SelectField>
              </div>
            </div>
          ))}
          <button onClick={addBattle} className="px-4 py-2 bg-brand-blue-600 text-white rounded-md hover:bg-brand-blue-700">Add Must Win Battle</button>
        </div>
      </Card>
      
      <Card title="Market Information">
        <div className="space-y-6">
            <TextareaField label="Market Definition (max 200 chars)" maxLength={200} rows={2} value={product.marketInfo.definition} onChange={e => handleMarketInfoChange('definition', e.target.value)} />
            <TextareaField label="Market Growth Potential (max 1000 chars)" maxLength={1000} rows={5} value={product.marketInfo.growthPotential} onChange={e => handleMarketInfoChange('growthPotential', e.target.value)} />
             <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Top 3 Customers</h3>
                <div className="space-y-4">
                {product.marketInfo.topCustomers.map((customer, index) => (
                    <div key={customer.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-md bg-gray-50">
                        <InputField label="Name" value={customer.name} onChange={e => handleCustomerChange(index, 'name', e.target.value)} />
                        <InputField label="Sales Last FY ($M)" type="number" value={customer.salesLastFY} onChange={e => handleCustomerChange(index, 'salesLastFY', Number(e.target.value))} />
                        <InputField label="% of Total" type="number" value={customer.percentageOfTotal} onChange={e => handleCustomerChange(index, 'percentageOfTotal', Number(e.target.value))} />
                    </div>
                ))}
                </div>
            </div>
        </div>
      </Card>
      
      <Card title="Competitor Landscape">
        <div className="space-y-6">
            <h3 className="font-semibold text-lg text-gray-700 mb-2">Top 5 Competitors</h3>
            {product.competitorLandscape.topCompetitors.map((competitor, index) => (
                <div key={competitor.id} className="p-4 border rounded-lg bg-gray-50 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <InputField label="Competitor Name" value={competitor.name} onChange={e => handleCompetitorChange(index, 'name', e.target.value)} />
                        <SelectField label="HQ Location" value={competitor.hqLocation} onChange={e => handleCompetitorChange(index, 'hqLocation', e.target.value)}>
                            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </SelectField>
                        <InputField label="Sales ($M)" type="number" value={competitor.sales} onChange={e => handleCompetitorChange(index, 'sales', Number(e.target.value))} />
                        <InputField label="Market Share (%)" type="number" value={competitor.marketShare} onChange={e => handleCompetitorChange(index, 'marketShare', Number(e.target.value))} />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <TextareaField label="Strategy (max 400 chars)" maxLength={400} rows={3} value={competitor.strategy} onChange={e => handleCompetitorChange(index, 'strategy', e.target.value)} />
                        <TextareaField label="Latest Tactical Move (max 400 chars)" maxLength={400} rows={3} value={competitor.latestMove} onChange={e => handleCompetitorChange(index, 'latestMove', e.target.value)} />
                    </div>
                </div>
            ))}
        </div>
      </Card>
    </div>
  );
};

export default InputPage;
