<?php
session_start();
if(true){
    
error_reporting(E_ERROR);
    
$connectionToGetMails = new mysqli('vweb09.nitrado.net', 'ni1109306_1sql1', 'de866fd8', 'ni1109306_1sql1');

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
    
$selectMailsUserHas = "SELECT subjectMail, contentMail FROM `pokemonGoMails` WHERE checkInt = 1";
    
$mailsUserHas = $connectionToGetMails->query($selectMailsUserHas);
$currentMailsInInbox = $mailsUserHas->fetch_object();
    
?>
<html>
<head>
    <link rel='stylesheet' href='../_style/_subSites/messages_mainStyle.css'>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700" rel="stylesheet">    
</head>
<body>
<?php
// If user does not have any messages
if($_SESSION['mails'] == 0){
?>
<!--<div id='notAvailableWrapper'>
    <span class='nothingToSee'>Nothing to see here! :(</span>
    <span class='sub'>There were no new circular letters since you last checked!</span>
    <div class='backToHome preLoad'></div>
</div>-->
<?php
// If the user has one or more messages
}else{
?>
<div id='mails'>
    <span class='numberOfMails header'>You have </span><span class='setMails header'>n.A</span><span class='numberOfMailsSec header'> unread messages!</span>
    <div class='mailNumber'>
        <span class='showing subHeader'>Showing number </span><span class='setCurrentMailUserIsOn subHeader'>n.A</span><span class='subHeader'> of </span><span class='setMails subHeader'>n.A</span>
    </div> 
    
    <!-- Message body -->
    <div class='mainMailWrapper'>
        <div class='subjectMail'>
            <span class='subjectOfMail'>Subject of message</span>
        </div>
        <div class='mailContent'>
            <span class='contentOfMail'>Content of message</span>
        </div>
    </div>
    <!-- ---- -->
    
    <!-- Options for message -->
    <div class='mailOptions'>
        <div class='nextMessage element'></div>
        <div class='prevMessage element'></div>
        
        <div class='readMessage element'></div>
    </div>
</div>
<?php
}
?>
<script type='text/javascript'>
    var mailGot = <?php echo json_encode($currentMailsInInbox); ?>;
</script>
<script type='text/javascript' src='../_jscript/_subSites/messages_mainScript.js'></script>
</body>
</html>
<?php
}
?>