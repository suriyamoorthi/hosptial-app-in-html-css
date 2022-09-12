
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	// animationEnabled: true,
	title:{
		text: "Inpatients vs. Outpatients",
		horizontalAlign: "left"
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		// innerRadius: 50,
		indexLabelFontSize: 17,
		indexLabel: "{label} - #percent%",
		indexcolor:"{color}",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			
			{ y: 15, label: "inpatient" ,color:"green",},
			{ y: 6, label: "outpatient", color:"blue"}
		]
	}]
});
chart.render();

}
{/* </script>
</head>
<body>
<div id="chartContainer" style="height: 370px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
</body>
</html> */}

anychart.onDocumentReady(function () {
  
	// add data
	var data = anychart.data.set([
	  ['Spotify', 34],
	  ['Apple Music', 21],
	  ['Amazon Music', 15],
	  ['Tencent apps', 11],
	  ['YouTube Music', 6],
	  ['Others', 13]
	]);
	
	// create a pie chart with the data
	var chart = anychart.pie(data);
	
	// set the chart radius making a donut chart
	chart.innerRadius('55%')
  
	// create a color palette
	var palette = anychart.palettes.distinctColors();
   
	// set the colors according to the brands
	palette.items([
	  { color: '#1dd05d' },
	  { color: '#000000' },
	  { color: '#00a3da' },
	  { color: '#156ef2' },
	  { color: '#f60000' },
	  { color: '#96a6a6' }
	]);
  
	// apply the donut chart color palette
	chart.palette(palette);
	
	// set the position of labels
	chart.labels().format('{%x} — {%y}%').fontSize(16);
	
	// disable the legend
	chart.legend(false);
	
	// format the donut chart tooltip
	chart.tooltip().format('Market share: {%PercentValue}%');
  
	// create a standalone label
	var label = anychart.standalones.label();
  
	// configure the label settings
	label
	  .useHtml(true)
	  .text(
		'<span style = "color: #313136; font-size:20px;">Global Market Share of <br/> Music Streaming Apps</span>' +
		'<br/><br/></br><span style="color:#444857; font-size: 14px;"><i>Spotify and Apple Music have more <br/>than 50% of the total market share</i></span>'
	  )
	  .position('center')
	  .anchor('center')
	  .hAlign('center')
	  .vAlign('middle');
	
	// set the label as the center content
	chart.center().content(label);
	
	// set container id for the chart
	chart.container('container');
	
	// initiate chart drawing
	chart.draw();
  
  });