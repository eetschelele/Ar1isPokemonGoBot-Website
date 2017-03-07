<?php
session_start();
if(isset($_SESSION['username'])){
    
/* After that secure code */
?>

<html>
<head>
    <title>LPBot - Admin Panel</title>
    
    <!-- Basic setup -->
    <meta name='author' content='Jan Etschel'>
    <meta charset='utf-8'>
    
    <link rel='stylesheet' href='../_style/adminPanel_mainStyle.css'>
    <link rel='stylesheet' href='../_style/animations.css'>
    
    <link rel='shortcut icon' href='../_images/favicon.png' type='image/x-icon'>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700" rel="stylesheet">
</head>
<body>
    <div id='mainPanelWrapper'>
    <div class='sideBar'>
        <div class='pokemonGOIcon'></div> <!-- Just for the icon -->
        <span class='welcome'>Welcome</span> <span class='welcomeName'></span>
        <span class='state'></span>
        
        <!-- Actual Navigation stuff -->
        
        <div class='whiteBreak'><span class='introText'>General</span></div>
        
        <!-- Navigation Sitebar -->
        <!-- Home -->
        <div class='sideBarElements home'>
            <div class='icon'></div> <span class='description'>Home</span> <div class='expandHome'></div>
        </div>
        <div class='subMenuHome'>
            <div class='subItemFirst subItemFirstProfile'>
                <div class='icon'></div> <span class='explanation'>Profile</span>
            </div>
            <div class='subItemSecond subItemSecondFeature'>
                <div class='icon'></div> <span class='explanation'>Features</span>
            </div>
            <div class='subItemThird subItemThirdOverview'>
                <div class='icon'></div> <span class='explanation'>Overview</span>
            </div>
        </div>
        
        <!-- Forms -->
        <div class='sideBarElements forms'>
            <div class='icon'></div> <span class='description'>Forms</span> <div class='expandForms'></div>
        </div>
        <div class='subMenuForms'>
            <div class='subItemFirst subItemFirstEditSecurity'>
                <div class='icon'></div> <span class='explanation'>Edit Security</span>
            </div>
            <div class='subItemSecond subItemSecondEditWiki'>
                <div class='icon'></div> <span class='explanation'>Edit Wiki articles</span>
            </div>
            <div class='subItemThird subItemThirdEditFAQ'>
                <div class='icon'></div> <span class='explanation'>Edit FAQ</span>
            </div>
        </div>
        
        <!-- Coding -->
        <div class='sideBarElements code'>
            <div class='icon'></div> <span class='description'>Code</span> <div class='expand'></div>
        </div>
        
        <!-- Users -->
        <div class='sideBarElements banUsers'>
            <div class='icon'></div> <span class='description'>Users</span> <div class='expandUsers'></div>
        </div>
        <div class='subMenuUsers'>
            <div class='subItemFirst subItemFirstBanUser'>
                <div class='icon'></div> <span class='explanation'>Ban User</span>
            </div>
            <div class='subItemFirstAdd subItemFirstAddPardonUser'>
                <div class='icon'></div> <span class='explanation'>Pardon User</span>
            </div>
            <div class='subItemSecond subItemSecondPromoteUser'>
                <div class='icon'></div> <span class='explanation'>Promote User</span>
            </div>
            <div class='subItemThird subItemThirdInviteUser'>
                <div class='icon'></div> <span class='explanation'>Invite User</span>
            </div>
        </div>
        
        <!-- GitHub -->
        <div class='sideBarElements gitHub'>
            <div class='icon'></div> <span class='description'>GitHub</span> <div class='expand'></div>
        </div>
        
        <!-- PokeLog -->
        <div class='sideBarElements pokeLog'>
            <div class='icon'></div> <span class='description'>PokeLog</span> <div class='expand'></div>
        </div>
        
        <!-- ------------ -->
        
        <div class='bottomSettings'> <!-- Just for the icons -->
            <div class='settings'></div>
            <div class='messages'> <!-- Messages you got from users or form the system -->
                <div class='numberOfMessages'><span class='numberOfMessagesText'>1</span></div>
            </div>
            <div class='legalNotice'></div>
            <div class='logout'></div>
        </div>
    </div>
    <div class='topBar'>
        <div class='menuIcon'></div> <!-- Just for the icon -->
    </div>
    <div class='topMenu'> <!-- This is the menu that you can pull down -->
        <span class='personalInfoText'>Personal Information</span>
    </div>
        
    <!-- Content -->
    <div class='mainContent'>
        
    </div>
    
    </div> <!-- Closing of mainPanelWrapper -->
    
    <script type='text/javascript'>
        // In order to get the username
        var username = "<?php echo $_SESSION['username'] ?>";
        var stateDataUse = <?php echo json_encode($_SESSION['state']); ?>;
        var unreadMails = <?php echo json_encode($_SESSION['mails']); ?>;
    </script>
    
    <script type='text/javascript' src='../_jscript/jQuery.js'></script>
    <script type='text/javascript' src='../_jscript/adminPanel_mainScript.js'></script>
</body>  
</html>    

<?php
}else{
    header('Location: index.php');
}
?>