//==============================================================================
// Gulp Setup
//==============================================================================

var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

//==============================================================================
// File paths
//==============================================================================
var paths = {
  images   : 'public/assets/',
  js   : 'www/assets/javascripts/',
};

//==============================================================================
// Tasks
//==============================================================================
gulp.task('default', function() {
  // place code for your default task here
});

// Sprite Config
spriteConfig = {
    mode: {
        symbol: {
            prefix: "icon-%s",
            inline: true,
            example: {
              template: './sprite-template.html'
            },
        }
    }
};


// SVG Sprites
gulp.task('sprites', function () {
return gulp.src(paths.images + 'images/icons/**/*.svg')
  .pipe( plugins.svgSprite(spriteConfig) )
  .pipe( gulp.dest(paths.images + 'images') );
});


// JS
gulp.task('js', function() {
  return gulp.src(paths.js + '/**/*.js')
  .pipe(plugins.uglify())
  .on('error', swallowError)
  .pipe(gulp.dest(paths.js));
});


//==============================================================================
// Error Capture
//==============================================================================
function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}