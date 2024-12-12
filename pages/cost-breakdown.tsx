import { useState, useEffect } from 'react';

export default function CostBreakdownPage() {
  const [pricingData, setPricingData] = useState(null);

  useEffect(() => {
    fetch('/mockPricing.json')
      .then((res) => res.json())
      .then((data) => setPricingData(data))
      .catch((err) => console.error('Error fetching mock data:', err));
  }, []);

  if (!pricingData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render your table with pricingData */}
      <h1>Cost Breakdown</h1>
      <pre>{JSON.stringify(pricingData, null, 2)}</pre>
    </div>
  );
}


// export default function CostBreakdownPage() {
//   const [selectedService, setSelectedService] = useState<keyof typeof mockData>('Compute');
//   const [customDuration, setCustomDuration] = useState<number | null>(null);

//   const services = Object.keys(mockData);
//   const tableData = mockData[selectedService];

//   const calculateCustomCost = (minCost: number, duration: number) => {
//     const monthlyRate = (minCost / 12); // Assuming a linear cost distribution
//     return (monthlyRate * duration).toFixed(2);
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       {/* Sidebar */}
//       <aside style={{ width: '20%', backgroundColor: '#f8f9fa', padding: '20px' }}>
//         <h2>Services</h2>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {services.map((service) => (
//             <li key={service}>
//               <button
//                 onClick={() => setSelectedService(service as keyof typeof mockData)}
//                 style={{
//                   background: selectedService === service ? '#007bff' : '#fff',
//                   color: selectedService === service ? '#fff' : '#000',
//                   padding: '10px 15px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   margin: '5px 0',
//                   cursor: 'pointer',
//                   width: '100%',
//                   textAlign: 'left',
//                 }}
//               >
//                 {service}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Table Section */}
//       <main style={{ flex: 1, padding: '20px' }}>
//         <h1>{selectedService} Cost Breakdown</h1>
//         <div style={{ marginBottom: '20px' }}>
//           <label htmlFor="customDuration" style={{ marginRight: '10px' }}>Custom Duration (in months):</label>
//           <input
//             id="customDuration"
//             type="number"
//             value={customDuration || ''}
//             onChange={(e) => setCustomDuration(Number(e.target.value) || 0)}
//             style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
//           />
//         </div>
//         <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//           <thead>
//             <tr>
//               <th>Provider</th>
//               <th>Minimum Cost</th>
//               <th>Cost After 1 Month</th>
//               <th>Cost After 3 Months</th>
//               <th>Cost After 6 Months</th>
//               <th>Cost After 12 Months</th>
//               <th>Cost after {customDuration} months</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((row, index) => (
//               <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
//                 <td style={{ padding: '10px' }}>{row.provider}</td>
//                 <td style={{ padding: '10px' }}>${row.minCost}</td>
//                 <td style={{ padding: '10px' }}>${row.month1}</td>
//                 <td style={{ padding: '10px' }}>${row.month3}</td>
//                 <td style={{ padding: '10px' }}>${row.month6}</td>
//                 <td style={{ padding: '10px' }}>${row.month12}</td>
//                 <td style={{ padding: '10px' }}>
//                   {customDuration ? `$${calculateCustomCost(row.minCost, customDuration)}` : 'N/A'}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// }