var gulp = require('gulp');
var tslint = require('gulp-tslint');

var program = require('tslint').Linter.createProgram('./tsconfig.json');

gulp.task('lint', function () {
    return gulp.src('src/**/*.ts', { base: '.' })
        .pipe(tslint({ program }))
        .pipe(tslint.report({ summarizeFailureOutput: true }));
});

gulp.task('default', [ 'lint' ]);