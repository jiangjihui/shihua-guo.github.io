  /*����ֻ��ţ�*/
    function ckMobile(){
    	var mobile;
    	mobile=$("#mobile").val();
    	if(mobile.length==0){
    		document.getElementById("iphone_error").innerHTML="�������ֻ��ţ�";
    	}
    	if(mobile.length!=11){
    		document.getElementById("iphone_error").innerHTML="�ֻ���ʽ��������������";
    	}
    	else{
    		document.getElementById("iphone_error").innerHTML="";
    	}
    }
    
    /*�������� */
    function check_pass(){
    	var pass;
    	pass=document.getElementById("pass").value;
    	pass=pass.trim();
    	_pass=pass;
    	if(pass==""){
    		document.getElementById("pass_error").innerHTML="6-14λ�ַ�����������ĸ�����ֺͷ��������������";
    	}
    	else{
    		if(pass.length<4){
				document.getElementById("pass").focus();
    			document.getElementById("pass_error").innerHTML="<font color='red'><b>���볤��ֻ����6-14λ�ַ�֮��</b></font>";
    		}
			else if(pass.length>16){
				document.getElementById("pass").focus();
				document.getElementById("pass_error").innerHTML="<font color='red'><b>���볤��ֻ����6-14λ�ַ�֮��</b></font>";
			}
    		else{
    			document.getElementById("pass_error").innerHTML="";
    		}
    	}
    }
    
    /*����rpass */
    function check_rpass(){
    	var rpass;
    	rpass=document.getElementById("rpass").value;
    	rpass=rpass.trim();
    	if(rpass==""){
    		document.getElementById("rpass_error").innerHTML="������ȷ������";
    	}
    	else if(rpass!=_pass){
			document.getElementById("rpass").focus();
    		document.getElementById("rpass_error").innerHTML="���벻һ��";
			return false;
    	}
    	else{
    		document.getElementById("rpass_error").innerHTML="";
			return true;
    	}
    }