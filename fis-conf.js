// 设置项目的更目录
fis.project.setProjectRoot('./app')

// set 为覆盖不是叠加,默认值：['node_modules/**', 'output/**', 'fis-conf']
fis.set('project.ignore', [
    'dist/**',
    'static/styles/**'
]);

//编译less
fis.match('/static/styles/*.less', {
    rExt: '.css',
    parser: fis.plugin("less-2.x",{

    })
})



if(fis.project.currentMedia() == 'pro'){
    fis.set('project.ignore', [
        'pages/**',
        'widgets/**',
        'static/styles/**',
        'dist/**'
    ]);
}


fis.media('pro')
    .match('*.png', {
        // fis-optimizer-png-compressor 插件进行压缩，已内置
        optimizer: fis.plugin('png-compressor')
    })
    .match('*.js', {
        // fis-optimizer-uglify-js 插件进行压缩，已内置
        optimizer: fis.plugin('uglify-js')
    });