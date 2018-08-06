// 轮播图
window.onload = function(){
	initUI();
	changeImg();
	
	$(".list_pic").mouseover(stopChange);
	$(".list_pic").mouseout(changeImg);
		
	$("#btns li").click(function(){
		goImg($(this).index()+1);
	});
	
	let arr = ["http://www.1000phone.com","http://www.baidu.com","http://www.taobao.com","http://www.jingdong.com","http://www.mobiletrain.org"];
	
	$("img").click(function(){
		location.href=arr[$(this).index()];
	});
}

//初始化UI
function initUI(){
	$("#btns li:eq(0)").css({"background-color":"red"});
}

let myTimer;
var ord = 1;//当前图片的序号

//停止
function stopChange(){
	window.clearInterval(myTimer);
}

//跳转到指定的图片上。
function goImg(transOrd){
	//1、改变数据
	outOrd = ord;//此时的ord就是要出去ord。
	ord=transOrd;//改变ord的值；
	//2、处理边界
	if(ord>3){
		ord=1;
	}	
	//3、外观呈现
	//1)、把所有的豆豆变成原始颜色（粉的）
	//2)、把当前的豆豆变成高亮（红色）
	$("#btns li").eq(transOrd-1).css({"background-color":"red"}).siblings().css({"background-color":"black"});

	//3)、滑入滑出
	sliderIn(outOrd,ord);
}

//改变图片
function changeImg(){
	myTimer = setInterval(function(){
		//1、改变数据
		//移出的图片序号
		let outOrd = ord;//移出的图片序号
		ord=ord+1;
		//2、处理边界
		if(ord>3){
			ord=1;
		}		
		//3、外观呈现
//		//1)、把所有的豆豆变成原始颜色（粉的）
//		//2)、把当前的豆豆变成高亮（红色）
		$("#btns li").eq(ord-1).css({"background-color":"red"}).siblings().css({"background-color":"black"});
//		//3)、图片滑入
		sliderIn(outOrd,ord);
	},4000);	
}

function sliderIn(outOrd,inOrd){
	$(".item").eq(outOrd-1).css({"left":0}).animate({
		      left:-1920
	},1000);
	$(".item").eq(inOrd-1).css({"left":400}).animate({
		      left:0
	},1000);
}

// 配件专区
$("#list_kmt").hover(
    function(){
        $(".kmt_img").css({"display":"block"});
        $(".cdb_img").css({"display":"none"});
        $(".ej_img").css({"display":"none"});
    },
)
$("#list_cdb").hover(
    function(){
        $(".kmt_img").css({"display":"none"});
        $(".cdb_img").css({"display":"block"});
        $(".ej_img").css({"display":"none"});
    },
    function(){
       

    }
)
$("#list_ej").hover(
    function(){
        $(".kmt_img").css({"display":"none"});
        $(".cdb_img").css({"display":"none"});
        $(".ej_img").css({"display":"block"});
    },
    function(){
       

    }
)












