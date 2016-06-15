$(document).ready(function() {
    $.material.init()
    var clipboard = new Clipboard('.clicker');

    clipboard.on('success', function(e) {
      $('.success').addClass('active');
      var closeUpShop = setInterval(function(){
        $('.success').removeClass('active');
        clearInterval(closeUpShop)
      },1500);
    });

    clipboard.on('error', function(e) {
      $('.error').addClass('active');
      var closeUpShop = setInterval(function(){
        $('.error').removeClass('active');
        clearInterval(closeUpShop)
      },2000);
    });
    $('#title').change(function(){
      $('.save').attr('download',$('#title').val()+'.jukebxCreator')
      $('.finalize').attr('download',$('#title').val()+'.json');
    })
    $('.save').click(function(){
      var textData = new Blob([$('textarea.editor').val()], {type: 'text/plain'});
      var myTextFile = window.URL.createObjectURL(textData);
      document.querySelector('.save').href = myTextFile;
      $('.save').click();
    });
    $('.finalize').click(function(){
      var textData = new Blob([$('textarea.editor').val()], {type: 'text/plain'});
      var myTextFile = window.URL.createObjectURL(textData);
      document.querySelector('.finalize').href = myTextFile;
      $('.finalize').click();
    });

    $(window).keydown(function(e) {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        var char = (e.metaKey ? '⌘-' : '') + String.fromCharCode(e.keyCode);
        if(char === "⌘-S"){
          e.preventDefault();
          $('.save').click();
        }
        $('#keydown').append('<kbd>' + char + '</kbd>')
      }
    });
    var input = document.getElementById("input");
    var output = document.querySelector("[for=input]");
    input.onchange = function(e) {
      var reader = new FileReader();
      reader.onload = function(evt) {
        output.textContent = evt.target.result;
      };
      reader.readAsText(e.target.files[0]);
  };
});
