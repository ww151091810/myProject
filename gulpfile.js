/**
 * @author wangwei
 * @function 配置
 */


var gulp = require('gulp'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    assetRev = require('gulp-asset-rev'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    runSequence = require('run-sequence'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    autoprefixer = require('gulp-autoprefixer'),
    webserver = require('gulp-webserver'),
    del = require('del');

//定义css、js源文件路径
var cssSrc = 'src/css/*.css',
    cssMinSrc = 'dist/css/*.css',
    jsSrc = 'src/js/*.js',
    jsMinSrc = 'dist/js/*.js',
    lessSrc = 'src/less/*.less',
    sassSrc = 'src/sass/*.scss',
    imgSrc = 'src/images/*.{png,jpg,gif,ico}',
    imgMinSrc = 'dist/images/*.{png,jpg,gif,ico}',
    fontSrc = 'src/fonts/*.{css,svg,ttf}',
    htmlSrc = 'src/*.html',
    condition = true;


//编译less 定义一个less任务（自定义任务名称）
gulp.task('sass', function() {
    return gulp.src(sassSrc) //该任务针对的文件
        .pipe(sass()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //编译后的路径
});

//为css中引入的图片/字体等添加hash编码
gulp.task('assetRev', function() {
    return gulp.src(cssSrc) //该任务针对的文件
        .pipe(assetRev()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //编译后的路径
});

//压缩css
gulp.task('cssMin', function() {
    return gulp.src(cssSrc) //压缩的文件
        // .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCss()) //执行压缩
        .pipe(gulp.dest('dist/css')); //输出文件夹
});

//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revCss', function() {
    return gulp.src(cssMinSrc)
        .pipe(rev()) //文件名加MD5后缀
        .pipe(rev.manifest()) //必须有这个方法 生成一个rev-manifest.json
        .pipe(gulp.dest('dist/css')); //将rev-manifest.json 保存到 dist/css 目录内
});

//压缩js
gulp.task('uglify', function() {
    return gulp.src(jsSrc)
        // .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//js生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revJs', function() {
    return gulp.src(jsMinSrc)
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist/js'));
});

//压缩html
gulp.task('htmlMin', function() {
    var options = {
        collapseWhitespace: true, //从字面意思应该可以看出来，清除空格，压缩html，这一条比较重要，作用比较大，引起的改变压缩量也特别大。
        collapseBooleanAttributes: true, //省略布尔属性的值，比如：<input checked="checked"/>,那么设置这个属性后，就会变成 <input checked/>。
        removeComments: true, //清除html中注释的部分，我们应该减少html页面中的注释。
        removeEmptyAttributes: true, //清除所有的空属性。
        removeScriptTypeAttributes: true, //清除所有script标签中的type="text/javascript"属性。
        removeStyleLinkTypeAttributes: true, //清楚所有Link标签上的type属性。
        minifyJS: true, //压缩html中的javascript代码。
        minifyCSS: true //压缩html中的css代码。
    };
    return gulp.src(htmlSrc)
        // .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});

//Html替换css、js文件版本
gulp.task('revHtml', function() {
    return gulp.src(['dist/**/*.json', 'dist/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('dist'));
});

//压缩image
gulp.task('imageMin', function() {
    gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('revImage', function() {
    return gulp.src(imgMinSrc)
        .pipe(rev())
        .pipe(rev.manifest()) //必须有这个方法 生成一个rev-manifest.json
        .pipe(gulp.dest('dist/images'));
});

//fonts
gulp.task('revFont', function(){
    return gulp.src(fontSrc)
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist/fonts'));
    });


gulp.task('build', function(done) {
    //condition = false;
    runSequence( //此处不能用gulp.run这个最大限度并行(异步)执行的方法，要用到runSequence这个串行方法(顺序执行)才可以在运行gulp后顺序执行这些任务并在html中加入版本号
        'sass',
        'assetRev',
        'cssMin',
        'revCss',
        'uglify',
        'revJs',
        'imageMin',
        'revImage',
        'htmlMin',
        'revFont',
        'revHtml',
        done);
});

gulp.task('default', ['build']);

gulp.task('clean', function(cb) {
    del(['dist/'], cb)
});



//开启本地服务webserver
gulp.task('webserver', ['default'], function() {
    gulp.src('./')
        .pipe(webserver({
            port: 8080, //端口
            host: '127.0.0.1', //域名
            liveload: true, //实时刷新代码。不用f5刷新
            directoryListing: {
                path: './',
                enable: true
            }
        }))
});

gulp.task('browser-sync', function() {
    var files = [
        'dist/**/*.html',
        'dist/**/*.css',
        'dist/**/*.js'
    ];
    //代理模式（本地服务器）
    browserSync.init(files, {
        proxy: 'http://localhost:3001' //此处根据项目实际目录填写
    });
});

//connect 建立一个配置对象变量，后面我们要传递给插件用来启动server
var serverConfig = {
    root: './dist', //从哪个目录开启server
    host: '127.0.0.1',
    port: 8080, //将服务开启在哪个端口
    livereload: true
}

gulp.task('server', function() {
    connect.server(serverConfig);
});

//重新加载
gulp.task('reload', function() {
    gulp.src('./dist/**/*')
        .pipe(connect.reload());
});


gulp.task('default', ['build']);