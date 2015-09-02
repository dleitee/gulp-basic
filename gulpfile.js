/* 
    Requisição dos plugins
*/
var gulp    = require('gulp');
var uglify  = require('gulp-uglify');

/*
    Tarefa para minificar arquivos javascript
*/
gulp.task('minify', function() {
    
    /*
        Seleciona todos os arquivos javascript na pasta "src", 
        minifica com o plugin uglify e envia o resultado para a pasta "dist"
    */
    return gulp.src('src/*.js')
                .pipe(uglify())
                .pipe(gulp.dest('dist'));

});