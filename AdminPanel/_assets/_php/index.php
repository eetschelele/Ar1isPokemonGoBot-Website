<?php
session_start();
$state = 0;

/* Preventing of warning/error in line 18 */
error_reporting(E_ERROR);

$connection = new mysqli('data.com', 'user', 'password', 'name');

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

if(!isset($_SESSION['username']) and !isset($_GET['page'])){
    $state = 0;
}

if($_GET['page'] == 'login'){
    $user = htmlspecialchars($_POST['user'], ENT_QUOTES);
    $password = md5(htmlspecialchars($_POST['password'], ENT_QUOTES));
    
    $arrChartData[] = array();
    $selection = "SELECT * FROM `pokGoLogin` WHERE user = ('$user') AND password = ('$password')";
    
    /* Get the state of the user*/
    $selectState = "SELECT st_ FROM `pokGoLogin` WHERE user = ('$user') AND password = ('$password')";
    
    $state = $connection->query($selectState);
    $currentState = $state->fetch_object();
    /* ---- */
    
    /* Gets the number of mails the user has not read yet */
    $selectMails = "SELECT unreadMails FROM `pokGoLogin` WHERE user = ('$user') AND password = ('$password')";
    
    $mails = $connection->query($selectMails);
    $currentMails = $mails->fetch_object();
    /* ---- */
    
    $controlVar = 0;
    $tempResult = $connection->query($selection) or trigger_error($connection->error.'[$selection]');
    
    while($row = $tempResult->fetch_object()){
        $controlVar++;
    }
    
    if($controlVar != 0){
        $_SESSION['username'] = $user;
        $_SESSION['state'] = $currentState;
        $_SESSION['mails'] = $currentMails;
        
        $state = 1;
    }else{
        $state = 2;
    }
}
?>

<html>
<head>
    <title>LPBot - AdminPanel Login</title>
    
    <!-- Basic setup -->
    <meta name='author' content='Jan Etschel'>
    <meta charset='utf-8'>
    
    <link rel='stylesheet' href='../_style/login_mainStyle.css'>
    <link rel='stylesheet' href='../_style/animations.css'>
    
    <link rel='shortcut icon' href='../_images/favicon.png' type='image/x-icon'>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700" rel="stylesheet">
    
    <?php
        if($state == 1){
    ?>
        <meta http-equiv='refresh' content='2; URL=adminpanel.php'>
    <?php
        }else if($state == 2){
    ?>
        <meta http-equiv='refresh' content='4; URL=index.php'>
    <?php
        }
    ?>
</head>
<body>
    <?php
        if($state == 0){        
    ?>
    <div class='profilePicture'></div>
    <div id='mainLogin'>
        <span class='login'>You have to login in order to use the Admin Panel</span>
        <form class='loginForm' method='post' action='index.php?page=login'>
            <span class='usernameText'>Username:</span> <input type='text' name='user' autocomplete='off' value='Username' class='username'>
            <br><span class='passwordText'>Password:</span> <input type='password' name='password' autocomplete='off' value='Password' class='password'>

            <!-- Submit Button -->
            <br><input type='submit' name='Login' value='Login'>
        </form>
    </div>
    <?php
        }
        if($state == 1){
    ?>
    
    <span class='redirection'>Success! You will be redirected shortly.</span>
    
    <?php
    }
        if($state == 2){
    ?>
    
    <span class='failed'>Failed to login! You'll be redirected shortly.</span>
    
    <?php
        }
    ?>
    
    <script type='text/javascript' src='../_jscript/jQuery.js'></script>
    <script type='text/javascript' src='../_jscript/login_mainScript.js'></script>
</body>
</html>