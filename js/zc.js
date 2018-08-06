///<creference path = "jquery-1.11.3.js/">

//验证用户名
	$("#username").blur(function(){
		// var regObj = /^(\w){5,25}$/;(/[^\u4e00-\u9fa5]/g,'');
		var regObj = /^\w{5,25}$/;
		if(regObj.test(this.value)){
			$("#ts1").hide();
		} else{
			$("#ts1").show();
		}

		var xhr = new XMLHttpRequest();
		xhr.open("get","zc.php?username="+$("username").val(),true);
		xhr.onreadystatechange =function(){
				if(xhr.readyState ==4 && xhr.status==200){
					if(xhr.responseText=="0"){
						$("#ts1").show();
						$("#ts1").html("用户名已存在");
					}
				}
			}
			xhr.send();
	})
//验证公司名称
	$("#gs").blur(function(){
		// var regObj = /^(\w){5,25}$/;(/[^\u4e00-\u9fa5]/g,'');
		var regObj = /^[\u4e00-\u9fa5]$/;
		if(regObj.test(this.value)){
			$("#gss").hide();
		} else{
			$("#gss").show();
		}
	})
//验证密码
	$("#password").blur(function(){
		var regObj = /^\w{6,20}$/;
		if(regObj.test(this.value)){
			$("#passwords").hide();
		} else{
			$("#passwords").show();
		}
	})
//重复密码

	$("#qdmm").blur(function(){
			if($("#password").val()==$("#qdmm").val()){
				$("#qdmms").hide();
			} else{
				$("#qdmms").show();
			}
		})

//手机号码
	$("#sjhm").blur(function(){
		var regObj = /^1(3|4|5|7|8|9)[0-9]{9}$/;
		if(regObj.test(this.value)){
			$("#sjhms").hide();
		} else{
			$("#sjhms").show();
		}
	})
//图形验证码
$(".yzm").click(function(){ 
	let arr=["imageCheckCode1.jpg",
			"imageCheckCode2.jpg",
			"imageCheckCode3.jpg",
			"imageCheckCode4.jpg",
			"imageCheckCode5.jpg",
			"imageCheckCode6.jpg",
			"imageCheckCode7.jpg"]
			let num=parseInt(Math.random()*arr.length+1);
			
$(".yzm").css("background","url(./img/imgzc/imageCheckCode"+num+".jpg) 0px 0px");

 //$(".yzm").css("background-size","99px 42px");
  $(".yzm").css("background-size","cover");
})
//手机验证码
	$("#hq").click(function(){
		let miao =59;
		let myTimer=null;
		$("#hq").html(miao);
		
				myTimer=setInterval(function(){
				miao--;
				if(miao==0){
					$("#hq").html("请重新获取验证码");
					clearInterval(myTimer);
				}else{
					$("#hq").html(miao);
				}
				
			},1000);
		

	})

//