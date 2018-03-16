$(document).ready(function () {

	/*facebook*/
	$('.facebook').on('click',function(e){
		e.preventDefault();
		window.open('https://www.facebook.com');
	});

	$('.facebook').on('mousedown',function(e){
		 e.preventDefault();
    	console.log(e.which);
    	console.log(e.type);
    
    	if(e.type=="contextmenu"){
       		console.log("Context menu prevented.");
       		return;
    		}
		if(e.which==2){
			e.preventDefault();
			window.open('https://www.facebook.com');	}
	});

	/*youtube*/
	$('.youtube').on('click',function(e){
		e.preventDefault();
		window.open('https://www.youtube.com');
	});

	$('.youtube').on('mousedown',function(e){
		 e.preventDefault();
    	console.log(e.which);
    	console.log(e.type);
    
    	if(e.type=="contextmenu"){
       		console.log("Context menu prevented.");
       		return;
    		}
		if(e.which==2){
			e.preventDefault();
			window.open('https://www.youtube.com');	}
	});

	/*twitter*/
$('.twitter').on('click',function(e){
		e.preventDefault();
		window.open('https://www.twitter.com');
	});

	$('.twitter').on('mousedown',function(e){
		 e.preventDefault();
    	console.log(e.which);
    	console.log(e.type);
    
    	if(e.type=="contextmenu"){
       		console.log("Context menu prevented.");
       		return;
    		}
		if(e.which==2){
			e.preventDefault();
			window.open('https://www.twitter.com');	}
	});

	/*pinterest*/
$('.pinterest').on('click',function(e){
		e.preventDefault();
		window.open('https://www.pinterest.com');
	});

	$('.pinterest').on('mousedown',function(e){
		 e.preventDefault();
    	console.log(e.which);
    	console.log(e.type);
    
    	if(e.type=="contextmenu"){
       		console.log("Context menu prevented.");
       		return;
    		}
		if(e.which==2){
			e.preventDefault();
			window.open('https://www.pinterest.com');	}
	});

	/*google play*/
$('.play').on('click',function(e){
		e.preventDefault();
		window.open('https://play.google.com/store/apps/details?id=com.saveyourfuel.saveyourfuel');
	});

	$('.play').on('mousedown',function(e){
		 e.preventDefault();
    	console.log(e.which);
    	console.log(e.type);
    
    	if(e.type=="contextmenu"){
       		console.log("Context menu prevented.");
       		return;
    		}
		if(e.which==2){
			e.preventDefault();
			window.open('https://play.google.com/store/apps/details?id=com.saveyourfuel.saveyourfuel');	}
	});



});