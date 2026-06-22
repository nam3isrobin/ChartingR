import React, { useEffect } from 'react';
import { ChartGpu } from 'chartgpu';

// Generate mock candle data
function generateMockData(count = 100) {
  const data = [];
  let timestamp = Date.now();
  let price = 100;
  for (let i = 0; i < count; i++) {
    const open = price;
    const close = open + (Math.random() - 0.5) * 2;
    const high = Math.max(open, close) + Math.random();
    const low = Math.min(open, close) - Math.random();
    const volume = Math.random() * 1000;
    data.push({ time: timestamp, open, high, low, close, volume });
    timestamp += 60 * 1000; // 1 minute
    price = close;
  }
  return data;
}

const ChartComponent = () => {
  useEffect(() => {
    const container = document.getElementById('chart-container');
    if (!container) return;

    const chart = new ChartGpu({
      container,
      width: container.clientWidth,
      height: 400,
      options: {
        background: 'rgba(30,30,30,0.9)',
        candlesticks: { color: '#00ff00', width: 2 },
      },
    });

    const data = generateMockData();
    chart.addCandles(data);
  }, []);

  return <div id='chart-container' className='w-full h-96'></div>;
};

export default ChartComponent;
