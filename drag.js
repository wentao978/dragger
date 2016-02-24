function drag(id){
	this.oDiv = document.getElementById(id);
	this.disX = 0;
	this.disY = 0;	
};

drag.prototype.init = function(){
	var This = this;
	this.oDiv.onmousedown = function(ev){
		var ev = ev || window.event;
		This.disX = ev.clientX - This.oDiv.offsetLeft;
		This.disY = ev.clientY - This.oDiv.offsetTop;	
		document.onmousemove = function(ev){
			var ev = ev || window.event;
			This.move(ev);	
		};
		document.onmouseup = function(ev){
			This.up();	
		};
	};
};

drag.prototype.move = function(ev){
	var ev = ev || window.event;
	var L = ev.clientX - this.disX;
	var T = ev.clientY - this.disY;
	if( L < 0 ){
		L = 0;
	}else if( L > document.documentElement.clientWidth - this.oDiv.offsetWidth){
		L = document.documentElement.clientWidth - this.oDiv.offsetWidth;
	};
	if( T < 0 ){
		T = 0;
	}else if( T > document.documentElement.clientHeight - this.oDiv.offsetHeight){
		T = document.documentElement.clientHeight - this.oDiv.offsetHeight;
	};
	this.oDiv.style.left = L + 'px';
	this.oDiv.style.top = T + 'px';	
};

drag.prototype.up = function(){
	document.onmousemove = null;
	document.onmouseup = null;	
};






















