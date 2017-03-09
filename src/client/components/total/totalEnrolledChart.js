import Highcharts from 'highcharts';

export default function totalEnrolledChart() {
  return Highcharts.chart('total-enrolled', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
          'May 22,',
          'May 29',
          'June 5',
          'June 12',
          'June 19',
          'June 26',
          'July 3',
          'July 10',
          'July 17',
          'July 25',
          'July 31',
          'August 7',
          'August 14',
          'August 21'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: '# volunteers'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: 'Health - 4wk',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Health - 2wk',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Empowerment - 1 wk',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Empowerment - 2 wk',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Empowerment - 4 wk',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Camp',
        data: [3, 4, 4, 2, 5]
    }
  ]
  });
}
