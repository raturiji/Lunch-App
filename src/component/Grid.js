import React  from 'react'
import HeatMap from 'react-heatmap-grid'


export default function Grid(user) {
    const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
    const yLabels = ['Smith Sagar', 'Sagar Raturi', 'Raturi Sagar'];
    const data = new Array(yLabels.length)
      .fill(0)
      .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));
    
  
  return (
    <div className="w-75">
      <h1 className="text-center">Grid</h1>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
      />,
    </div>
  )
}
