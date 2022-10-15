import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props)=>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointValues);
    return (
        <div className='chart'>
            {
                props.dataPoints.map(data => 
                    <ChartBar 
                    value = {data.value}
                    label = {data.label}
                    maxValue = {totalMaxValue}
                    key={data.label}/>
                )
            }
        </div>
    );
}
export default Chart;