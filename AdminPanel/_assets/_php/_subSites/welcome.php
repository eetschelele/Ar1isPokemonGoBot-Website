<?php
session_start();
if(true){
    
/* After that secure code */    
?>

<html>
<head> <!-- head tag only for stylesheets and meta data -->
    <link rel='stylesheet' href='../_style/_subSites/welcome_mainStyle.css'>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700" rel="stylesheet">
</head>
<body>
<div class='mainWrapper'>
    <span class='header'>Welcome to the Admin Panel!</span><br/>
    <span class='explanation'>Welcome to our Admin Panel relating to the site www.ar1ispokemongobot.com. This is the welcome page, where you have a basic overview of everything regarding the bot.</span>
    <div class='graphWrapper'>
        <canvas id='chartPingToWebsite' width='900px;' height='500px'></canvas>
        <div class='information'>
            <span class='header'>Explaining the graph</span>
            <span class='h2'>And some more information on the data collected</span>
            <ul class='information'>
                <li><span class='explanation'>Packages sent per request: </span><span class='setPackagesPerRequest'>n.A</span></li>
                <li><span class='explanation'>Average packages sent over the last 30 minutes: </span><span class='setPackagesSent'>n.A</span></li>
                <li><span class='explanation'>Average ping: </span><span class='setAvgPing'>n.A</span></li>
                <li><span class='explanation'>Highest ping: </span><span class='setHighestPing'>n.A</span></li>
                <li><span class='explanation'>Lowest ping: </span><span class='setLowestPing'>n.A</span></li>
                <li><span class='explanation'>Uptime percentage: </span><span class='setUptimePercentage'>n.A</span></li>
                <li><span class='explanation'>Currently: </span><span class='setCurrent'>n.A</span></li>
            </ul>
        </div>
    </div>
</div>
    
<script type='text/javascript' src='../_jscript/chart.js'></script>
<script type='text/javascript' src='../_jscript/_subSites/welcome_mainScript.js'></script>
</body>
</html>
<?php
}
?>