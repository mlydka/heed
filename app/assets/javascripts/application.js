//= require jquery
//= require bootstrap
//= require bootstrap-carousel
//= require jquery.jqDock.min
//= require gallery

var Application = {
    init: function() {
	Application.homepage_carousel();
	jQuery('#jq-menu').jqDock();
    },
    
    homepage_carousel: function() {
	$('#homeCarousel').carousel( { interval: 4000 } );
    }
};

$(document).ready(function(){
    Application.init();
});