<?php
/* Kills your session */
session_start();

if(isset($_SESSION['username'])){
session_destroy();
?>

<html>
<head>
    <title>Logging out..</title>
    
    <link rel='stylesheet' href='../_style/logout_mainStyle.css'>
    <link rel='shortcut icon' href='../_images/favicon.png' type='image/x-icon'>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,300,400,500,600,800" rel="stylesheet">
    <meta http-equiv='refresh' content='1; URL=index.php'>
</head>
<body>
    <span class='logOut'>Logging you out..</span>
</body>
</html>

<?php
} else{
    header('Location: index.php');
}
?>