document.addEventListener("DOMContentLoaded",function(){
	var nutphai = document.querySelector('.hainut .phai');
	var nuttrai =document.querySelector('.hainut .trai');
	var slides = document.querySelectorAll('.motslide');
	var chisohientai=0;
	var trangthai = 'abc';
	
	var chuyenslide = function(){
		var dem = 0;
		if(trangthai == 'xyz'){
				return false;
		}
		trangthai='xyz';
		var slidehientai = slides[chisohientai];
		if(chisohientai < slides.length-1){
				chisohientai++;
		}
		else {
			chisohientai = 0;
		}
		var slideketiep = slides[chisohientai];
		slidehientai.classList.add('bienmatkhiannext');
		slideketiep.classList.add('hienrakhiannext');

	var hientaiketthuc = function(){
		this.classList.remove('bienmatkhiannext');
		this.classList.remove('hienlen');
		dem++;
		
		if (dem == 2) {
			trangthai='abc';
		}
	}
	console.log(dem);
	var ketiepketthuc = function(){
		this.classList.remove('hienrakhiannext');
		this.classList.add('hienlen');
		dem++;
		console.log(dem);
		if (dem == 2) {
			trangthai='abc';
		}
		

	}
	
	slidehientai.addEventListener("webkitAnimationEnd",hientaiketthuc);
	slideketiep.addEventListener("webkitAnimationEnd",ketiepketthuc);
	}
	var chuyenslide2 = function(){
		var slidehientai = slides[chisohientai];
		if(chisohientai > 0 ){
			chisohientai--;
		}
		else {
			chisohientai=slides.length-1;
		}
		var slideketiep=slides[chisohientai];
		slidehientai.classList.add('animation1');
		slideketiep.classList.add('animation2');
			var hientaiketthuc = function(){
		this.classList.remove('animation1');
		this.classList.remove('hienlen');
	}
	var ketiepketthuc = function(){
		this.classList.remove('animation2');
				this.classList.add('hienlen');

	}
	slidehientai.addEventListener("webkitAnimationEnd",hientaiketthuc);
	slideketiep.addEventListener("webkitAnimationEnd",ketiepketthuc);
	}
	nutphai.addEventListener('click',chuyenslide);
	nuttrai.addEventListener('click',chuyenslide2);
	
	

},false)