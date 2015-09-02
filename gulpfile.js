/* 
    Requisição dos plugins
*/
var gulp    = require('gulp');
var uglify  = require('gulp-uglify');

/*
    Tarefa para minificar arquivos javascript
*/
gulp.task('minify', function() {
    
    var glob = 'src/*.js';

    /*
        Observa os arquivos js e executa a tarefa caso haja alteração.
    */
    gulp.watch(glob, ['minify']);

    /*
        Seleciona todos os arquivos javascript na pasta "src", 
        minifica com o plugin uglify e envia o resultado para a pasta "dist"
    */
    return gulp.src(glob)
                .pipe(uglify())
                .pipe(gulp.dest('dist'));

});

