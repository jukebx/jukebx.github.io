$(document).ready(function(){
  $('.main-nav-list img').resizeOnApproach({
    elementDefault: 70,
    elementClosest: 80,
    triggerDistance: 80
  });
  var flowerT = false;
  $('.flowerToggle').click(function(){
    if(!flowerT){
      $('.before').css('opacity','0.9');
      flowerT = true;
    }
    else{
      $('.before').css('opacity','0.04');
      flowerT = false;
    }
  })
})
