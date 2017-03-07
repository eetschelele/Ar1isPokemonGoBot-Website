var jsonData;
var ping = [];
var chart = $('#chartPingToWebsite');
var uptime = 0;
var lowestPing = 1000;
var highestPing = 0;

function onLoad(jQuery){
    convertDataToArray();
    
    $('.setPackagesPerRequest').text('3');
    $('.setPackagesSent').text('90');
    
} $(document).ready(onLoad);



// This method gets the last 30 entries in the json file for the graph
function convertDataToArray(){
        $.getJSON('_serverSide/responseTime.json', gotData);
        
        function gotData(data){
            var lengthOfArray = data.getPingToWebsite.length;
            var timesOfIteration = lengthOfArray - 31;

            for(var i = 0; i <= 30; i++) ping[i] = data.getPingToWebsite[i + timesOfIteration];
            
            drawChart();
        }
    
    setTimeout(convertDataToArray, 60000);
}

function drawChart(){
    var uptimePercentage = 100;
    for(var i = 0; i <= 30; i++){
        if(ping[i] == null){
            ping[i] = {
                "id": i,
                "responseTime": 0,
                "timestamp": "undefined"
            }
        }
        if(ping[i].responseTime > 250) uptime++;
        if(ping[i].responseTime != 0) if(ping[i].responseTime < lowestPing) lowestPing = ping[i].responseTime;
        if(ping[i].responseTime > highestPing) highestPing = ping[i].responseTime;
    }

    var current = uptime / 30 * 100;
    uptimePercentage -= current;
    uptimePercentage = uptimePercentage.toFixed(2);
    
    var avgCount = 0;
    for(var i = 0; i <= 30; i++){
        avgCount += ping[i].responseTime;
    }
    avgCount /= 30;
    avgCount = Math.round(avgCount);
    
    if(ping[30].responseTime > 250){
        $('.setCurrent').text('offline/timeout');
        $('.setCurrent').css('color', 'rgba(204, 0, 0, 1)');
    }else if(ping[30].responseTime > 150 || ping[30].responseTime < 250){
        $('.setCurrent').text('online');
        $('.setCurrent').css('color', 'rgba(0, 128, 43, 1)');
    }
    
    $('.setUptimePercentage').text(uptimePercentage +'%');
    
    $('.setAvgPing').text(avgCount +'ms');
    $('.setLowestPing').text(lowestPing +'ms');
    $('.setHighestPing').text(highestPing +'ms');
    
    Chart.defaults.global.defaultFontFamily = 'Work Sans';
    
    var chartInstance = new Chart(chart, {
        type: 'line',
        data: {
            labels:[30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            datasets: [
                {
                    label: 'Response time from pokehash.buddyauth.com in ms',
                    data: [ping[1].responseTime, ping[2].responseTime, ping[3].responseTime, ping[4].responseTime, ping[5].responseTime, ping[6].responseTime, ping[7].responseTime, ping[8].responseTime, ping[9].responseTime, ping[10].responseTime, ping[11].responseTime, ping[12].responseTime, ping[13].responseTime, ping[14].responseTime, ping[15].responseTime, ping[16].responseTime, ping[17].responseTime, ping[18].responseTime, ping[19].responseTime, ping[20].responseTime, ping[21].responseTime, ping[22].responseTime, ping[23].responseTime, ping[24].responseTime, ping[25].responseTime, ping[26].responseTime, ping[27].responseTime, ping[28].responseTime, ping[29].responseTime, ping[30].responseTime],
                    backgroundColor: 'rgba(92, 116, 142, .7)',
                    borderColor: 'rgba(0, 0, 0, .8)',
                    borderWidth: 1,
                },
                {
                    label: 'Average',
                    data: [avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount, avgCount],
                    backgroundColor: 'rgba(204, 0, 0, .7)',
                    borderColor: 'rgba(204, 0, 0, .7)',
                    fill: false,
                    radius: 0,
                    pointHoverRadius: 0,
                    lineWidth: .5
                }
            ]
        },
        options:{
            elements:{
                line:{
                    tension: 0
                },
                scaleFontFamily: 'Work Sans'
            },
            scales:{
              xAxes: [{
                  scaleLabel:{
                      display: true,
                      labelString: 'minutes ago (refreshing every minute)'
                  }
              }]  
            },
            legend:{
                onClick: (e) => e.stopPropagation()
            },
            responsive: false,
            hover: {
                mode: 'index'
            }
        }
    });
}

