anychart.onDocumentReady(function () {

    // create a data set
    var data = anychart.data.set([
      ["John", 10000, 12500],
      ["Jake", 12000, 15000],
      ["Peter", 13000, 16500, "#5cd65c", "#009933", null, {enabled: true}],
      ["James", 10000, 13000],
      ["Mary", 9000, 11000]
    ]);

    // map the data
    var seriesData_1 = data.mapAs({x: 0, value: 1, fill: 3, stroke: 5, label: 6});
    var seriesData_2 = data.mapAs({x: 0, value: 2, fill: 4, stroke: 5, label: 6});

    // create a chart
    var chart = anychart.column();

    // create the first series, set the data and name
    var series1 = chart.column(seriesData_1);
    series1.name("Sales in 2015");

    // create the second series, set the data and name
    var series2 = chart.column(seriesData_2);
    series2.name("Sales in 2016");

    // set the chart title
    chart.title("Column Chart: Appearance (Individual Points)");

    // set the titles of the axes
    var xAxis = chart.xAxis();
    xAxis.title("Manager");
    var yAxis = chart.yAxis();
    yAxis.title("Sales, $");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
});