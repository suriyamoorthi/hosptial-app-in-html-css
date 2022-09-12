anychart.onDocumentReady(function () {

    // create data
    var data = [
      ["Jan", 1],
      ["Feb", 0],
      ["Mar", 13],
      ["Apr", 10],
      ["May", 9]
    ];

    // create a chart
    var chart = anychart.column();

    // create a column series and set the data
    var series = chart.column(data);

    // set the chart title
    // chart.title("Column Chart: Basic Sample");

    // set the titles of the axes
    chart.xAxis().title("month");
    chart.yAxis().title("");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
});


