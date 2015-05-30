var gulp   = require('gulp');
var tsc    = require('gulp-tsc');
var shell  = require('gulp-shell');
var runseq = require('run-sequence');

var paths = {
	tscripts : { src : ['app/src/**/*.ts'],
				dest : 'app/build' }
};

gulp.task('default', ['watch']);


// ** Running ** //

gulp.task('run', shell.task([
  'node app/build/app.js ../aws-sdk-js/apis'
]));

gulp.task('buildrun', function (cb) {
	runseq('build', 'run', cb);
});

// ** Watching ** //


gulp.task('watch', function () {
	gulp.watch(paths.tscripts.src, ['compile:typescript']);
});

gulp.task('watchrun', function () {
	gulp.watch(paths.tscripts.src, runseq('compile:typescript', 'run'));
});

// ** Compilation ** //

gulp.task('build', ['compile:typescript']);
gulp.task('compile:typescript', function () {
	return gulp
	.src(paths.tscripts.src)
	.pipe(tsc({
		module: "commonjs",
		emitError: false
	}))
	.pipe(gulp.dest(paths.tscripts.dest));
});
