var resize = function(e){
  $("#tabs")[0].style.height = window.innerHeight-10+"px";
}
var init = function(){
  $('#whatsup').focus()
  window.onresize = resize;
  resize({});
}