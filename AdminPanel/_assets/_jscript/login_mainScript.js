function onLoad(jQuery){
    $('.username').on('click', function(){
        if($('.username').val() !== 'Username') return;
        $('.username').val('');
    });
    
    $('.password').on('click', function(){
        if($('.password').val() !== 'Password') return;
        $('.password').val('');
    });
} $(document).ready(onLoad);