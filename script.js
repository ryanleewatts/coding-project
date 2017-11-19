// Graph One

$(function () {
    var chartone = Highcharts.chart('graphone', {
        chart: {
          type: 'bar',
          backgroundColor: 'transparent'
        },
        title: {
          text: 'Which GNR album has been played the most over the years?',
          align: 'left',
          style: {
                  fontSize:'21px'
                }
        },
        plotOptions: {
            bar: {
                colorByPoint: true
                }
        },
        colors: [
           '#a80000',
           '#0c244c',
           '#0c244c',
           '#0c244c',
           '#0c244c'
       ],
        subtitle: {
          text: "'Appetite For Destruction' has been played in full 38 times over three decades",
          align: 'left'
        },
        xAxis: {
          categories: ['Appetite For Destruction', 'Chinese Democracy', 'Use Your Illusion 2', 'Use Your Illusion 1', "G N' R Lies"]
        },
        yAxis: {
          title: {
              text: 'Tracks played from that album',
            }
        },
        tooltip: {
          useHTML: true,
          headerFormat: '<small>{point.key}</small><table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                       '<td style="text-align: right"><b>{point.y} EUR</b></td></tr>',
          footerFormat: '</table>',
            formatter: function() {
                          return '<img src="img/' + this.x + '.jpg" height="125" width="125">';
                },
          valueDecimals: 2
       },
       legend: {
          enabled: false
       },
       credits: {
         enabled: false
       },
       series: [{
         data: [5272, 2047, 1562, 1290, 892]
        }]
    });
});

// Graph Two

$(function () {
    var charttwo = Highcharts.chart('graphtwo', {
        chart: {
          type: 'bar',
          backgroundColor: 'transparent'
        },
        title: {
          text: 'Which hit has been the most frequently played at GNR shows?',
          align: 'left',
          style: {
                  fontSize:'20px'
                }
        },
        plotOptions: {
            bar: {
                colorByPoint: true
                }
        },
        colors: [
           '#a80000',
           '#a80000',
           '#a80000',
           '#a80000',
           '#0c244c',
           '#a80000',
           '#0c244c',
           '#a80000',
           '#0c244c',
           '#0c244c'
       ],
        subtitle: {
          text: "Classic track 'Welcome to the Jungle' tops the charts with 734 plays",
          align: 'left'
        },
        xAxis: {
          categories: ['Welcome to the Jungle', 'Mr. Brownstone', 'Paradise City', "Sweet Child O' Mine", "Knockin' on Heaven's Door", "It's So Easy", "Live and Let Die", "Nightrain", "November Rain", "You Could Be Mine"]
        },
        yAxis: {
          title: {
              text: 'Times played',
            }
       },
       tooltip: {
         formatter: function() {
           return '<b>' + this.x + '</b> has been played live <b>' + this.y + '</b> times ';
                }
              },
       legend: {
          enabled: false
       },
       credits: {
         enabled: false
       },
       series: [{
         data: [734, 698, 686, 679, 677, 639, 576, 570, 569, 558]
        }]
    });
});

// Interactive

var bands = [
    [0,0,0,0],
    [1,4,67,23],
    [2,2,54,17],
    [3,16,78,9],
    [4,1,45,28],
    [5,4,66,21],
    [6,3,71,19],
    [7,9,59,56],
    [8,16,89,11],
  ];

function submitFunction() {

    var band = document.getElementById('myDropdown').value;
    var bandname = document.getElementById('myDropdown').selectedOptions[0].text;
    var one = 0;
    var two = 0;
    var three = 0;

    if (band == bands[band][0]) {
        one = bands[band][1];
        two = bands[band][2];
        three = bands[band][3];
    }

    var visitwidthleft = 100*18/(18 + one)
    var lengthwidthleft = 100*69/(69 + two)
    var albumwidthleft = 100*52/(52 + three)
    var visitwidthright = 100*one/(18 + one)
    var lengthwidthright = 100*two/(69 + two)
    var albumwidthright = 100*three/(52 + three)

    document.getElementById('databitone').innerHTML = "<div><span class='spanone'>Guns N Roses</span> vs <span class='spantwo'>" + bandname + "</span></div>"
    document.getElementById('databittwo').innerHTML = "<div>Countries visited in 2016</div><div class='leftbar' id='visitleft'>18</div><div class='rightbar' id='visitright'>" + one + "</div>"
    document.getElementById('databitthree').innerHTML = "<div>Length of set by song length</div><div class='leftbar' id='lengthleft'>69</div><div class='rightbar' id='lengthright'>" + two + "</div>"
    document.getElementById('databitfour').innerHTML = "<div>Percentage of set from first album</div><div class='leftbar' id='albumleft'>52</div><div class='rightbar' id='albumright'>" + three + "</div>"

    document.getElementById('visitleft').style.width = visitwidthleft + "%";
    document.getElementById('visitright').style.width = visitwidthright + "%";
    document.getElementById('lengthleft').style.width = lengthwidthleft + "%";
    document.getElementById('lengthright').style.width = lengthwidthright + "%";
    document.getElementById('albumleft').style.width = albumwidthleft + "%";
    document.getElementById('albumright').style.width = albumwidthright + "%";

      }
