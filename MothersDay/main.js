$(document).ready(function(){
  $('.main-nav-list img').resizeOnApproach({
    elementDefault: 70,
    elementClosest: 80,
    triggerDistance: 80
  });
});
alert();

$('.flowerToggle').click(function(){
  alert();
  $('body').toggleClass('flowers')
})
