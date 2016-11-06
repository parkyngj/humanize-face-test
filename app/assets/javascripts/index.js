$(document).ready(function(){
  ajaxButtonListener('button');
});

function ajaxButtonListener(buttonTag){
  $(buttonTag).on('click', function(event){
    event.preventDefault();

    console.log("Ughhhh your AJAX is so good")

    $.ajax({
      method: 'GET',
      url: 'http://humanize-api-test.herokuapp.com/tests/6'
      })
    .done(function(response){
        console.log('success');
        console.log(response);
        console.log(response.test.testing_1);

        var title = response.test.testing_1;
        var dummyValue = response.test.testing_2;

        highchartsGenerator(
          {
            titleText: ["This title changes to whatever the fuck we want", "Money money", "Pen pineapple apple pen", "$$$$$$ IPO $$$$$$"][Math.floor(Math.random() * 4)],
            valueInt: [80, 800, 4, 500][Math.floor(Math.random() * 4)]
          }
        );
      })
    .fail(function(response){
        console.log('fail');
        console.log(response);
      })
  })
}

$(document).on('ready page:load', function(){
  console.log("R U REDY 4 FREDDY")

  $.ajax({
    method: 'GET',
    url: 'http://humanize-api-test.herokuapp.com/tests/5'
    })
  .done(function(response){
      console.log('success');
      console.log(response);
      console.log(response.test.testing_1);

      var title = response.test.testing_1;
      var dummyValue = response.test.testing_2;

      highchartsGenerator(
        {
          titleText: title,
          valueInt: dummyValue
        }
      );
    })
  .fail(function(response){
      console.log('fail');
      console.log(response);
    })
});


function highchartsGenerator(args) {
    // step 1: AJAX request (on page load)
    // step 2: create highchart in the callback
    Highcharts.chart('chart-container', {
        chart: {
            type: 'column'
        },
        title: {
            text: args.titleText
        },
        subtitle: {
            text: 'Date: 11/05/16'
        },
        xAxis: {
            categories: [
                'Women',
                'Men',
                'Transgender'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Gucci (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Pre-survey',
            data: [args.valueInt, args.valueInt, args.valueInt]

        }, {
            name: 'Post-survey',
            data: [5, 4, 5]

        }, {
            name: 'Something else',
            data: [2, 3, 6]

        }]
    });
}
