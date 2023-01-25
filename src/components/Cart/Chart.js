import React from 'react'

import ChartBar from './ChartBar'
import "./Chart.css"

const Chart = ({dataPoints}) => {
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
  const totalMax = Math.max(...dataPointValues)
  
  return (
    <div className='chart'>
      {dataPoints.map(item => 
        <ChartBar 
          key={item.label} 
          value={item.value} 
          maxValue={totalMax} 
          label={item.label}
        />
      )}
    </div>
  )
}

export default Chart