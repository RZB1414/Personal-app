import { useEffect, useState, useRef } from "react"
import "./Chart.css"
import * as d3 from 'd3'

const Chart = () => {

    const [data] = useState([25, 50, 35, 15, 94, 10])
    const svgRef = useRef()

    useEffect(() => {
        // setting up svg
        const w = window.innerWidth * 0.9
        const h = 100
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('background-color', 'd3d3d3')
            .style('border', '1px solid black')

        // seting the scaling
        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, w])
        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0])
        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal)

        // setting up the data for the svg
        svg.selectAll('.line')
            .data([data])
            .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', 'black')

    }, [data])

    return (
        <div className="chart">
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default Chart