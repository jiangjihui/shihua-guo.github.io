window.onload = function(){
    var obtn = document.getElementById('Ct_fhDingBu');
	//��ȡҳ��������ĸ߶�
	var clientHeight= document.documentElement.clientHeight||document.body.clientHeight;
	var timer = null;
	var isTop = true;
    
	window.onscroll=function(){
         //��ȡ���������붥���ĸ߶�
			var osTop = document.documentElement.scrollTop||document.body.scrollTop;
           if (osTop >= clientHeight){
            obtn.style.display="block";//��ʾ��ť
		}else {
			obtn.style.display='none'; //���ذ�ť
		}
		if (!isTop){
			clearInterval(timer);
		}
		isTop = false;
	};	
	obtn.onclick = function(){
		//���ö�ʱ��
		alert(osTop);
		timer = setInterval(function(){	
            var osTop = document.documentElement.scrollTop||document.body.scrollTop;
			var ispeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop +ispeed;
			
			isTop = true;
			console.log(osTop -ispeed);
			if (osTop === 0){
				clearInterval(timer);
			}
		},30);
	};
	
};