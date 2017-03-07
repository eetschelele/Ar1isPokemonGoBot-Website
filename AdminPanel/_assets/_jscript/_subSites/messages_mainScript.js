var array = [];

function onLoad(jQuery){
    $('.backToHome').removeClass('preLoad');
    $('.backToHome').on('click', function(){
        changePage('welcome');
    });
    
    if(unreadMailsUserHas != 0){
        getMails();
        getContentofMail();   
    }
    
    // Mail Options
    $('.nextMessage').on('click', function(){
        if(unreadMailsUserHas != 1) changeMessage('forwards');
    });
    $('.prevMessage').on('click', function(){
        if(unreadMailsUserHas != 1) changeMessage('backwards');
    });
    $('.readMessage').on('click', function(){
        readMessage();
    });
    // ----
    
} $(document).ready(onLoad);

function getMails(){
    if(unreadMailsUserHas == 1){
        $('.numberOfMailsSec').text(' unread message!');
        $('.nextMessage').css({
            '-webkit-filter': 'invert(30%)'
        });
        $('.prevMessage').css({
            '-webkit-filter': 'invert(30%)'
        });
    }
    else{
        $('.numberOfMailsSec').text(' unread messages!');
        $('.nextMessage').css({
            '-webkit-filter': 'invert(60%)'
        });
        $('.prevMessage').css({
            '-webkit-filter': 'invert(30%)'
        });
    }
    
    $('.setMails').text(unreadMailsUserHas);
    $('.setCurrentMailUserIsOn').text('1');
}

function getContentofMail(){
    var currentIteration = 0;
    
    for(var key in mailGot){
        array[currentIteration] = mailGot[key];
        currentIteration++;   
    }
    
    changeContentOfMail();
}

function changeContentOfMail(){
    $('.subjectOfMail').text(array[0]);
    $('.contentOfMail').text(array[1]);
}

function changeMessage(input){
    
}

function readMessage(){
    
}