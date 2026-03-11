//Code for the button press to check the background
function changeBackground(){
    document.body.style.backgroundImage = "url('/digitalrain.gif')";
}
//Code for keydown
function keydownFunction(){
    document.getElementById("demo").style.backgroundColor = "red";
}
//Keyup function
function keyupFunction(){
    document.getElementById("demo").style.backgroundColor = "green";
}

//JQuery code, doesn't work was supposed to highlight on the navclass which site you were on
$(function(){
var $page = jQuery.url.attr("file");
if(!$page){
    $page = '/HTML/index.html';
}
$('.ulist a').each(function(){
var $href = $(this).attr('href');
if(($href == $page) || ($href == '')){
    $(this).addClass('on');
}
else {
    $(this).removeClass('on');
}
});
});