window.onload = function(){
    var obtn = document.getElementById('Ct_fhDingBu');
    //��ȡҳ��������ĸ߶�
   /* var clientHeight=document.documentElement.clientHeight;  
    * clientHeight === 2686,ԭ�򣿣�����
    */
	var timer = null;
	var isTop = true;
		
    window.onscroll=function(){
      var osTop=document.documentElement.scrollTop||document.body.scrollTop;
   if (osTop >= 775){
        obtn.style.display="block"; //��ʾ��ť
	}else {
		obtn.style.display="none"; //���ذ�ť
	}
	if (!isTop){
		clearInterval(timer);
	}
		isTop = false;  
    };
	obtn.onclick = function(){
	//���ö�ʱ��
	timer = setInterval(function(){
        var osTop=document.documentElement.scrollTop||document.body.scrollTop;
        var ispeed = Math.floor(-osTop / 6);
    //��ȡ���������붥���ĸ߶�
    document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
    isTop = true;
    if(osTop == 0){
        clearInterval(timer);
        }
    },30);
    }
}