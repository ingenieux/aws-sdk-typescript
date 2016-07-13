var gulp   = require('gulp');
var ts    = require('gulp-typescript');
var shell  = require('gulp-shell');
var runseq = require('run-sequence');
var del  = require('del');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var tsProject = ts.createProject('tsconfig.json', {
  typescript: require('typescript')
});

var tsTestProject = ts.createProject('tsconfig-test.json', {
  typescript: require('typescript')
});

var paths = {
	tscripts : {
		src : 'app/src/**/*.ts',
		dest : 'app/build'
	},
	tests: {
		src: 'test/**/*.ts',
		dest: 'app/build/test'
	},
	templates: {
		src: 'app/src/**/*.handlebars'
	},
	output: 'output/**/*',
	srcAndTests:[]
};
paths.srcAndTests = [].concat(
	paths.tscripts.src,
	paths.tests.src,
	paths.templates.src
	);

gulp.task('default', ['watch']);

gulp.task('run', ['compile:typescript'], function(cb) {
  try {
    require('./app/build/app.js');

    cb(null, { "ok": true});
  } catch (err) {
    cb(err, null);
  }
});

gulp.task('buildrun', [ 'build', 'run'], function () {
});

// ** Watching ** //
gulp.task('watch', ['build'], function () {
	gulp.watch(paths.tscripts.src, ['build']);
});

gulp.task('watchrun', ['buildrun'], function () {
	gulp.watch(paths.srcAndTests, ['buildrun'])
	.on('change', function(event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
});

// ** Compilation ** //
gulp.task('build', [ 'compile:typescript' ]);

gulp.task('compile:typescript', [ 'clean' ], function () {
  return gulp.src(paths.tscripts.src, {base: 'app/src'}).
    pipe(sourcemaps.init({debug: true})).//
    pipe(ts(tsProject)).//
    pipe(sourcemaps.write('.')).//
    pipe(gulp.dest(paths.tscripts.dest));


});

gulp.task('compile:tests', [ 'run' ], function() {
	return gulp.src(paths.tests.src, { base: 'test'}).//
    pipe(sourcemaps.init({debug: true})).//
	  pipe(ts(tsTestProject)).//
    pipe(sourcemaps.write('.')).//
    pipe(gulp.dest(paths.tests.dest));
});

gulp.task('test', [ 'compile:tests' ]);

// ** Clean ** //

gulp.task('clean', ['clean:generated', 'clean:build']);

gulp.task('clean:generated', function() {
	return del(paths.output);
});

gulp.task('clean:build', function() {
	return del(paths.tscripts.dest);
});

gulp.task('concat', function () {
  return gulp.src(['output/typings/*.*'])
    .pipe(concat('index.d.ts'))
    .pipe(gulp.dest('.'));

});
