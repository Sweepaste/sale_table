import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  
  let data = [
    {
      region: "US",
      model: "A",
      sales: 150
    },
    {
      region: "US",
      model: "B",
      sales: 120
    },
    {
      region: "US",
      model: "C",
      sales: 350
    },
    {
      region: "EU",
      model: "A",
      sales: 200
    },
    {
      region: "EU",
      model: "B",
      sales: 100
    },
    {
      region: "EU",
      model: "C",
      sales: 250
    },
    {
      region: "CA",
      model: "A",
      sales: 200
    },
    {
      region: "CA",
      model: "B",
      sales: 100
    },
    {
      region: "CA",
      model: "C",
      sales: 230
    },
    {
      region: "CA",
      model: "D",
      sales: 400
    }
  ];

  const calculate = (data) => {
    let res = [];
    let sumSale = data[0].sales;
    let startIndex = 0;
    for (let i = 1; i < data.length; i++){
      if ( data[i].region !== data[i - 1].region) {
        res.push({ region: data[i - 1].region, model: "sum", sales: sumSale });
        res=res.concat(data.slice(startIndex,i));
        sumSale = data[i].sales;
        startIndex = i;
      }
      else if (i === data.length - 1) {
        sumSale += data[i].sales;
        res.push({ region: data[i - 1].region, model: "sum", sales: sumSale });
        res = res.concat(data.slice(startIndex, i + 1));
      }
      else if (i < data.length) {
        sumSale += data[i].sales;
      }
    }
    return res;
  }  
  const [displayData, setDisplayDate] = useState(calculate(data));
  return (
    <div className="App">
      <table className="sales_table">
        <thead>
          <tr>
            <th>region</th>
            <th>model</th>
            <th>sales</th>
          </tr>
        </thead>
          <tbody>
            {
              displayData.map((val, idx) => {
                return <tr key={idx}>
                  <td>{val.region}</td>
                  <td>{val.model}</td>
                  <td>{val.sales}</td>
                </tr>
              })
            }
          </tbody>
        
      </table>
    </div>
  )
  
}

export default App;
