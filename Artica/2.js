$(function (){
	khoimonan = $('.nhieumon').isotope({
	itemsSelector:'.motmon',
	layoutMode:'masonry'
	});

	khoimonan.imagesLoaded().progress(function() {
		khoimonan.isotope('layout');
	});
		$('.text-tieude a').click(function(){
			dulieu=$(this).data('moan');
			console.log(dulieu);
			khoimonan.isotope({filter: dulieu})
			return false;
		});
})