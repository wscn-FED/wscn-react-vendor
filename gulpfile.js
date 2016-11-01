var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifyOpt = {
    mangle: {
        except: ['$', 'require','module','exports']
    }
};
var path = require('path');

var nodeModulesDir = path.join(__dirname, './node_modules');


var reactProdPath = path.join(nodeModulesDir, 'react/dist/react-with-addons.min.js');
var reactDevPath = path.join(nodeModulesDir, 'react/dist/react-with-addons.js');
var reactDomPath = path.join(nodeModulesDir, 'react-dom/dist/react-dom.min.js');
var axiosPath = path.join(nodeModulesDir, 'axios/dist/axios.min.js');
var coreJs=path.join('./', 'core-js.min.js');

gulp.task('default',['uglify','dev'],function(){});

gulp.task('uglify',function(){
    var commons = [
        reactProdPath,
        reactDomPath,
        axiosPath,
        coreJs
    ];
    return gulp.src(commons)
        .pipe(concat('wscn-react-vendor.min.js'))
        .pipe(uglify(uglifyOpt))
        .pipe(gulp.dest('dist/'))
});

gulp.task('dev',function(){
    var commons = [
        reactDevPath,
        reactDomPath,
        axiosPath,
        coreJs
    ];
    return gulp.src(commons)
        .pipe(concat('wscn-react-vendor.js'))
        .pipe(gulp.dest('dist/'))
})