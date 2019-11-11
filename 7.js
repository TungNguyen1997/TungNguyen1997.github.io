document.addEventListener("DOMContentLoaded",function () {
	var nuthome = document.querySelector(".home");
	var top=document.querySelector('.top-header');
	var navbar=document.querySelector('.navbar');
	var textpart2=document.querySelector('.text-newdishes');
	var imgpart2=document.querySelector('.img-newdishes');
	var part3=document.querySelector('.HotDishes');
	var part4=document.querySelectorAll('.items');
	var part5=document.querySelector('.ourmenu');
	var part6=document.querySelector('.banner');
	var part62=document.querySelector('.products');
	var vitri=part6.offsetTop-900;
	var part7=document.querySelector('.text-delicious');
	var part72=document.querySelectorAll('.img-chef');
	var part8=document.querySelector('.text-ourblog');
	var part82=document.querySelectorAll('.item-blog');
	var part9=document.querySelector('.footer');
	var vitripart8 = part8.offsetTop-900;
	var vitripart7=part7.offsetTop-900;
	var vitripart9 = part9.offsetTop-900;
	var banut=document.querySelectorAll('.banut ul li');
	var slide=document.querySelectorAll('.oneslide');
	top.classList.add('effecttop');
	navbar.classList.add('effectnavbar');
	textpart2.classList.add('traiqua');
	imgpart2.classList.add('phaiqua');
	part3.classList.add('effectnavbar2');
	
	var thoigian = setInterval(function(){
			autoSlide();
		},1500);

	window.addEventListener('scroll',function(){
		if (window.pageYOffset > 400){
			for (var i = 0; i < part4.length; i++) {
				part4[i].classList.add('xoay');
			}
		}
		if(window.pageYOffset > vitripart9){
			part9.classList.add('effectnavbar');
		}
		if(window.pageYOffset > vitri){
			part6.classList.add('xoay2');
			part62.classList.add('xoay3');
		}
		if(window.pageYOffset > vitripart8){
			part8.classList.add('effectnavbar2');
			for (var i = 0; i < part82.length; i++) {
				part82[i].classList.add('effectnavbar');
			}
		}
		if(window.pageYOffset > vitripart7){
			part7.classList.add('effecttop');
			for (var i = 0; i < part72.length; i++) {
				part72[i].classList.add('effectnavbar2');
			}
			part72.classList.add('effectnavbar');
		}
		if (window.pageYOffset > 1000) {
			nuthome.classList.add('hienra');
			part5.classList.add('effectnavbar2');
		}
		else if(pageYOffset<800){
			nuthome.classList.remove('hienra');
		}
	});
	console.log(banut);
	for (var i = 0; i < banut.length; i++) {
		banut[i].onclick=function(){
			clearInterval(thoigian);
			for (var i = 0; i < banut.length; i++) {
				banut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');
			var nutkichhoat=this;
			var z=0;
			for (var z = 0; nutkichhoat=nutkichhoat.previousElementSibling; z++) {
			}
			for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('hienlen');
			}
			slide[z].classList.add('hienlen');
		}
	}
	function autoSlide(){
		var vitrislide = 0;
		var slidehientai = document.querySelector('.oneslide.hienlen');
		console.log(slide.length);
		
		for (var vitrislide = 0; slidehientai = slidehientai.previousElementSibling; vitrislide++) {

		}
		console.log(vitrislide);
		if(vitrislide == slide.length -1){ 
			slide[vitrislide].classList.remove('hienlen');
			slide[0].classList.add('hienlen');
			banut[vitrislide].classList.remove('kichhoat');
			banut[0].classList.add('kichhoat');

		}
		else if(vitrislide < 2)
		{
			for (var i = 0; i < slide.length; i++) {
			slide[i].classList.remove('hienlen');
			banut[i].classList.remove('kichhoat');
			
		}
		slide[vitrislide].nextElementSibling.classList.add('hienlen');
		banut[vitrislide].nextElementSibling.classList.add('kichhoat');
		}	
	}
	
		
	// body... 
},false) 