document.addEventListener("DOMContentLoaded",function() {
	var nut = document.getElementsByClassName('declick');
	var nd=document.getElementsByClassName('noidung');
	console.log(nut);
	for (var i = 0; i < nut.length; i++) {

		nut[i].addEventListener('click',function(){
			var y = this.getAttribute('data-hienlen');
			var z = document.getElementById(y);
			if(this.classList[1] == 'trang')
			{
				this.classList.remove('trang');
				z.classList.remove('hienra');

			}
			else{
				for (var k = 0; k < nut.length; k++) {
				nut[k].classList.remove('trang');
			}
			this.classList.toggle('trang');
			
			
			console.log(z);
			for (var u = 0; u< nd.length; u++) {

				nd[u].classList.remove('hienra');
			
				z.classList.add('hienra');
						}
			
		}
		})
			
			
			
	}

},false)
	// body...
