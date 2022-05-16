window.onload = function(){
    setTimeout(()=>{
        $('#onload').fadeOut();
        $('body').removeClass('hidden');
    }, 3000);
}