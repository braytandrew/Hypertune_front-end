// Responsive navigation
$(document).ready(function(){
  $(".toggle").click(function(){
    $(".navigation").slideToggle(300);
  });
});

// Navigation icon open and close animation
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

// // Headroom
// var headroom = new Headroom(elem, {
//   "offset": 200,
//   "tolerance": 5,
//   "classes": {
//     "initial": "animated",
//     "pinned": "slideDown",
//     "unpinned": "slideUp"
//   }
// });
// headroom.init();

// // to destroy
// headroom.destroy();