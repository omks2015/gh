( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button"><a href="https://www.gettinghost.com"><img height="35px" src="https://cdnassets.com/getImage.php?url=www.gettinghost.com&src=logo.gif&t=1516210983"/></a> <div style="position: absolute; right: 3px! important;"><img height="30px" src="https://services.gettinghost.com/wp-content/uploads/2018/01/icon2.png"/></div></div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );
