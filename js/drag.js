(function(w){
	w.$$={};
	w.$$.drag = function(test_node,call_back){
		var element_Point = {x:0,y:0};
		var start_point = {x:0,y:0};
		test_node.onmousedown = function(ev){
			ev = ev||event;
			element_Point.x = this.offsetLeft;
			element_Point.y = this.offsetTop;
			
			start_point.x = ev.clientX;
			start_point.y = ev.clientY;
			
			if(test_node.setCapture){
				test_node.setCapture();
			}
			document.onmousemove = function(ev){
				ev = ev||event;
				var now_point ={x:0,y:0};
				now_point.x = ev.clientX;
				now_point.y = ev.clientY;
				//now_point.x
				var L = element_Point.x +now_point.x -start_point.x
				var T = element_Point.y +now_point.y -start_point.y
				
				if(L<0){
					L = 0;
				}else if(L>test_node.offsetParent.offsetWidth - test_node.clientWidth){
					L = test_node.offsetParent.offsetWidth - test_node.clientWidth
				}
				
				test_node.style.left = L+"px";
				
				if(call_back&&typeof call_back["move"] === "function"){
					call_back["move"].call(test_node);
				}
			}
			document.onmouseup=function(){
				document.onmousemove = document.onmouseup =null;
				if(document.releaseCapture){
					document.releaseCapture();
				}
			}
			return  false;
		}
	}
})(window)

