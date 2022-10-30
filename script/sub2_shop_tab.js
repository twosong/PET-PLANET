$(function(){
	$('.tapcon > div').hide();
	$('.brand_shop_tap a').click(function () {
		$('.tapcon > div').hide().filter(this.hash).fadeIn();
		$('.brand_shop_tap a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
  });
