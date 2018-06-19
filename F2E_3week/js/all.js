var ctx = document.getElementById("myChart").getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
         data: [{
              x: 10,
              y: 0
             }, {
              x: 50,
              y: 50
              },{
              x: 100,
              y: 10
              }
               ]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});