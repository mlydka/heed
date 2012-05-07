//= require jquery
//= require bootstrap
//= require jquery-ui
//= require jquery.jqDock.min
//= require simpleSlider
//= require gallery

var Application = {
    init: function() {
      jQuery('#jq-menu').jqDock();
      jQuery('#slideshow').simpleSlider();
    }
};

$(document).ready(function(){
  Application.init();
});