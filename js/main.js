$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
    slideshowSpeed: 5000,
    animationLoop: true
  });
});

$('#hover-1').hover (
	function(){ $('.jumbo-1').addClass('show-jumbo') },
	function(){ $('.jumbo-1').removeClass('show-jumbo') }
);

$('#hover-2').hover (
	function(){ $('.jumbo-2').addClass('show-jumbo') },
	function(){ $('.jumbo-2').removeClass('show-jumbo') }
);

$('#hover-3').hover (
	function(){ $('.jumbo-3').addClass('show-jumbo') },
	function(){ $('.jumbo-3').removeClass('show-jumbo') }
);