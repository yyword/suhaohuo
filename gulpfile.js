var gulp = require("gulp");//复制
var sass = require("gulp-sass");//sass
// var concat = require("gulp-concat");//合并
// var uglify = require("gulp-uglify");//合并并且压缩
// var connect = require("gulp-connect");
// var rename = require("gulp-rename");//合并并且压缩,重新起名字

// 定义一个复制文件的任务
gulp.task("copyhtml",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\suhaohuo"));
});
// 复制JS文件
gulp.task("copyjs",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\suhaohuo\\js"));
});
// 复制css文件
gulp.task("copycss",function(){
	gulp.src("scss/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\suhaohuo\\css"));
});
// 复制图片文件
gulp.task("images",function(){
	gulp.src("img/*.*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\suhaohuo\\img"));
});
//复制php文件
gulp.task("copyphp",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\suhaohuo\\php"));
});

//sass编译
gulp.task("sass",function(){
	gulp.src(["scss/*.scss"])
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\suhaohuo\\css"));
});

// //合并文件
// gulp.task("concatjs",function(){
// 	gulp.src(["js/index.js","js/goodslist.js"])
// 	.pipe(concat("index.js"))
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\suhaohuo\\js"));
// });


// //合并和压缩文件
// gulp.task("concatanduglifyjs",function(){
// 	gulp.src(["js/index.js","js/goodslist.js"])
// 	.pipe(concat("index.js"))
// 	.pipe(uglify())
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\suhaohuo\\js"));
// });
// 启动监听器
gulp.task("watchall",function(){
	gulp.watch("*.html",["copyhtml"]);
	gulp.watch("js/*.js",["copyjs"]);
	gulp.watch("css/*.css",["copycss"]);
	gulp.watch("img/*.*",["images"]);
	gulp.watch("scss/*.scss",["sass"]);
	// gulp.watch("js/index.js",["concatanduglifyandrenamejs"]);
});//当文件发生变化时执行这个命令
