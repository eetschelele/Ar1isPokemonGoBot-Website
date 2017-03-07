<?php
/*
Since PHP has kind of a strange behaviour when it comes to pinging a website and JS isn't better at it, this is a work around.
This site will reload itself every minute and save the data in a JSON file, which will then later be used by the main admin panel.
PHP/JS get your shit together
*/

// Pinning function
function pingDomain($domain){
    $startTime = microtime(true);
    $file = fsockopen($domain, 80, $errNumber, $errString, 10);
    $stopTime = microtime(true);
    $status = 0;
    
    if(!$file) $status = -1;
    else{
        fclose($file);
        $status = ($stopTime - $startTime) * 1000;
        $status = round($status);
    }
    
    return $status;
}

function saveToFile(){
    $myFile = fopen('responseTime.json', 'a') or die('Unable to read file!');
    $tempResult = pingDomain('www.pokehash.buddyauth.com');
    $currentTime = time();
    
    $content = file_get_contents('responseTime.json');
    $content = preg_replace('(])' , '', $content);
    $content = preg_replace('(}$)' , '', $content, 1);
    $content = preg_replace('/\s+$/' , '', $content, 4);
    file_put_contents("responseTime.json", $content);
    
    $textToWrite =  ',' . "\n" . '        {' . "\n" . '            "id"' . ': ' . $currentTime . ',' . "\n" . '            "responseTime"' . ': ' . json_encode($tempResult) . ',' . "\n" . '            "timestamp"' . ': ' . date("h:m:s") . "\n" . '        }' . "\n" . '    ]' . "\n" . '}';
    fwrite($myFile, $textToWrite);
    fclose($myFile);
    
    return 1;
}
if(true){
?>
<html>
<head></head>
<body>
    <script>
        window.setInterval(function(){
            var tempData = <?php echo saveToFile(); ?>;
            location.reload();
        }, 60000); 
    </script>
</body>
</html>
<?php
}
?>