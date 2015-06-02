$(document).ready(function() {
	$body = $('body');
  $menu = $('#menu');
	$menuBtn = $('#mobile_menu_toggle');
	
	$menuBtn.click(function() {
		if( $menu.css('display') === 'block') {
			$menu.slideUp(200, function() {
				if ( $body.hasClass('menu-visible') )
					$body.removeClass('menu-visible')
			})
		} else {
			$menu.slideDown(200, function() {
				$body.addClass('menu-visible')
			})
		}
	})
	
	$(window).resize(function() {
		if( $menuBtn.css('display') === 'none' ) {
			$menu.css('display', 'block');
			$body.removeClass('menu-visible');
		} else if ( !$body.hasClass('menu-visible') ) {
			$menu.css('display', 'none')
		}
	})
	
});