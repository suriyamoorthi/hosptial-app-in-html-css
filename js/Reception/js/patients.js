

var data = anychart.data.set([
    ['Male', 34],
    ['Female', 21],
    
  ]);
  // create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.innerRadius('60%');
// chart.title('Music Streaming Apps Global Market Share')
chart.container('container');
chart.draw();
var palette = anychart.palettes.distinctColors();
  
// set the colors according to the brands
palette.items([
  { color: 'green' },
  { color: 'blue' },
  
]);

// apply the donut chart color palette
chart.palette(palette);






