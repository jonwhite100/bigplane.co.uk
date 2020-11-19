// Defining requirements
var gulp = require( 'gulp' );
var plumber = require( 'gulp-plumber' );
var sass = require( 'gulp-sass' );
<<<<<<< HEAD
var watch = require( 'gulp-watch' );
=======
>>>>>>> renamed-local-dir
var cssnano = require( 'gulp-cssnano' );
var rename = require( 'gulp-rename' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
<<<<<<< HEAD
var merge2 = require( 'merge2' );
var imagemin = require( 'gulp-imagemin' );
var ignore = require( 'gulp-ignore' );
var rimraf = require( 'gulp-rimraf' );
var clone = require( 'gulp-clone' );
var merge = require( 'gulp-merge' );
=======
var imagemin = require( 'gulp-imagemin' );
var ignore = require( 'gulp-ignore' );
var rimraf = require( 'gulp-rimraf' );
>>>>>>> renamed-local-dir
var sourcemaps = require( 'gulp-sourcemaps' );
var browserSync = require( 'browser-sync' ).create();
var del = require( 'del' );
var cleanCSS = require( 'gulp-clean-css' );
<<<<<<< HEAD
var gulpSequence = require( 'gulp-sequence' );
=======
>>>>>>> renamed-local-dir
var replace = require( 'gulp-replace' );
var autoprefixer = require( 'gulp-autoprefixer' );

// Configuration file to keep your code DRY
var cfg = require( './gulpconfig.json' );
var paths = cfg.paths;

// Run:
// gulp sass
// Compiles SCSS files in CSS
gulp.task( 'sass', function() {
<<<<<<< HEAD
    var stream = gulp.src( paths.sass + '/*.scss' )
=======
    var stream = gulp.src( `${paths.sass}/*.scss` )
>>>>>>> renamed-local-dir
        .pipe( sourcemaps.init( { loadMaps: true } ) )
        .pipe( plumber( {
            errorHandler: function( err ) {
                console.log( err );
                this.emit( 'end' );
            }
        } ) )
        .pipe( sass( { errLogToConsole: true } ) )
        .pipe( autoprefixer( 'last 2 versions' ) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( paths.css ) )
        .pipe( rename( 'custom-editor-style.css' ) );
    return stream;
});

// Run:
// gulp watch
// Starts watcher. Watcher runs gulp sass task on changes
gulp.task( 'watch', function() {
<<<<<<< HEAD
    gulp.watch( paths.sass + '/**/*.scss', ['styles'] );
    gulp.watch( [paths.dev + '/js/**/*.js', 'js/**/*.js', '!js/child-theme.js', '!js/child-theme.min.js'], ['scripts'] );

    //Inside the watch task.
    gulp.watch( paths.imgsrc + '/**', ['imagemin-watch'] );
=======
    gulp.watch( `${paths.sass}/**/*.scss`, gulp.series('styles') );
    gulp.watch( [`${paths.dev}/js/**/*.js`, 'js/**/*.js', '!js/child-theme.js', '!js/child-theme.min.js'], gulp.series('scripts') );

    //Inside the watch task.
    gulp.watch( `${paths.imgsrc} /**`, gulp.series('imagemin-watch') );
>>>>>>> renamed-local-dir
});

// Run:
// gulp imagemin
// Running image optimizing task
gulp.task( 'imagemin', function() {
<<<<<<< HEAD
    gulp.src( paths.imgsrc + '/**' )
=======
    gulp.src( `${paths.imgsrc}/**` )
>>>>>>> renamed-local-dir
    .pipe( imagemin() )
    .pipe( gulp.dest( paths.img ) );
});

/**
 * Ensures the 'imagemin' task is complete before reloading browsers
 * @verbose
 */
<<<<<<< HEAD
gulp.task( 'imagemin-watch', ['imagemin'], function( ) {
  browserSync.reload();

});
=======
gulp.task( 'imagemin-watch', gulp.series('imagemin', function reloadBrowserSync( ) {
  browserSync.reload();
}));
>>>>>>> renamed-local-dir

// Run:
// gulp cssnano
// Minifies CSS files
gulp.task( 'cssnano', function() {
<<<<<<< HEAD
  return gulp.src( paths.css + '/child-theme.css' )
=======
  return gulp.src( `${paths.css}/child-theme.css` )
>>>>>>> renamed-local-dir
    .pipe( sourcemaps.init( { loadMaps: true } ) )
    .pipe( plumber( {
            errorHandler: function( err ) {
                console.log( err );
                this.emit( 'end' );
            }
        } ) )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( cssnano( { discardComments: { removeAll: true } } ) )
    .pipe( sourcemaps.write( './' ) )
    .pipe( gulp.dest( paths.css ) );
});

gulp.task( 'minifycss', function() {
  return gulp.src( paths.css + '/child-theme.css' )
  .pipe( sourcemaps.init( { loadMaps: true } ) )
    .pipe( cleanCSS( { compatibility: '*' } ) )
    .pipe( plumber( {
            errorHandler: function( err ) {
                console.log( err ) ;
                this.emit( 'end' );
            }
        } ) )
    .pipe( rename( { suffix: '.min' } ) )
     .pipe( sourcemaps.write( './' ) )
    .pipe( gulp.dest( paths.css ) );
});

gulp.task( 'cleancss', function() {
<<<<<<< HEAD
  return gulp.src( paths.css + '/*.min.css', { read: false } ) // Much faster
=======
  return gulp.src( `${paths.css}/*.min.css`, { read: false } ) // Much faster
>>>>>>> renamed-local-dir
    .pipe( ignore( 'child-theme.css' ) )
    .pipe( rimraf() );
});

<<<<<<< HEAD
gulp.task( 'styles', function( callback ) {
    gulpSequence( 'sass', 'minifycss' )( callback );
} );
=======
gulp.task( 'styles', gulp.series( 'sass', 'minifycss' ));
>>>>>>> renamed-local-dir

// Run:
// gulp browser-sync
// Starts browser-sync task for starting the server.
gulp.task( 'browser-sync', function() {
    browserSync.init( cfg.browserSyncWatchFiles, cfg.browserSyncOptions );
} );

// Run:
<<<<<<< HEAD
// gulp watch-bs
// Starts watcher with browser-sync. Browser-sync reloads page automatically on your browser
gulp.task( 'watch-bs', ['browser-sync', 'watch', 'scripts'], function() {
} );

// Run:
=======
>>>>>>> renamed-local-dir
// gulp scripts.
// Uglifies and concat all JS files into one
gulp.task( 'scripts', function() {
    var scripts = [

        // Start - All BS4 stuff
<<<<<<< HEAD
        paths.dev + '/js/bootstrap4/bootstrap.js',

        // End - All BS4 stuff

        paths.dev + '/js/skip-link-focus-fix.js',

        // Adding currently empty javascript file to add on for your own themes´ customizations
        // Please add any customizations to this .js file only!
        paths.dev + '/js/custom-javascript.js'
    ];
  gulp.src( scripts )
    .pipe( concat( 'child-theme.min.js' ) )
	.pipe( uglify() )
=======
        `${paths.dev}/js/bootstrap4/bootstrap.bundle.js`,

        // End - All BS4 stuff

        `${paths.dev}/js/skip-link-focus-fix.js`,

        // Adding currently empty javascript file to add on for your own themes´ customizations
        // Please add any customizations to this .js file only!
        `${paths.dev}/js/custom-javascript.js`,
    ];
  gulp.src( scripts, { allowEmpty: true } )
    .pipe( concat( 'child-theme.min.js' ) )
    .pipe( uglify() )
>>>>>>> renamed-local-dir
	// JMW: Stops the watch being broken if there is a JS failure
	.on('error', function (err) {
		console.log(err.toString());
		this.emit('end');
	})
	// end of JMW
    .pipe( gulp.dest( paths.js ) );

<<<<<<< HEAD
  gulp.src( scripts )
=======
  return gulp.src( scripts, { allowEmpty: true } )
>>>>>>> renamed-local-dir
    .pipe( concat( 'child-theme.js' ) )
    .pipe( gulp.dest( paths.js ) );
});

<<<<<<< HEAD
// Deleting any file inside the /src folder
gulp.task('clean-source', function () {
  return del(['src/**/*',]);
=======
// Run:
// gulp watch-bs
// Starts watcher with browser-sync. Browser-sync reloads page automatically on your browser
gulp.task( 'watch-bs', gulp.parallel('browser-sync', 'watch', 'scripts'));

// Deleting any file inside the /src folder
gulp.task('clean-source', function () {
  return del(['src/**/*']);
>>>>>>> renamed-local-dir
});

// Run:
// gulp copy-assets.
// Copy all needed dependency assets files from bower_component assets to themes /js, /scss and /fonts folder. Run this task after bower install or bower update

////////////////// All Bootstrap SASS  Assets /////////////////////////
gulp.task( 'copy-assets', function() {

////////////////// All Bootstrap 4 Assets /////////////////////////
// Copy all JS files
<<<<<<< HEAD
    var stream = gulp.src( paths.node + 'bootstrap/dist/js/**/*.js' )
        .pipe( gulp.dest( paths.dev + '/js/bootstrap4' ) );

// Copy all Bootstrap SCSS files
    gulp.src( paths.node + 'bootstrap/scss/**/*.scss' )
        .pipe( gulp.dest( paths.dev + '/sass/bootstrap4' ) );
=======
    var stream = gulp.src( `${paths.node}bootstrap/dist/js/**/*.js` )
        .pipe( gulp.dest( `${paths.dev}/js/bootstrap4` ) );

// Copy all Bootstrap SCSS files
    gulp.src( `${paths.node}bootstrap/scss/**/*.scss` )
        .pipe( gulp.dest( `${paths.dev}/sass/bootstrap4` ) );
>>>>>>> renamed-local-dir

////////////////// End Bootstrap 4 Assets /////////////////////////

// Copy all Font Awesome Fonts
<<<<<<< HEAD
    gulp.src( paths.node + 'font-awesome/fonts/**/*.{ttf,woff,woff2,eot,svg}' )
        .pipe( gulp.dest( './fonts' ) );

// Copy all Font Awesome SCSS files
    gulp.src( paths.node + 'font-awesome/scss/*.scss' )
        .pipe( gulp.dest( paths.dev + '/sass/fontawesome' ) );


// _s SCSS files
    gulp.src( paths.node + 'undescores-for-npm/sass/media/*.scss' )
        .pipe( gulp.dest( paths.dev + '/sass/underscores' ) );

// _s JS files into /src/js
    gulp.src( paths.node + 'undescores-for-npm/js/skip-link-focus-fix.js' )
        .pipe( gulp.dest( paths.dev + '/js' ) );

// Copy Popper JS files
    gulp.src( paths.node + 'popper.js/dist/umd/popper.min.js' )
        .pipe( gulp.dest( paths.js + paths.vendor ) );
    gulp.src( paths.node + 'popper.js/dist/umd/popper.js' )
        .pipe( gulp.dest( paths.js + paths.vendor ) );

// UnderStrap SCSS files
    gulp.src( paths.node + 'understrap/sass/**/*.scss' )
        .pipe( gulp.dest( paths.dev + '/sass/understrap' ) );
=======
    gulp.src( `${paths.node}font-awesome/fonts/**/*.{ttf,woff,woff2,eot,svg}` )
        .pipe( gulp.dest( './fonts' ) );

// Copy all Font Awesome SCSS files
    gulp.src( `${paths.node}font-awesome/scss/*.scss` )
        .pipe( gulp.dest( `${paths.dev}/sass/fontawesome` ) );


// _s SCSS files
    gulp.src( `${paths.node}undescores-for-npm/sass/media/*.scss` )
        .pipe( gulp.dest( `${paths.dev}/sass/underscores` ) );

// _s JS files into /src/js
    gulp.src( `${paths.node}undescores-for-npm/js/skip-link-focus-fix.js` )
        .pipe( gulp.dest( `${paths.dev}/js` ) );

// Copy Popper JS files
    gulp.src( `${paths.node}popper.js/dist/umd/popper.min.js` )
        .pipe( gulp.dest( `${paths.js}${paths.vendor}` ) );
    gulp.src( `${paths.node}popper.js/dist/umd/popper.js` )
        .pipe( gulp.dest( `${paths.js}${paths.vendor}` ) );

// UnderStrap SCSS files
    // gulp.src( `${paths.node}understrap/sass/**/*.scss` )
    //     .pipe( gulp.dest( `${paths.dev}/sass/understrap` ) );
>>>>>>> renamed-local-dir

    return stream;
});

// Deleting the files distributed by the copy-assets task
gulp.task( 'clean-vendor-assets', function() {
<<<<<<< HEAD
  return del( [paths.dev + '/js/bootstrap4/**', paths.dev + '/sass/bootstrap4/**', './fonts/*wesome*.{ttf,woff,woff2,eot,svg}', paths.dev + '/sass/fontawesome/**', paths.dev + '/sass/underscores/**', paths.dev + '/js/skip-link-focus-fix.js', paths.js + '/**/skip-link-focus-fix.js', paths.js + '/**/popper.min.js', paths.js + '/**/popper.js', ( paths.vendor !== ''?( paths.js + paths.vendor + '/**' ):'' )] );
=======
  return del( [`${paths.dev}/js/bootstrap4/**`, `${paths.dev}/sass/bootstrap4/**`, './fonts/*wesome*.{ttf,woff,woff2,eot,svg}', `${paths.dev}/sass/fontawesome/**`, `${paths.dev}/sass/underscores/**`, `${paths.dev}/js/skip-link-focus-fix.js`, `${paths.js}/**/skip-link-focus-fix.js`, `${paths.js}/**/popper.min.js`, `${paths.js}/**/popper.js`, ( paths.vendor !== ''?( `${paths.js}${paths.vendor}/**` ):'' )] );
});

// Deleting any file inside the /dist folder
gulp.task( 'clean-dist', function() {
  return del( [`${paths.dist}/**`] );
>>>>>>> renamed-local-dir
});

// Run
// gulp dist
// Copies the files to the /dist folder for distribution as simple theme
<<<<<<< HEAD
gulp.task( 'dist', ['clean-dist'], function() {
  return gulp.src( ['**/*', '!' + paths.bower, '!' + paths.bower + '/**', '!' + paths.node, '!' + paths.node + '/**', '!' + paths.dev, '!' + paths.dev + '/**', '!' + paths.dist, '!' + paths.dist + '/**', '!' + paths.distprod, '!' + paths.distprod + '/**', '!' + paths.sass, '!' + paths.sass + '/**', '!readme.txt', '!readme.md', '!package.json', '!package-lock.json', '!gulpfile.js', '!gulpconfig.json', '!CHANGELOG.md', '!.travis.yml', '!jshintignore',  '!codesniffer.ruleset.xml',  '*'], { 'buffer': false } )
  .pipe( replace( '/js/jquery.slim.min.js', '/js' + paths.vendor + '/jquery.slim.min.js', { 'skipBinary': true } ) )
  .pipe( replace( '/js/popper.min.js', '/js' + paths.vendor + '/popper.min.js', { 'skipBinary': true } ) )
  .pipe( replace( '/js/skip-link-focus-fix.js', '/js' + paths.vendor + '/skip-link-focus-fix.js', { 'skipBinary': true } ) )
    .pipe( gulp.dest( paths.dist ) );
});

// Deleting any file inside the /dist folder
gulp.task( 'clean-dist', function() {
  return del( [paths.dist + '/**'] );
});
=======
gulp.task( 'dist', gulp.series('clean-dist', function copyToDistFolder() {
    const ignorePaths = [`!${paths.bower}`, `!${paths.bower}/**`, `!${paths.node}`, `!${paths.node}/**`, `!${paths.dev}`, `!${paths.dev}/**`, `!${paths.dist}`, `!${paths.dist}/**`, `!${paths.distprod}`, `!${paths.distprod}/**`, `!${paths.sass}`, `!${paths.sass}/**`],
    ignoreFiles = [ '!readme.txt', '!readme.md', '!package.json', '!package-lock.json', '!gulpfile.js', '!gulpconfig.json', '!CHANGELOG.md', '!.travis.yml', '!jshintignore',  '!codesniffer.ruleset.xml' ];

    console.log({ ignorePaths, ignoreFiles })

  return gulp.src( ['**/*', ...ignorePaths, ...ignoreFiles,  '*'], { 'buffer': false } )
  .pipe( replace( '/js/jquery.slim.min.js', `/js${paths.vendor}/jquery.slim.min.js`, { 'skipBinary': true } ) )
  .pipe( replace( '/js/popper.min.js', `/js${paths.vendor}/popper.min.js`, { 'skipBinary': true } ) )
  .pipe( replace( '/js/skip-link-focus-fix.js', `/js${paths.vendor}/skip-link-focus-fix.js`, { 'skipBinary': true } ) )
    .pipe( gulp.dest( paths.dist ) );
}));

// Deleting any file inside the /dist-product folder
gulp.task( 'clean-dist-product', function() {
  return del( [`${paths.distprod}/**`] );
} );
>>>>>>> renamed-local-dir

// Run
// gulp dist-product
// Copies the files to the /dist-prod folder for distribution as theme with all assets
<<<<<<< HEAD
gulp.task( 'dist-product', ['clean-dist-product'], function() {
  return gulp.src( ['**/*', '!' + paths.bower, '!' + paths.bower + '/**', '!' + paths.node, '!' + paths.node + '/**', '!' + paths.dist, '!' + paths.dist +'/**', '!' + paths.distprod, '!' + paths.distprod + '/**', '*'] )
    .pipe( gulp.dest( paths.distprod ) );
} );

// Deleting any file inside the /dist-product folder
gulp.task( 'clean-dist-product', function() {
  return del( [paths.distprod + '/**'] );
} );
=======
gulp.task( 'dist-product', gulp.series('clean-dist-product', function copyToDistFolder() {
  return gulp.src( ['**/*', `!${paths.bower}`, `!${paths.bower}/**`, `!${paths.node}`, `!${paths.node}/**`, `!${paths.dist}`, `!${paths.dist}` +'/**', `!${paths.distprod}`, `!${paths.distprod}/**`, '*'] )
    .pipe( gulp.dest( paths.distprod ) );
} ));

// Deleting any file inside the /dist-product folder
gulp.task( 'compile', gulp.series( 'styles', 'scripts', 'dist' ));
>>>>>>> renamed-local-dir
