$(function () {
  Highcharts.theme = {
  	colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
  		'#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
  	chart: {
  		backgroundColor: {
  			linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
  			stops: [
  				[0, '#2a2a2b'],
  				[1, '#3e3e40']
  			]
  		},
  		style: {
  			fontFamily: '\'Monaco\', sans-serif'
  		},
  		plotBorderColor: '#606063'
  	},
  	title: {
  		style: {
  			color: '#E0E0E3',
  			textTransform: 'uppercase',
  			fontSize: '20px'
  		}
  	},
  	subtitle: {
  		style: {
  			color: '#E0E0E3',
  			textTransform: 'uppercase'
  		}
  	},
  	xAxis: {
  		gridLineColor: '#707073',
  		labels: {
  			style: {
  				color: '#E0E0E3'
  			}
  		},
  		lineColor: '#707073',
  		minorGridLineColor: '#505053',
  		tickColor: '#707073',
  		title: {
  			style: {
  				color: '#A0A0A3'

  			}
  		}
  	},
  	yAxis: {
  		gridLineColor: '#707073',
  		labels: {
  			style: {
  				color: '#E0E0E3'
  			}
  		},
  		lineColor: '#707073',
  		minorGridLineColor: '#505053',
  		tickColor: '#707073',
  		tickWidth: 1,
  		title: {
  			style: {
  				color: '#A0A0A3'
  			}
  		}
  	},
  	tooltip: {
  		backgroundColor: 'rgba(0, 0, 0, 0.85)',
  		style: {
  			color: '#F0F0F0'
  		}
  	},
  	plotOptions: {
  		series: {
        shadow: true,
  			dataLabels: {
  				color: '#B0B0B3'
  			},
  			marker: {
  				lineColor: '#333'
  			}
  		},
  		boxplot: {
  			fillColor: '#505053'
  		},
  		candlestick: {
  			lineColor: 'white'
  		},
  		errorbar: {
  			color: 'white'
  		}
  	},
  	legend: {
  		itemStyle: {
  			color: '#E0E0E3'
  		},
  		itemHoverStyle: {
  			color: '#FFF'
  		},
  		itemHiddenStyle: {
  			color: '#606063'
  		}
  	},
  	credits: {
  		style: {
  			color: '#666'
  		}
  	},
  	labels: {
  		style: {
  			color: '#707073'
  		}
  	},

  	drilldown: {
  		activeAxisLabelStyle: {
  			color: '#F0F0F3'
  		},
  		activeDataLabelStyle: {
  			color: '#F0F0F3'
  		}
  	},

  	navigation: {
  		buttonOptions: {
  			symbolStroke: '#DDDDDD',
  			theme: {
  				fill: '#505053'
  			}
  		}
  	},

  	// scroll charts
  	rangeSelector: {
  		buttonTheme: {
  			fill: '#505053',
  			stroke: '#000000',
  			style: {
  				color: '#CCC'
  			},
  			states: {
  				hover: {
  					fill: '#707073',
  					stroke: '#000000',
  					style: {
  						color: 'white'
  					}
  				},
  				select: {
  					fill: '#000003',
  					stroke: '#000000',
  					style: {
  						color: 'white'
  					}
  				}
  			}
  		},
  		inputBoxBorderColor: '#505053',
  		inputStyle: {
  			backgroundColor: '#333',
  			color: 'silver'
  		},
  		labelStyle: {
  			color: 'silver'
  		}
  	},

  	navigator: {
  		handles: {
  			backgroundColor: '#666',
  			borderColor: '#AAA'
  		},
  		outlineColor: '#CCC',
  		maskFill: 'rgba(255,255,255,0.1)',
  		series: {
  			color: '#7798BF',
  			lineColor: '#A6C7ED'
  		},
  		xAxis: {
  			gridLineColor: '#505053'
  		}
  	},

  	scrollbar: {
  		barBackgroundColor: '#808083',
  		barBorderColor: '#808083',
  		buttonArrowColor: '#CCC',
  		buttonBackgroundColor: '#606063',
  		buttonBorderColor: '#606063',
  		rifleColor: '#FFF',
  		trackBackgroundColor: '#404043',
  		trackBorderColor: '#404043'
  	},

  	// special colors for some of the
  	legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
  	background2: '#505053',
  	dataLabelsColor: '#B0B0B3',
  	textColor: '#C0C0C0',
  	contrastTextColor: '#F0F0F3',
  	maskColor: 'rgba(255,255,255,0.3)'
  };

  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);
});

// DIVZION OF STUFFS

// $(function () {
//     // step 1: AJAX request (on page load)
//     // step 2: create highchart in the callback
//     Highcharts.chart('chart-container', {
//         chart: {
//             type: 'column'
//         },
//         title: {
//             text: 'this is totally a string'
//         },
//         subtitle: {
//             text: 'Date: 11/05/16'
//         },
//         xAxis: {
//             categories: [
//                 'Women',
//                 'Men',
//                 'Transgender'
//             ],
//             crosshair: true
//         },
//         yAxis: {
//             min: 0,
//             title: {
//                 text: 'Gucci (mm)'
//             }
//         },
//         tooltip: {
//             headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//             pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//                 '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
//             footerFormat: '</table>',
//             shared: true,
//             useHTML: true
//         },
//         plotOptions: {
//             column: {
//                 pointPadding: 0.2,
//                 borderWidth: 0
//             }
//         },
//         series: [{
//             name: 'Pre-survey',
//             data: [3, 6, 4]
//
//         }, {
//             name: 'Post-survey',
//             data: [5, 4, 5]
//
//         }, {
//             name: 'Something else',
//             data: [2, 3, 6]
//
//         }]
//     });
// });
