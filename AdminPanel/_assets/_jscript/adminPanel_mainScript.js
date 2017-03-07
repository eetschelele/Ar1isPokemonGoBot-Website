var welcomeNameVar = $('.welcomeName');
var stateUserIsIn;
var unreadMailsUserHas;
var currentPage = 'welcome';

function onLoad(jQuery){
    
    try{
        welcomeNameVar.text(username);
        getState(stateDataUse);
        getUnreadMails(unreadMails);
    }catch(e){ console.log('Unknown PHP error'); }
    
    // Listening for clicks
    $('.menuIcon').on('click', toggleTopMenu);
    $('.home').on('click', toggleHomeSub);
    $('.banUsers').on('click', toggleUserSub);
    $('.forms').on('click', toggleFormsSub)
    
    // This section is changing for site
    $('.subItemFirstProfile').on('click', function(){ changePage('profile'); });
    $('.subItemSecondFeature').on('click', function(){ changePage('features'); });
    
    $('.subItemThirdOverview').on('click', function(){ changePage('overview'); });
    $('.subItemFirstEditSecurity').on('click', function(){ changePage('editSecurity'); });
    $('.subItemSecondEditWiki').on('click', function(){ changePage('editWiki'); });
    $('.subItemThirdEditFAQ').on('click', function(){ changePage('editFAQ'); });
    
    $('.code').on('click', function(){ changePage('code'); });
    
    $('.subItemFirstBanUser').on('click', function(){ changePage('banUser'); });
    $('.subItemFirstAddPardonUser').on('click', function(){ changePage('pardonUser'); });
    $('.subItemSecondPromoteUser').on('click', function(){ changePage('promoteUser'); });
    $('.subItemThirdInviteUser').on('click', function(){ changePage('inviteUser'); });
    
    $('.messages').on('click', function(){ changePage('messages')});
    
    $('.gitHub').on('click', function(){ changePage('gitHub'); });
    
    $('.pokeLog').on('click', function(){ changePage('pokeLog'); });
    
    // ----
    
    
    $('.logout').on('click', function(){
       window.location.replace('logout.php'); 
    });
    
    loadHTMLFileInDiv();
    
} $(document).ready(onLoad);

function toggleTopMenu(){
    $('.topMenu').toggleClass('isIn');
}

function toggleHomeSub(){
    // In order to prevent some ugly clipping errors
    if($('.subMenuUsers').hasClass('isIn')) toggleUserSub();
    else if($('.subMenuForms').hasClass('isIn')) toggleFormsSub();
    
    if(!($('.subMenuHome').hasClass('isIn'))){
        $('.expandHome').css('animation', 'expandDown .50s ease-in-out    forwards');
        $('.subMenuHome').css('border-right', '3px #00ffcc solid');
        $('.home').css('border-right', '3px #00ffcc solid');
    }else{
        $('.expandHome').css('animation', 'expandUp .50s ease-in-out forwards');
        setTimeout(function(){
            $('.home').css('border-right', '');
        }, 560);
    }
    $('.subMenuHome').toggleClass('isIn');  
}

//This function loads the specific php files corresponding to the menu icon the user clicked on
function loadHTMLFileInDiv(){
    /*
    Possible outcomes:
    welcome, profile, features, overview, editSecurity, editWiki, editFAQ, code, banUser, pardonUser, promoteUser, inviteUser, gitHub, pokeLog
    */
    switch(currentPage){
        case 'welcome':
            $('.mainContent').load('_subSites/welcome.php');    
            break;
        case 'profile':
            $('.mainContent').load('_subSites/_home/profile.php');    
            break;
        case 'features':
            $('.mainContent').load('_subSites/_home/features.php');    
            break;
        case 'overview':
            $('.mainContent').load('_subSites/_home/overview.php');    
            break;
        case 'editSecurity':
            $('.mainContent').load('_subSites/_forms/editSecurity.php');    
            break; 
        case 'editWiki':
            $('.mainContent').load('_subSites/_forms/editWiki.php');    
            break; 
        case 'editFAQ':
            $('.mainContent').load('_subSites/_forms/editFAQ.php');    
            break; 
        case 'code':
            $('.mainContent').load('_subSites/code.php');    
            break; 
        case 'banUser':
            $('.mainContent').load('_subSites/_users/banUser.php');    
            break; 
        case 'pardonUser':
            $('.mainContent').load('_subSites/_users/pardonUser.php');    
            break; 
        case 'promoteUser':
            $('.mainContent').load('_subSites/_users/promotUser.php');    
            break;
        case 'inviteUser':
            $('.mainContent').load('_subSites/_users/inviteUser.php');    
            break; 
        case 'gitHub':
            $('.mainContent').load('_subSites/gitHub.php');    
            break;
        case 'pokeLog':
            $('.mainContent').load('_subSites/pokeLog.php');    
            break;
        case 'messages':
            $('.mainContent').load('_subSites/messages.php');    
            break; 
    }
}

// Changes the page
function changePage(newPage){
    currentPage = newPage;
    loadHTMLFileInDiv();
}

function toggleUserSub(){
    // In order to prevent some ugly clipping errors
    if($('.subMenuHome').hasClass('isIn')) toggleHomeSub();
    else if($('.subMenuForms').hasClass('isIn')) toggleFormsSub();
    
    if(!($('.subMenuUsers').hasClass('isIn'))){
        $('.expandUsers').css('animation', 'expandDown .50s ease-in-out    forwards');
        $('.subMenuUsers').css('border-right', '3px #00ffcc solid');
        $('.banUsers').css('border-right', '3px #00ffcc solid');
    }else{
        $('.expandUsers').css('animation', 'expandUp .50s ease-in-out forwards');
        setTimeout(function(){
            $('.banUsers').css('border-right', '');
        }, 560);
    }
    $('.subMenuUsers').toggleClass('isIn'); 
}

function toggleFormsSub(){
    // In order to prevent some ugly clipping errors
    if($('.subMenuHome').hasClass('isIn')) toggleHomeSub();
    else if($('.subMenuUsers').hasClass('isIn')) toggleUserSub();
    
    if(!($('.subMenuForms').hasClass('isIn'))){
        $('.expandForms').css('animation', 'expandDown .50s ease-in-out    forwards');
        $('.subMenuForms').css('border-right', '3px #00ffcc solid');
        $('.forms').css('border-right', '3px #00ffcc solid');
    }else{
        $('.expandForms').css('animation', 'expandUp .50s ease-in-out forwards');
        setTimeout(function(){
            $('.forms').css('border-right', '');
        }, 560);
    }
    $('.subMenuForms').toggleClass('isIn'); 
}

function getUnreadMails(unreadMails){
    // All this function does is filtering an array with one position in order to get the unread mails
    for(var key in unreadMails) unreadMailsUserHas = unreadMails[key];
    showUnreadMails(unreadMailsUserHas);
}

function getState(stateDataUse){
    /*
    All this for loop does is getting the state of the user in order to set the power of the individual user
    
    Available: Coder, Developer, Supporter
    */
    for(var key in stateDataUse) stateUserIsIn = stateDataUse[key];
    setPower(stateUserIsIn);
}

// This function shows the users unread mails based on the variable
function showUnreadMails(unreadMailsUserHas){
    if(unreadMailsUserHas == 0){
        $('.numberOfMessages').css('visibility', 'hidden');
        $('.numberOfMessages').css('animation', '');   
    }
    else{
        $('.numberOfMessagesText').text(unreadMailsUserHas);
        $('.numberOfMessages').css('visibility', 'visible');
        $('.numberOfMessages').css('animation', 'gotMail 10s cubic-bezier(.5,-0.43,.62,1.45) infinite');   
    }
}
/*
This function changes the visual look and feel of the Admin Panel according to the state the user is in
*/
function setPower(data){
    var currState = $('.state');
    
    if(data == 'webMaster'){
        currState.text('• Web Master');
        currState.css('color', '#ff1ac6');
    }
    
    if(data == 'coder'){
        currState.text('• Coder');
        currState.css('color', '#ff3333');
    }
    
    if(data == 'developer'){
        currState.text('• Developer');
        currState.css('color', '#b3b300');
    }
    
    if(data == 'supporter'){
        currState.text('• Supporter');
        currState.css('color', '#00cc44');
    }  
}