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
  });
  $('.homepage').click(function(){
    alert('On Firefox, drag the tab over to the home icon in the left.');
  })
  $('.star').click(function(){
    var quotes = ['',"The most important thing is to enjoy your life - to be happy - it's all that matters. \n From Audrey Hepbrun"]
  })

})
