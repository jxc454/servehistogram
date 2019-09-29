const d3 = require('d3');
const { zip } = require('lodash');

function makeBarChart(histogramData){
    // make data d3 friendly
    const rawHistogram = histogramData.data.histogram;
    const d3Data = zip(rawHistogram.keys, rawHistogram.values).map(a => ({"x": a[0], "y": a[1]}))
        .sort((a, b) => a.x - b.x);

    // svg dimensions
    const svg = d3.select("#svgBarChart");
    const margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 50
        };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;
    const g = getGroup(svg, margin);
    // scales
    const x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.1)
        .domain(d3Data.map(d => d.x));

    const y = d3.scaleLinear()
        .rangeRound([height, 0])
        .domain([0, d3.max(d3Data.map(d => d.y))]);

    // axes
    if (!d3.select(".xAxis").empty()) {
        // update
        svg.select(".xAxis").call(d3.axisBottom(x));
        svg.select(".yAxis").call(d3.axisLeft(y));
    } else {
        addAxes(g, x, y, height);
    }

    // bars
    const bars = g.selectAll("rect").data(d3Data);

    bars.exit().remove();

    bars.enter().append("rect")
        .attr("class", "bar")
        .merge(bars)
            .attr("x", d => x(d.x))
            .attr("y", d => y(d.y))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.y));
}

function addAxes(g, x, y, height) {
    g.append("g")
        .attr("class", "xAxis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "yAxis")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end");
}

function getGroup(svg, margin) {
    if (svg.select("#plot").empty()) {
        return svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .attr("id", "plot");
    } else {
        return svg.select("#plot")
    }
}

module.exports = {
    "makeBarChart": makeBarChart
};
