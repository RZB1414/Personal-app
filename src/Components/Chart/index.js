import * as d3 from "d3";
import { motion } from "framer-motion";
import './Chart.css';
import { useEffect } from "react";

export default function Chart({ entries }) {

  console.log(entries)

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .range([0, width])
      .padding(0.1)      

    const y = d3.scaleLinear()
      .range([height, 0]);

    const line = d3.line()
      .x(entry => x(entry.date) + x.bandwidth() / 2)
      .y(entry => y(entry.weight));

    const svg = d3.select(".chart")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      

    x.domain(entries.map(entry => entry.date));

    const minValue = d3.min(entries, entry => entry.weight);
    const maxValue = d3.max(entries, entry => entry.weight);
    const marginValue = 5;
    y.domain([minValue - marginValue, maxValue]);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%d/%m")))
      .attr("color", "#39B0FF")

    svg.append("g")
      .call(d3.axisLeft(y).ticks(5))
      .attr("color", "#39B0FF")

    svg.append("path")
      .datum(entries)
      .attr("class", "line")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "#39B0FF")
      .attr("stroke-width", 3)
      
            .attr("stroke-dasharray", function() {
              const length = this.getTotalLength();
              return length + " " + length;
            })
            .attr("stroke-dashoffset", function() {
              const length = this.getTotalLength();
              return length;
            })
            .transition()
            .duration(1500)
            .attr("stroke-dashoffset", 0);

          svg.selectAll(".dot")
            .data(entries)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", entry => x(entry.date) + x.bandwidth() / 2)
            .attr("cy", entry => y(entry.weight))
            .attr("r", 6)
            .attr("fill", "#39B0FF")
            
        }, [entries])

        return (
          <motion.svg
            className="chart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        )
      }
