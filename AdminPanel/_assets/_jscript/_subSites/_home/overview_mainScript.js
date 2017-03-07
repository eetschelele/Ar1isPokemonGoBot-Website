var jsonData;
var ping = [];

function onLoad(jQuery){
    
    $.getJSON('_serverSide/responseTime.json', gotData);
    
} $(document).ready(onLoad);

function gotData(data){
    jsonData = data;
    console.log(data);
    convertDataToArray(jsonData);
}

/*
This method checks every minute if the json file has changed and if so it will save it in the array.
In order to save computing power it won't rewrite the objects the array already has, it will only write the newest listings.
*/
function convertDataToArray(data){
    window.setInterval(function(){
        var currLength = ping.length;
        var lengthOfArray = data.getPingToWebsite.length;
        var timesOfIteration = lengthOfArray - currLength;

        for(var i = currLength; i < (currLength + timesOfIteration); i++){
            ping[i] = data.getPingToWebsite[i];
        }
        
    }, 60000);
}

