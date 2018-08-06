$(function(){
	$(".sj").hover(function(){
		$(".a1").css("display","block");
		$(".sj").css("background","#fff");
	},function(){
		$(".a1").css("display","none");
		$(".sj").css("background","#f3f3f3");
	});

	$(".huzx").hover(function(){
			$(".huzx1").css("display","block");
			$(".sa").css("background","#fff");
		},function(){
			$(".huzx1").css("display","none");
			$(".sa").css("background","#f3f3f3");
		});

	$(".dfd").hover(function(){
			$(this).find(".bk").css("display","block");
			$(this).css("background","#eeeeee");
			$(this).children("a").css("color","#ff9900");
			$(this).children("span").css("background-position"," -30px this.top");
		},function(){
			$(this).find(".bk").css("display","none");
			$(this).css("background","#fff");
			$(this ).children("a").css("color","#111111");

		});
		
});

// jQuery.fn.extend({

// 	checkfunc:function(){	
// 			$("sa").hover(function(){
// 			$(".huzx1").css("display","block");
// 			$(".sa").css("background","#fff");
// 		},function(){
// 			$(".huzx1").css("display","none");
// 			$(".sa").css("background","#f3f3f3");
// 		});
// 	}
	
	
// });