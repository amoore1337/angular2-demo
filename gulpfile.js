var gulp = require('gulp');
var tslint = require('gulp-tslint');
var webpack = require('webpack-stream');

var program = require('tslint').Linter.createProgram('./tsconfig.json');

gulp.task('lint', function () {
    return gulp.src('src/**/*.ts', { base: '.' })
        .pipe(tslint({ program }))
        .pipe(tslint.report({ summarizeFailureOutput: true }));
});

gulp.task('webpack', function () {
    return gulp.src('src/main.ts', { base: '.' })
        .pipe(webpack( require('./webpack.config.js'), require('webpack') ))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', [ 'lint' ]);