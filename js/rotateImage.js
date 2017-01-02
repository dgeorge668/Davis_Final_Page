$(document).ready(function() {
  if (window.orientation == 0) {
    $('body').hide();
    $('html').append("<div id='rotate'><img style='margin:auto;height:auto;width:90%;' src='rotate_device.png'></img></div>");
    $('html').css('background-color','black');
    $('#rotate').css('color','white');
    $('#rotate').css('margin','auto');
    $('#rotate').css('width','60%');
    $('#rotate').css('font-size',"50px");
    $('#rotate').css('padding-top',"200px");
    window.addEventListener("orientationchange",function() {
      if (window.orientation != 0) { 
        $('body').show();
        $('#rotate').hide();
      }
    });
  }
  window.addEventListener("orientationchange",function() {
    if (window.orientation == 0) {
      $('body').hide();
      window.addEventListener("orientationchange",function() {
        if (window.orientation != 0) $('body').show();
      });
    }
  });
});
